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
