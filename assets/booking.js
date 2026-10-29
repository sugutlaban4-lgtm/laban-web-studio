/* Booking form: turns three answers into one WhatsApp message. */

(function () {

    const shopWa = "254703511022";
    const form = document.getElementById("bookForm");
    const note = document.getElementById("bookNote");

    if (!form) return;

    form.addEventListener("submit", event => {

        event.preventDefault();

        const service = document.getElementById("bService").value;
        const when = document.getElementById("bWhen").value.trim();
        const name = document.getElementById("bName").value.trim();

        if (!when) {
            note.textContent = "Tell us when you want to come, even just 'Saturday morning'.";
            return;
        }

        const lines = [
            "Hi Glow, I want to book.",
            "",
            "Service: " + service,
            "When: " + when,
            "Name: " + (name || "not given"),
            "",
            "Please confirm the chair."
        ];

        window.open("https://wa.me/" + shopWa + "?text=" + encodeURIComponent(lines.join("\n")), "_blank", "noopener");
        note.textContent = "Opening WhatsApp with your booking. Press send there and we confirm the chair.";
    });

})();
