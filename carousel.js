document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".carousel-item");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  let currentIndex = 0;
  let isAnimating = false;

  // Проверяем, что кнопки существуют
  if (!prevBtn || !nextBtn) {
    console.error("Кнопки навигации карусели не найдены");
    return;
  }

  // Инициализация первого слайда
  items[currentIndex].classList.add("active");

  function showSlide(index) {
    if (isAnimating) return;
    isAnimating = true;
    
    // Скрываем текущий слайд
    items[currentIndex].classList.remove("active");
    
    // Показываем новый слайд
    currentIndex = index;
    items[currentIndex].classList.add("active");
    
    // После завершения анимации
    setTimeout(() => {
      isAnimating = false;
    }, 800); // Время должно соответствовать длительности CSS-перехода
  }

  function showNextSlide() {
    const nextIndex = (currentIndex + 1) % items.length;
    showSlide(nextIndex);
  }

  function showPrevSlide() {
    const prevIndex = (currentIndex - 1 + items.length) % items.length;
    showSlide(prevIndex);
  }

  // Кнопки управления
  nextBtn.addEventListener("click", (e) => {
    e.preventDefault();
    showNextSlide();
  });

  prevBtn.addEventListener("click", (e) => {
    e.preventDefault();
    showPrevSlide();
  });

  // Управление с клавиатуры
  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") {
      showPrevSlide();
    } else if (e.key === "ArrowRight") {
      showNextSlide();
    }
  });

  // Свайп на мобильных устройствах
  const carousel = document.querySelector(".carousel");
  let touchStartX = 0;
  let touchEndX = 0;

  carousel.addEventListener("touchstart", (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  carousel.addEventListener("touchend", (e) => {
    touchEndX = e.changedTouches[0].screenX;
    
    // Определяем направление свайпа
    const diff = touchEndX - touchStartX;
    
    // Минимальное расстояние для свайпа
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        showPrevSlide(); // Свайп вправо
      } else {
        showNextSlide(); // Свайп влево
      }
    }
  }, { passive: true });

  // Автоматическое переключение слайдов
  let autoplayInterval = setInterval(() => {
    if (!isAnimating) {
      showNextSlide();
    }
  }, 7000);

  // Останавливаем автопереключение при взаимодействии
  function resetAutoplay() {
    clearInterval(autoplayInterval);
    autoplayInterval = setInterval(() => {
      if (!isAnimating) {
        showNextSlide();
      }
    }, 7000);
  }

  // Сбрасываем таймер при взаимодействии
  nextBtn.addEventListener("click", resetAutoplay);
  prevBtn.addEventListener("click", resetAutoplay);
  carousel.addEventListener("touchstart", resetAutoplay, { passive: true });
});