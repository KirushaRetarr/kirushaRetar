function validateForm() {
    var form = document.getElementById("feedbackForm");
    var name = form.elements["name"].value.trim();
    var email = form.elements["email"].value.trim();
    var message = form.elements["message"].value.trim();
    var subject = form.elements["subject"].value;
    
    var errorMessages = [];
    
    if (name === "") {
        errorMessages.push("Введите ваше имя.");
    }
    
    if (email === "") {
        errorMessages.push("Введите ваш email.");
    } else if (!validateEmail(email)) {
        errorMessages.push("Введите корректный email.");
    }
    
    if (message === "") {
        errorMessages.push("Введите ваше сообщение.");
    }
    
    if (subject === "") {
        errorMessages.push("Выберите тему обращения.");
    }
    
    if (errorMessages.length > 0) {
        displayErrors(errorMessages);
        return false;
    }
    
    return true;
}

function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

function displayErrors(errors) {
    var errorContainer = document.getElementById("errorMessages");
    errorContainer.innerHTML = "";
    
    var ul = document.createElement("ul");
    errors.forEach(function(error) {
        var li = document.createElement("li");
        li.textContent = error;
        ul.appendChild(li);
    });
    
    errorContainer.appendChild(ul);
}

// Массив для хранения данных пользователя
var userDataArray = [];

function saveUserData() {
    var form = document.getElementById("feedbackForm");

    
    if (!validateForm()) {
        return; // Если форма не валидна, прерываем выполнение функции
    }

    var userData = {
        name: form.elements["name"].value.trim(),
        email: form.elements["email"].value.trim(),
        message: form.elements["message"].value.trim(),
        subject: form.elements["subject"].value,
        subscribe: form.elements["subscribe"].checked
    };

    var userDataArray = JSON.parse(localStorage.getItem("userDataArray")) || [];
    userDataArray.push(userData);
    localStorage.setItem("userDataArray", JSON.stringify(userDataArray));
    form.reset();
}

function displayUserData() {
    var userDataContainer = document.getElementById("userData");
    userDataContainer.innerHTML = "";

    var userDataArray = JSON.parse(localStorage.getItem("userDataArray"));

    var table = document.createElement("table");
    table.classList.add("userDataTable");

    var thead = document.createElement("thead");
    var tbody = document.createElement("tbody");

    var headers = ["Name", "Email", "Message", "Subject", "Subscribe"];
    var tr = document.createElement("tr");
    headers.forEach(function(headerText) {
        var th = document.createElement("th");
        th.textContent = headerText;
        tr.appendChild(th);
    });
    thead.appendChild(tr);

    userDataArray.forEach(function(userData) {
        tr = document.createElement("tr");
        headers.forEach(function(header) {
            var td = document.createElement("td");
            td.textContent = userData[header.toLowerCase()];
            tr.appendChild(td);
        });
        tbody.appendChild(tr);
    });

    table.appendChild(thead);
    table.appendChild(tbody);
    userDataContainer.appendChild(table);
}

function clearUserData() {
    localStorage.removeItem("userDataArray");
    displayUserData();
}

function updateCharCount() {
    var charCount = document.getElementById("charCount");
    var message = document.getElementById("message");
    charCount.textContent = "Осталось символов: " + (200 - message.value.length);
}

document.getElementById("message").addEventListener("input", updateCharCount);

//Очистка ошибок при вводе в форму
document.getElementById("name").addEventListener("input", clearErrors);
document.getElementById("email").addEventListener("input", clearErrors);
document.getElementById("message").addEventListener("input", clearErrors);
document.getElementById("subject").addEventListener("input", clearErrors);

function clearErrors() {
    displayErrors([]);
}