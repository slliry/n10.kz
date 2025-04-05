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

  menuToggle.addEventListener("click", () => {
    console.log(modal.style.display);
    if (modal.style.display === "none" || modal.style.display === "") {
      modal.style.display = "block";
    } else {
      modal.style.display = "none";
    }
  });
});