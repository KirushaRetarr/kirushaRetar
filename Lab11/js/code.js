function clearError(inputId) {
    document.getElementById('inputError' + inputId).innerText = "";
}

function setupInputListeners() {
    var inputs = document.querySelectorAll('input[type="number"]');
    inputs.forEach(function(input) {
        input.addEventListener('input', function() {
            clearError(input.id.charAt(input.id.length - 1));
        });
    });
}

function calculateValues() {
    var n = document.getElementById('inputN').value;
    var a = document.getElementById('inputA').value;
    var b = document.getElementById('inputB').value;

    var errorNElement = document.getElementById('inputErrorN');
    var errorAElement = document.getElementById('inputErrorA');
    var errorBElement = document.getElementById('inputErrorB');
    var resultsElement = document.getElementById('results');

    resultsElement.innerHTML = "";

    if (isNaN(n) || n <= 0 || !/^[0-9]+$/.test(n)) {
        errorNElement.innerText = "Пожалуйста, введите целое натуральное число.";
        return;
    } else {
        errorNElement.innerText = "";
    }

    if (isNaN(a)) {
        errorAElement.innerText = "Пожалуйста, введите число.";
        return;
    } else {
        errorAElement.innerText = "";
    }

    if (isNaN(b)) {
        errorBElement.innerText = "Пожалуйста, введите число.";
        return;
    } else {
        errorBElement.innerText = "";
    }

    if (a === b) {
        errorBElement.innerText = "Числа a и b должны быть различными.";
        return;
    } else {
        errorBElement.innerText = "";
    }

    var h = (b - a) / n;
    var values = "";

    for (var i = 0; i <= n; i++) {
        var ri = a + i * h;
        values += "r" + i + " = " + ri + "<br>";
    }

    resultsElement.innerHTML = values;
}

setupInputListeners();
