// Проверяем текущую страницу и устанавливаем флаг в localStorage
function checkCurrentPageAndRedirect() {
    let currentPage = getCurrentPage(); // Получаем текущую страницу
    if (currentPage === 'twelvethPage.html') {
      // Устанавливаем флаг в localStorage, что пользователь посетил twelvethPage.html
      localStorage.setItem('visitedTwelvethPage', 'true');
    }
  
    // Проверяем, если флаг visitedTwelvethPage установлен в true
    if (localStorage.getItem('visitedTwelvethPage') === 'true') {
      // Перенаправляем пользователя на lastPage.html через 8 секунд
      setTimeout(function() {
        window.location.href = './lastPage.html'; // Замените на URL вашей целевой страницы
      }, 8000); // 8000 миллисекунд = 8 секунд
    }
  }
  
  // Функция для получения текущей страницы
  function getCurrentPage() {
    return window.location.pathname.substring(window.location.pathname.lastIndexOf('/') + 1);
  }
  
  // Обработчик события загрузки страницы
  window.onload = function() {
    checkCurrentPageAndRedirect();
  };