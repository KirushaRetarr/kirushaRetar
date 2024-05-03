document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var secretWord = document.getElementById("secretWord").value;

    // Проверка логина, пароля и секретного слова (можешь здесь добавить свою логику проверки)

    if (secretWord === "твоё_секретное_слово") {
      document.getElementById("secretData").style.display = "block";
      var userData = "Username: " + username + "<br>Password: " + password;
      document.getElementById("dataFromCookie").innerHTML = userData;

      // Сохранение данных в cookie с указанием пути '/'
      var expiryDate = new Date();
      expiryDate.setDate(expiryDate.getDate() + 2); // Сегодня + 2 дня
      var cookieValue = "userData=" + userData + ";expires=" + expiryDate.toUTCString() + ";path=/";
      document.cookie = cookieValue;

      // Показать кнопку после успешного входа
      document.getElementById("showDataButton").style.display = "block";
    } else {
      alert("Incorrect secret word!");
    }
  });

  // Функция для отображения секретных данных при запросе
  function showSecretData() {
    var cookies = document.cookie.split("; ");
    cookies.forEach(function(cookie) {
      var cookiePair = cookie.split("=");
      var cookieName = cookiePair[0];
      var cookieValue = cookiePair[1];
      if (cookieName === "userData") {
        document.getElementById("secretData").style.display = "block";
        document.getElementById("dataFromCookie").innerHTML = cookieValue;
      }
    });
  }

  // Вызов функции при клике на кнопку запроса
  document.getElementById("showDataButton").addEventListener("click", showSecretData);

  // Получение текущей даты и установка срока хранения cookie
  var expiryDate = new Date();
  expiryDate.setDate(expiryDate.getDate() + 2); // Сегодня + 2 дня
  document.cookie = "expiryDate=" + expiryDate.toUTCString() + ";path=/";

  // Проверка срока годности cookie
  function checkCookieExpiry() {
    var cookies = document.cookie.split("; ");
    cookies.forEach(function(cookie) {
      var cookiePair = cookie.split("=");
      var cookieName = cookiePair[0];
      var cookieValue = cookiePair[1];
      if (cookieName === "expiryDate") {
        var expiryDate = new Date(cookieValue);
        if (expiryDate < new Date()) {
          alert("Cookie has expired!");
        }
      }
    });
  }

  // Вызов функции проверки при загрузке страницы
  checkCookieExpiry();