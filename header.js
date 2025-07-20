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
  let menuOpen = false; // Флаг для отслеживания состояния меню

  // Функция для открытия/закрытия меню
  function toggleMenu() {
    if (!menuOpen) {
      openMenu();
    } else {
      closeMenu();
    }
  }

  // Функция для открытия меню
  function openMenu() {
    modal.style.display = "block";
    document.body.style.overflow = "hidden"; // Блокируем прокрутку страницы
    checkbox.checked = true; // Устанавливаем чекбокс в checked
    menuOpen = true;
    
    // Добавляем класс visible для анимации
    setTimeout(() => {
      modal.classList.add("visible");
    }, 10);
  }

  // Функция для закрытия меню
  function closeMenu() {
    modal.classList.remove("visible");
    checkbox.checked = false; // Снимаем чекбокс
    menuOpen = false;
    
    // Ждем окончания анимации перед скрытием меню
    setTimeout(() => {
      modal.style.display = "none";
      document.body.style.overflow = ""; // Возвращаем прокрутку
    }, 400);
  }

  // Обработчик клика на кнопку меню
  menuToggle.addEventListener("click", (e) => {
    e.preventDefault(); // Предотвращаем стандартное поведение
    toggleMenu();
  });

  // Закрываем меню при клике на ссылку
  links.forEach(link => {
    link.addEventListener("click", (e) => {
      // Получаем ID секции из href
      const targetId = link.getAttribute("href");
      
      // Если это якорная ссылка (начинается с #)
      if (targetId.startsWith("#")) {
        e.preventDefault(); // Предотвращаем стандартное поведение ссылки
        
        // Закрываем меню
        closeMenu();
        
        // Находим целевой элемент
        const targetElement = document.querySelector(targetId);
        
        // Если элемент найден, прокручиваем к нему
        if (targetElement) {
          // Добавляем небольшую задержку для плавности
          setTimeout(() => {
            // Прокручиваем к элементу с учетом высоты шапки
            const headerHeight = document.querySelector(".header").offsetHeight;
            const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
            
            window.scrollTo({
              top: targetPosition,
              behavior: "smooth"
            });
          }, 450);
        }
      } else {
        // Для обычных ссылок (например, kaz.html) просто закрываем меню
        closeMenu();
      }
    });
  });

  // Закрываем меню при клике вне меню
  document.addEventListener("click", (e) => {
    if (menuOpen && !modal.contains(e.target) && !menuToggle.contains(e.target)) {
      closeMenu();
    }
  });

  // Закрываем меню при нажатии клавиши Escape
  document.addEventListener("keydown", (e) => {
    if (menuOpen && e.key === "Escape") {
      closeMenu();
    }
  });
});