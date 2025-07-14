document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("taxiForm");
  const confirmation = document.getElementById("confirmation");


  form?.addEventListener("submit", function (e) {
  e.preventDefault();

  const from = document.getElementById("from").value;
  const to = document.getElementById("to").value;
  const phone = document.getElementById("phone").value;
  const tariff = document.getElementById("tariff").value;

  if (!from || !to || !phone || !tariff) {
    alert("Будь ласка, заповніть усі поля!");
    return;
  }

  confirmation.innerHTML = `
    <p>✅ Дякуємо за замовлення!</p>
    <p>Звідки: <strong>${from}</strong></p>
    <p>Куди: <strong>${to}</strong></p>
    <p>Телефон: <strong>${phone}</strong></p>
    <p>Тариф: <strong>${getTariffLabel(tariff)}</strong></p>
  `;
  confirmation.classList.remove("hidden");
  form.reset();
  });

  const navLinks = document.querySelectorAll("nav a");
  const pages = document.querySelectorAll(".page-section");

  navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const page = link.getAttribute("data-page");

      pages.forEach(section => {
        section.classList.add("hidden");
      });

      const activePage = document.getElementById(page);
      activePage?.classList.remove("hidden");
    });
  });
});

function getTariffLabel(value) {
  switch (value) {
    case "econom": return "Економ";
    case "comfort": return "Комфорт";
    case "business": return "Бізнес";
    default: return value;
  }
}
