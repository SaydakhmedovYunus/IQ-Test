let openPopupBtn = document.querySelector('.openPopUp');
openPopupBtn.addEventListener('click', openPopUp);

function openPopUp() {
    console.log('Проверка(1): Я работаю');

    let popUpWindow = document.querySelector('.popUp');
    popUpWindow.style.display = 'flex';

    let header = document.querySelector('header')
    header.style.display = 'none';
}

let closePopupBtn = document.querySelector('.closeMenu');
closePopupBtn.addEventListener('click', closePopUp);

function closePopUp() {
    console.log('Проверка(2): Я работаю');

    let popUpWindow = document.querySelector('.popUp');
    popUpWindow.style.display = 'none';

    let header = document.querySelector('header')
    header.style.display = 'flex';
}


  let timeLeft = 600000;
  let startTime = localStorage.getItem('startTime');
  
  // Проверяем, есть ли сохраненное время старта в localStorage
  if (!startTime) {
      startTime = Date.now();
      localStorage.setItem('startTime', startTime);
  } else {
      startTime = parseInt(startTime);
  }
  
  function updateTimer() {
      let now = Date.now();
      let elapsedTime = now - startTime;
      let remainingTime = timeLeft - elapsedTime;
  
      if (remainingTime <= 0) {
          clearInterval(timerInterval);
          document.getElementById('timer').innerHTML = "Время вышло!";
          localStorage.removeItem('startTime'); // Очищаем сохраненное время старта
          return;
      }
  
      let minutes = Math.floor(remainingTime / 60000);
      let seconds = Math.floor((remainingTime % 60000) / 1000);
  
      if (seconds < 10) {
          seconds = "0" + seconds;
      }
  
      document.getElementById('timer').innerHTML = `${minutes}:${seconds}`;
  }
  
  let timerInterval = setInterval(updateTimer, 1000);
  