document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".carousel-item");
  let currentIndex = 0;

  function updateActiveItem(newIndex) {
    const currentItem = items[currentIndex];
    const nextItem = items[newIndex];

    // Удалить класс active и reset анимацию
    currentItem.classList.remove("active", "animate");
    nextItem.classList.remove("animate");

    setTimeout(() => {
      nextItem.classList.add("animate");
    }, 10);

    nextItem.classList.add("active");
    currentIndex = newIndex;
  }

  function showNextItem() {
    const nextIndex = (currentIndex + 1) % items.length;
    updateActiveItem(nextIndex);
  }

  function showPrevItem() {
    const prevIndex = (currentIndex - 1 + items.length) % items.length;
    updateActiveItem(prevIndex);
  }

  // Кнопки управления
  document.getElementById("nextBtn").addEventListener("click", showNextItem);
  document.getElementById("prevBtn").addEventListener("click", showPrevItem);

  // Добавить анимацию для начального элемента
  const initialItem = items[currentIndex];
  initialItem.classList.add("animate");
});