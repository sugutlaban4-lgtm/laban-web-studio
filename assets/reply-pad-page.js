/* Renders the reply pad: filter by person, search, copy one reply at a time. */

(function () {
    "use strict";

    const data = window.LSH_REPLIES || [];
    const list = document.getElementById("list");
    const count = document.getElementById("count");
    const search = document.getElementById("search");
    const chips = Array.from(document.querySelectorAll(".pad-chip"));

    let filter = "all";

    function matches(item) {
        const isSwahili = /^Swahili reply/i.test(item.ask);
        if (filter === "swahili") {
            if (!isSwahili) return false;
        } else if (filter !== "all" && item.who !== filter) {
            return false;
        }

        const term = search.value.trim().toLowerCase();
        if (!term) return true;

        const haystack = (item.ask + " " + item.options.join(" ")).toLowerCase();
        return haystack.includes(term);
    }

    function esc(text) {
        return String(text)
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;");
    }

    function render() {
        const shown = data.filter(matches);

        count.textContent = shown.length
            ? shown.length + (shown.length === 1 ? " message" : " messages") +
              " \u00b7 " + shown.reduce((n, item) => n + item.options.length, 0) + " answers ready"
            : "Nothing matches that yet";

        if (!shown.length) {
            list.innerHTML = '<p class="empty">Try a shorter word, or switch to Everything.</p>';
            return;
        }

        list.innerHTML = shown.map(item => {
            const isSwahili = /^Swahili reply/i.test(item.ask);
            const tag = isSwahili ? "Swahili \u00b7 " + item.who : item.who;
            return (
                '<article class="scenario">' +
                '<span class="scenario-who">' + esc(tag) + "</span>" +
                '<h2 class="scenario-ask">' + esc(item.ask) + "</h2>" +
                item.options.map((option, i) =>
                    '<div class="reply">' +
                    "<p>" + esc(option) + "</p>" +
                    '<button class="copy" type="button" data-text="' + esc(option) + '" data-key="' +
                    esc(item.id) + "-" + i + '">Copy</button>' +
                    "</div>"
                ).join("") +
                "</article>"
            );
        }).join("");
    }

    function flash(button) {
        const original = "Copy";
        button.textContent = "Copied";
        button.classList.add("is-done");
        setTimeout(() => {
            button.textContent = original;
            button.classList.remove("is-done");
        }, 1600);
    }

    function copyText(text) {
        if (navigator.clipboard && navigator.clipboard.writeText) {
            return navigator.clipboard.writeText(text).then(() => true).catch(() => fallback(text));
        }
        return Promise.resolve(fallback(text));
    }

    function fallback(text) {
        const area = document.createElement("textarea");
        area.value = text;
        area.setAttribute("readonly", "");
        area.style.position = "fixed";
        area.style.opacity = "0";
        document.body.appendChild(area);
        area.select();
        let ok = false;
        try {
            ok = document.execCommand("copy");
        } catch (error) {
            ok = false;
        }
        document.body.removeChild(area);
        return ok;
    }

    list.addEventListener("click", event => {
        const button = event.target.closest(".copy");
        if (!button) return;
        copyText(button.dataset.text || "").then(() => flash(button));
    });

    chips.forEach(chip => {
        chip.addEventListener("click", () => {
            filter = chip.dataset.filter;
            chips.forEach(other => other.setAttribute("aria-pressed", String(other === chip)));
            render();
        });
    });

    search.addEventListener("input", render);

    render();

    /* Keep it usable when the bundle is gone. Optional, never blocks the page. */
    if ("serviceWorker" in navigator) {
        window.addEventListener("load", () => {
            navigator.serviceWorker.register("reply-sw.js").catch(() => {});
        });
    }
})();
