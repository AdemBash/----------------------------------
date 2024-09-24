//Task5
let number1 = parseFloat(prompt("Введите первое число:"));
let number2 = parseFloat(prompt("Введите второе число:"));
let operation = prompt("Выберите операцию: \n 1. Сложение \n 2. Вычитание \n 3. Умножение \n 4. Деление");
switch(operation) {
    case "1":
        alert("Результат: " + (number1 + number2));
        break;
    case "2":
        alert("Результат: " + (number1 - number2));
        break;
    case "3":
        alert("Результат: " + (number1 * number2));
        break;
    case "4":
        if (b !== 0) {
            alert("Результат: " + (number1 / number2));
        } else {
            alert("Деление на ноль невозможно");
        }
        break;
}
