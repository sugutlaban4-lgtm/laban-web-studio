/* Renders the 30 day plan, copies captions, and draws a 1080x1350 image
   on a canvas so each post can go out with its own status card. */

(function () {

    const SITE = "https://sugutlaban4-lgtm.github.io/Learn-Smart-Hub-Laban/";
    const plan = window.LSH_SOCIAL_PLAN || [];
    const list = document.getElementById("list");
    const count = document.getElementById("count");
    const filters = document.getElementById("filters");

    if (!plan.length || !list) return;

    const seen = new Set(JSON.parse(localStorage.getItem("lsh_posted") || "[]"));

    let week = "all";

    function remember(day) {
        seen.add(day);
        localStorage.setItem("lsh_posted", JSON.stringify([...seen]));
    }

    function withLink(text) {
        return text.split("[link]").join(SITE).split("[course link]").join(SITE + "holiday.html");
    }

    async function copyText(text, note) {
        let ok = false;
        try {
            await navigator.clipboard.writeText(text);
            ok = true;
        } catch (e) {
            const t = document.createElement("textarea");
            t.value = text;
            t.style.position = "fixed";
            t.style.opacity = "0";
            document.body.appendChild(t);
            t.select();
            try { ok = document.execCommand("copy"); } catch (err) { ok = false; }
            document.body.removeChild(t);
        }
        note.textContent = ok ? "Copied." : "Could not copy. Select the text by hand.";
        setTimeout(() => { note.textContent = ""; }, 2500);
    }

    function wrapLines(ctx, text, maxWidth) {
        const words = text.split(/\s+/);
        const lines = [];
        let line = "";
        words.forEach(w => {
            const test = line ? line + " " + w : w;
            if (ctx.measureText(test).width > maxWidth && line) {
                lines.push(line);
                line = w;
            } else {
                line = test;
            }
        });
        if (line) lines.push(line);
        return lines;
    }

    function download(item) {

        const c = document.createElement("canvas");
        c.width = 1080;
        c.height = 1350;
        const ctx = c.getContext("2d");

        const bg = ctx.createLinearGradient(0, 0, 1080, 1350);
        bg.addColorStop(0, "#0b1a33");
        bg.addColorStop(1, "#123a5c");
        ctx.fillStyle = bg;
        ctx.fillRect(0, 0, 1080, 1350);

        ctx.fillStyle = "#0d9488";
        ctx.fillRect(0, 0, 1080, 14);

        ctx.fillStyle = "#7dd3fc";
        ctx.font = "700 34px system-ui, sans-serif";
        ctx.fillText("LEARN SMART HUB", 80, 130);

        ctx.fillStyle = "rgba(148, 197, 255, 0.85)";
        ctx.font = "600 28px system-ui, sans-serif";
        ctx.fillText("Day " + item.day + " · " + item.platform, 80, 182);

        ctx.fillStyle = "#ffffff";
        ctx.font = "800 74px system-ui, sans-serif";
        wrapLines(ctx, item.title, 920).slice(0, 3).forEach((line, i) => {
            ctx.fillText(line, 80, 330 + i * 88);
        });

        const titleLines = Math.min(wrapLines(ctx, item.title, 920).length, 3);
        ctx.fillStyle = "#0d9488";
        ctx.fillRect(80, 330 + titleLines * 88, 120, 6);

        ctx.fillStyle = "rgba(226, 240, 255, 0.92)";
        ctx.font = "400 42px system-ui, sans-serif";
        wrapLines(ctx, item.caption, 920).slice(0, 9).forEach((line, i) => {
            ctx.fillText(line, 80, 470 + titleLines * 40 + i * 62);
        });

        ctx.fillStyle = "#7dd3fc";
        ctx.font = "700 32px system-ui, sans-serif";
        ctx.fillText(item.tags, 80, 1240);

        ctx.fillStyle = "rgba(148, 197, 255, 0.9)";
        ctx.font = "600 30px system-ui, sans-serif";
        ctx.fillText("learnsmarthub · WhatsApp 0703 511 022", 80, 1290);

        c.toBlob(blob => {
            const url = URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.download = "lsh-post-day-" + item.day + ".png";
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            setTimeout(() => URL.revokeObjectURL(url), 4000);
        }, "image/png");
    }

    function card(item) {

        const post = document.createElement("article");
        post.className = "post" + (seen.has(item.day) ? " done" : "");

        const top = document.createElement("div");
        top.className = "post-top";
        top.innerHTML = "<span>Day " + item.day + "</span><span>·</span><span>" + item.time + "</span><span>·</span><span class='plat'>" + item.platform + "</span>";

        const title = document.createElement("h2");
        title.textContent = item.title;

        const cap = document.createElement("p");
        cap.className = "cap";
        cap.textContent = item.caption;

        const tags = document.createElement("p");
        tags.className = "tags";
        tags.textContent = item.tags;

        const row = document.createElement("div");
        row.className = "row";

        const copyBtn = document.createElement("button");
        copyBtn.type = "button";
        copyBtn.className = "btn main";
        copyBtn.textContent = "Copy caption";

        const imgBtn = document.createElement("button");
        imgBtn.type = "button";
        imgBtn.className = "btn";
        imgBtn.textContent = "Download image";

        const doneBtn = document.createElement("button");
        doneBtn.type = "button";
        doneBtn.className = "btn small";
        doneBtn.textContent = seen.has(item.day) ? "Posted ✓" : "Mark posted";

        const note = document.createElement("p");
        note.className = "note";
        note.setAttribute("role", "status");
        note.setAttribute("aria-live", "polite");

        copyBtn.addEventListener("click", () => copyText(withLink(item.caption) + "\n\n" + item.tags, note));
        imgBtn.addEventListener("click", () => { download(item); note.textContent = "Image saved to your downloads."; setTimeout(() => { note.textContent = ""; }, 2500); });
        doneBtn.addEventListener("click", () => {
            remember(item.day);
            post.classList.add("done");
            doneBtn.textContent = "Posted ✓";
        });

        row.append(copyBtn, imgBtn, doneBtn);
        post.append(top, title, cap, tags, row, note);
        return post;
    }

    function render() {
        const items = plan.filter(p => week === "all" || String(p.week) === week);
        list.innerHTML = "";
        items.forEach(item => list.appendChild(card(item)));
        const done = [...seen].length;
        count.textContent = items.length + " posts shown · " + done + " of 30 marked posted";
    }

    filters.addEventListener("click", event => {
        const b = event.target.closest("button");
        if (!b) return;
        week = b.dataset.week;
        [...filters.querySelectorAll("button")].forEach(x => x.setAttribute("aria-pressed", String(x === b)));
        render();
    });

    render();
})();
