// Task1
let number = parseInt(prompt("Введите число"));
if (number % 2 === 0) {
   alert("Число четное");
} 
else {
    alert("Число нечетное");
}

//Task2
let number1 = parseFloat(prompt("Введите первое число"));
let number2 = parseFloat(prompt("Введите второе число"));
let min = number1 < number2 ? number1 : number2;
alert("Меньшее число: " + min);

//Task3
let number = parseFloat(prompt("Введите число"));
if (number > 0) {
    alert("Число положительное");
} 
else if (number < 0) {
    alert("Число отрицательное");
} 
else {
    alert("Число равно нулю");
}

//Task4
let number1 = parseFloat(prompt("Введите первое число"));
let number2 = parseFloat(prompt("Введите второе число"));
let number3 = parseFloat(prompt("Введите третье число"));
let max = Math.max(number1, number2, number3);
alert("Наибольшее число: " + max);

//Task5
let number1 = parseFloat(prompt("Введите первое число"));
let number2 = parseFloat(prompt("Введите второе число"));
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

//Task6
let number = parseInt(prompt("Введите число"));
if (number >= 1 && number <= 30) {
    alert("Число принадлежит диапазону от 1 до 30");
} 
else {
    alert("Число не принадлежит диапазону");
}

//Task7
let x = parseFloat(prompt("Введите число X"));
let y = parseFloat(prompt("Введите число Y"));
if (x % y === 0) {
    alert("Число X кратно числу Y");
} 
else {
    alert("Число X не кратно числу Y");
}

//Task8
let number = parseInt(prompt("Введите число"));
if (number % 3 === 0  number % 5 === 0  number % 7 === 0) {
    alert("Число кратно 3, 5 или 7");
} 
else {
    alert("Число не кратно ни 3, ни 5, ни 7");
}

//Task9
let number = parseFloat(prompt("Введите число"));
alert("Модуль числа: " + Math.abs(number));

//Task11
let height = parseFloat(prompt("Введите ваш рост"));
let weight = parseFloat(prompt("Введите ваш вес"));
let ideal = height - 110;
if (weight > ideal) {
    alert("Вам нужно сбросить " + (weight - ideal) + " кг");
} 
else if (weight < ideal) {
    alert("Вам нужно набрать " + (ideal - weight) + " кг");
} 
else {
    alert("Ваш вес идеален");
}