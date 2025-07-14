document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("taxiForm");
  const confirmation = document.getElementById("confirmation");
  const pages = document.querySelectorAll(".page-section");

  form?.addEventListener("submit", function (e) {
    e.preventDefault();

    const from = document.getElementById("from").value.trim();
    const to = document.getElementById("to").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const tariff = document.getElementById("tariff").value;

    if (from && to && phone && tariff) {
      let tariffText = "";
      switch (tariff) {
        case "econom":
          tariffText = "Економ";
          break;
        case "comfort":
          tariffText = "Комфорт";
          break;
        case "business":
          tariffText = "Бізнес";
          break;
        default:
          tariffText = "Невідомий тариф";
      }

      confirmation.classList.remove("hidden");
      confirmation.innerHTML = `
        <h3>Замовлення прийнято!</h3>
        <p>Машина скоро прибуде з <strong>${from}</strong> до <strong>${to}</strong>.</p>
        <p>Ми зателефонуємо вам на номер <strong>${phone}</strong>.</p>
        <p>Обраний тариф: <strong>${tariffText}</strong></p>
      `;
      form.reset();
    } else {
      confirmation.classList.remove("hidden");
      confirmation.innerHTML = `<p style="color:red;">Будь ласка, заповніть всі поля!</p>`;
    }
  });

  const navLinks = document.querySelectorAll("nav a");

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

  const pageButtons = document.querySelectorAll("[data-page]:not(nav a)");

  pageButtons.forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const page = btn.getAttribute("data-page");

      pages.forEach(section => {
        section.classList.add("hidden");
      });

      const activePage = document.getElementById(page);
      activePage?.classList.remove("hidden");
    });
  });
});
