function changeBackground() {
    const url = document.getElementById("bg-url").value.trim();
    if (url) {
        document.body.style.backgroundImage = `url("${url}")`;
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundAttachment = "fixed";
        document.body.style.backgroundPosition = "center";
    } else {
        alert("https://www.google.com/url?sa=i&url=https%3A%2F%2Fmc.today%2Fuk%2Fuklon-zapustiv-u-kiyevi-novij-klas-taksi-yakim-mozhna-yizditi-smugoyu-dlya-gromadskogo-transportu%2F&psig=AOvVaw0OPVv9vzPjfdocgSUFXVAW&ust=1752603003237000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCLD92Y75vI4DFQAAAAAdAAAAABA5");
    }
}

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
