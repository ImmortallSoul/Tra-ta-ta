document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("taxiForm");
  const confirmation = document.getElementById("confirmation");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const from = document.getElementById("from").value.trim();
    const to = document.getElementById("to").value.trim();
    const phone = document.getElementById("phone").value.trim();

    if (from && to && phone) {
      confirmation.classList.remove("hidden");
      confirmation.innerHTML = `
        <h3>Замовлення прийнято!</h3>
        <p>Машина скоро прибуде з <strong>${from}</strong> до <strong>${to}</strong>.</p>
        <p>Ми зателефонуємо вам на номер <strong>${phone}</strong>.</p>
      `;
      form.reset();
    } else {
      confirmation.classList.remove("hidden");
      confirmation.innerHTML = `<p style="color:red;">Будь ласка, заповніть всі поля!</p>`;
    }
  });
});
