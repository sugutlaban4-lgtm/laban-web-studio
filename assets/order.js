/* Catalogue ordering: ticks become a priced WhatsApp message.
   Same pattern used on the real client sites, so the demo behaves honestly. */

(function () {

    const shopWa = "254703511022";
    const boxes = Array.from(document.querySelectorAll("#catalog input[type=checkbox]"));
    const count = document.getElementById("orderCount");
    const sum = document.getElementById("orderSum");
    const note = document.getElementById("orderNote");
    const button = document.getElementById("orderBtn");

    if (!boxes.length) return;

    function money(n) {
        return "KSh " + n.toLocaleString("en-KE");
    }

    function picked() {
        return boxes.filter(b => b.checked).map(b => ({
            name: b.dataset.name,
            price: Number(b.dataset.price) || 0
        }));
    }

    function refresh() {
        const items = picked();
        const total = items.reduce((t, i) => t + i.price, 0);
        count.textContent = items.length === 0
            ? "Nothing picked yet"
            : items.length + (items.length === 1 ? " item picked" : " items picked");
        sum.textContent = money(total);
    }

    boxes.forEach(b => b.addEventListener("change", refresh));
    refresh();

    button.addEventListener("click", () => {

        const items = picked();

        if (!items.length) {
            note.textContent = "Tick at least one item first, then the list goes through.";
            return;
        }

        const total = items.reduce((t, i) => t + i.price, 0);

        const lines = [
            "Hi Mwangaza Hardware, I want to reserve this:",
            ""
        ].concat(items.map(i => "- " + i.name + " (" + money(i.price) + ")")).concat([
            "",
            "Total: " + money(total),
            "",
            "Name: ",
            "Delivery or pick up: "
        ]);

        window.open("https://wa.me/" + shopWa + "?text=" + encodeURIComponent(lines.join("\n")), "_blank", "noopener");
        note.textContent = "Opening WhatsApp with your list. Press send there and the shop replies with the total.";
    });

})();
