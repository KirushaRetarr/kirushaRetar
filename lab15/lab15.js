// Функция которая проверяет введенные данные
function submitForm() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var secretWord = document.getElementById("secretWord").value;

    if (username === "apo2005" && password === "vz3t8pmn" && secretWord === "Klara") {
        document.cookie = "username=" + username + "; expires=" + getCookieExpirationDate(2);
        document.querySelector(".secret-data").classList.remove("hidden");
        document.getElementById("secretContent").textContent = getCookie("username");
    } else {
        alert("Введите верные данные");
    }
}

// Функция которая удаляет имя
function deleteCookie() {
    document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.querySelector(".secret-data").classList.add("hidden");
}

//Функция вывода из куки
function getCookie(name) {
    var value = "; " + document.cookie;
    var parts = value.split("; " + name + "=");
    if (parts.length === 2) return parts.pop().split(";").shift();
}

// Функция которая дает таймаут куки
function getCookieExpirationDate(days) {
    var date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    return date.toUTCString();
}