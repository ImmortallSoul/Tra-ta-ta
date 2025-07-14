// Перемикання вкладок
const navLinks = document.querySelectorAll("nav a");
const sections = document.querySelectorAll(".page-section");

navLinks.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const page = link.getAttribute("data-page");

    // Прибираємо active з усіх секцій
    sections.forEach(section => {
      section.classList.remove("active");
    });

    // Додаємо active до потрібної секції
    const targetSection = document.querySelector(`section[data-page="${page}"]`);
    if (targetSection) {
      targetSection.classList.add("active");
    }
  });
});

// Обробка форми замовлення таксі
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

function getTariffLabel(value) {
  switch (value) {
    case "econom": return "Економ";
    case "comfort": return "Комфорт";
    case "business": return "Бізнес";
    default: return value;
  }
}
