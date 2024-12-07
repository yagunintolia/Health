const modal = document.getElementById("modal");
const openModal = document.getElementById("openModal");
const openModal2 = document.getElementById("openModal2");
const closeModal = document.getElementById("closeModal");

// Відкрити модальне вікно
openModal.addEventListener("click", () => (modal.style.display = "flex"));
openModal2.addEventListener("click", () => (modal.style.display = "flex"));

// Закрити модальне вікно
closeModal.addEventListener("click", () => (modal.style.display = "none"));
window.addEventListener("click", (e) => {
    if (e.target === modal) modal.style.display = "none";
});

// Обробка форми
document.getElementById("appointmentForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const doctor = document.getElementById("doctor").value;
    const date = document.getElementById("date").value;

    alert(`Запис підтверджено!\nІм'я: ${name}\nЛікар: ${doctor}\nДата: ${date}`);
    modal.style.display = "none";
    e.target.reset();
});
