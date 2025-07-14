document.addEventListener("DOMContentLoaded", () => {
    const bgInput = document.getElementById("bg-url");

    bgInput.addEventListener("input", () => {
        const url = bgInput.value.trim();
        if (url.startsWith("http")) {
            document.body.style.backgroundImage = `url("${url}")`;
            document.body.style.backgroundSize = "cover";
            document.body.style.backgroundRepeat = "no-repeat";
            document.body.style.backgroundAttachment = "fixed";
            document.body.style.backgroundPosition = "center";
        }
    });
});

fetch("taxi-options.html")
    .then(res => res.text())
    .then(html => {
        document.getElementById("taxi-options-container").innerHTML = html;
    });

document.addEventListener("DOMContentLoaded", () => {
    const orderButton = document.querySelector("button");

    orderButton.addEventListener("click", () => {
        alert("Дякуємо! Ваше замовлення прийнято.");
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const taxiCards = document.querySelectorAll(".taxi-card");

    taxiCards.forEach(card => {
        card.addEventListener("click", () => {
            // Зняти попередній вибір
            taxiCards.forEach(c => c.classList.remove("selected"));
            // Виділити обране авто
            card.classList.add("selected");
            const selectedType = card.dataset.type;
            console.log("Обрано тип таксі:", selectedType);
        });
    });
});
