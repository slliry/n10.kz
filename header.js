document.addEventListener("scroll", () => {
  const header = document.querySelector(".header");
  if (window.scrollY > 350) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menuToggle");
  const modal = document.getElementById("modal");
  const checkbox = document.getElementById("checkbox");
  const links = document.querySelectorAll(".mobile-menu-link");

  menuToggle.addEventListener("click", () => {
    if (modal.style.display === "none" || modal.style.display === "") {
      modal.style.display = "block";
      document.body.style.overflow = "hidden"; // Блокируем прокрутку страницы
    } else {
      modal.style.display = "none";
      document.body.style.overflow = ""; // Возвращаем прокрутку
    }
  });

  // Закрываем меню при клике на ссылку
  links.forEach(link => {
    link.addEventListener("click", () => {
      modal.style.display = "none";
      checkbox.checked = false;
      document.body.style.overflow = ""; // Возвращаем прокрутку
    });
  });
});