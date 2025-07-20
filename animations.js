document.addEventListener("DOMContentLoaded", function() {
  // Функция для проверки, находится ли элемент в области видимости
  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.85 &&
      rect.bottom >= 0
    );
  }

  // Функция для анимации элементов при прокрутке
  function handleScrollAnimations() {
    // Анимация для fade-in элементов
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(element => {
      if (isElementInViewport(element)) {
        element.classList.add('visible');
      }
    });

    // Анимация для scale-in элементов
    const scaleElements = document.querySelectorAll('.scale-in');
    scaleElements.forEach(element => {
      if (isElementInViewport(element)) {
        element.classList.add('visible');
      }
    });

    // Анимация для slide-in-left элементов
    const slideLeftElements = document.querySelectorAll('.slide-in-left');
    slideLeftElements.forEach(element => {
      if (isElementInViewport(element)) {
        element.classList.add('visible');
      }
    });

    // Анимация для slide-in-right элементов
    const slideRightElements = document.querySelectorAll('.slide-in-right');
    slideRightElements.forEach(element => {
      if (isElementInViewport(element)) {
        element.classList.add('visible');
      }
    });
  }

  // Добавляем классы анимации к элементам
  function initAnimations() {
    // Заголовки секций
    document.querySelectorAll('.section-title').forEach((el, index) => {
      el.classList.add('fade-in');
      // Небольшая задержка для последовательного появления
      el.style.transitionDelay = `${index * 0.1}s`;
    });

    // Карточки товаров
    document.querySelectorAll('.goods-card').forEach((el, index) => {
      el.classList.add('scale-in');
      // Небольшая задержка для последовательного появления
      el.style.transitionDelay = `${index * 0.1}s`;
    });

    // Элементы "О нас"
    const aboutLeft = document.querySelector('.about-heading-left');
    const aboutRight = document.querySelector('.about-heading-right');
    
    if (aboutLeft) {
      aboutLeft.classList.add('slide-in-left');
    }
    
    if (aboutRight) {
      aboutRight.classList.add('slide-in-right');
    }

    // Элементы списка преимуществ
    document.querySelectorAll('.about-heading-left-list-item').forEach((el, index) => {
      el.classList.add('fade-in');
      // Небольшая задержка для последовательного появления
      el.style.transitionDelay = `${0.3 + index * 0.1}s`;
    });

    // Футер и его элементы
    const footer = document.querySelector('.footer');
    if (footer) {
      footer.classList.add('fade-in');
      
      // Анимация для элементов внутри футера
      const footerLogo = document.querySelector('.footer-logo');
      const footerCopyright = document.querySelector('.footer-copyright');
      const footerContacts = document.querySelectorAll('.footer-contacts p');
      
      if (footerLogo) {
        footerLogo.classList.add('slide-in-left');
        footerLogo.style.transitionDelay = '0.1s';
      }
      
      if (footerCopyright) {
        footerCopyright.classList.add('slide-in-left');
        footerCopyright.style.transitionDelay = '0.2s';
      }
      
      footerContacts.forEach((contact, index) => {
        contact.classList.add('slide-in-right');
        contact.style.transitionDelay = `${0.1 + index * 0.1}s`;
      });
    }
  }

  // Инициализируем анимации
  initAnimations();

  // Запускаем проверку при загрузке страницы
  handleScrollAnimations();

  // Запускаем проверку при прокрутке страницы
  window.addEventListener('scroll', handleScrollAnimations);
}); 