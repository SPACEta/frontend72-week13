//Задание 1
// Создайте переменную currentDate и присвойте ей текущую дату. Значение выведите в консоль.
let currentDate = new Date();
console.log(currentDate);

//Задание 2
// Создайте переменную currentYear и присвойте ей текущий год. Значение выведите в консоль.
let currentYear = currentDate.getFullYear();
console.log(currentYear);

//Задание 3
// Создайте переменную currentMonth и присвойте ей текущий месяц (от 0 до 11, где 0 - январь, 11 - декабрь). Значение выведите в консоль.
let currentMonth = currentDate.getMonth();
console.log(currentMonth);

//Задание 4
// Создайте переменную currentDay и присвойте ей текущий день месяца. Значение выведите в консоль.
let currentDay = currentDate.getDate();
console.log(currentDay);

//Задание 5
// Создайте переменную birthday и присвойте ей дату вашего дня рождения в текущем году. Значение выведите в консоль.
let birthday = new Date(2023, 2, 25);
console.log(birthday);

//Задание 6
// Создайте переменную futureDate и присвойте ей будущую дату (например, через 1 месяц и 10 дней от текущей даты). Значение выведите в консоль.
let futureDate = new Date(2023, 11, 03);
console.log(futureDate);

//Задание 7
// Выведите в консоль разницу в днях между futureDate и currentDate
const timeDiff = futureDate - currentDate;
const datePassed = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
console.log(datePassed);

//Задание 8
// Создайте переменную pastDate и присвойте ей прошедшую дату (например, 5 дней назад от текущей даты). Значение выведите в консоль.
const pastDate = new Date(2023, 09, 22);
console.log(pastDate);

//Задание 9
// Выведите в консоль разницу в днях между currentDate и pastDate
const timeDiffCurrentPast = currentDate - pastDate;
const datePassedCurrentPast = Math.floor(timeDiffCurrentPast / (1000 * 60 * 60 * 24));
console.log(datePassedCurrentPast);

//Задание 10
// Создайте переменную nextWeek и присвойте ей дату следующей недели. Значение выведите в консоль.
const nextWeek = new Date(2023, 10, 10);
console.log(nextWeek);

//Задание 11
// Выведите в консоль день недели для nextWeek
let dayOfWeek = nextWeek.getDay();
let dayWord =
    (dayOfWeek === 0) ? 'Воскресенье' :
        (dayOfWeek === 1) ? 'Понедельник' :
            (dayOfWeek === 2) ? 'Вторник' :
                (dayOfWeek === 3) ? 'Среда' :
                    (dayOfWeek === 4) ? 'Четверг' :
                        (dayOfWeek === 5) ? 'Пятница' :
                            (dayOfWeek === 6) ? 'Суббота' : 'Неизвестный день недели';
console.log(dayWord);

//Задание 12
// Создайте переменную futureYear и присвойте ей значение текущего года плюс 5. Значение выведите в консоль.
let futureYear = currentDate.getFullYear() +5;
console.log(futureYear);

//Задание 13
// Создайте переменную futureDateInFutureYear и присвойте ей дату вашего дня рождения в будущем году (futureYear). Значение выведите в консоль.
let futureDateInFutureYear = new Date(2024, 2, 25);
console.log(futureDateInFutureYear);

//Задание 14
// Выведите в консоль разницу в годах между futureYear и текущим годом
let diffYears = futureYear - currentYear;
console.log(diffYears);

//Задание 15
// Используя метод Date.parse(), создайте новый объект date и преобразуйте переменную strDate в дату.
// Выведите объект date в консоль.
const strDate = '2023-06-15T08:30:00.000Z';
const dateParse = new Date(Date.parse(strDate));
console.log(dateParse);

//Задание 16
// Используя метод Date.parse(), получите таймстамп (количество миллисекунд) из переменной strDate.
// Выведите таймстамп в консоль.
const dateParseTime = Date.parse(strDate);
console.log(dateParseTime);

//Задание 17
// Используя метод Date.parse(), попытайтесь преобразовать переменную wrongDate в дату. Добавьте условие, если результат преобразования является NaN, выведите в консоль сообщение 'Неправильный формат даты', в другом случае, выведите сообщение 'Правильный формат даты'.
// Подсказка: используйте условие if...else
const date = '2023/06/15';
let wrongDate = Date.parse(date);
if(wrongDate = NaN){ 
	console.log("Неправильный формат даты");
} else {
	console.log("Правильный формат даты");
}

//Задание 18
// Используя цикл if...else, проверьте является ли переменная number положительным. Результат выведите в консоль.
const number = 231;
if(number > 0){ 
	console.log("Положительная переменная");
} else {
	console.log("Отрицательная переменная");
}

//Задание 19
// Используя цикл if...else, проверьте является ли переменная number чётным числом. Результат выведите в консоль.


//Задание 20
// Используя цикл if...else, проверьте является ли переменная number кратным 3. Результат выведите в консоль.


//Задание 21
// Используя цикл if...else, проверьте является ли переменная number однозначным. Результат выведите в консоль.


//Задание 22
// Используя цикл if...else, проверьте является ли переменная number двузначным. Результат выведите в консоль.


//Задание 23
// Используя цикл if...else, проверьте является ли переменная number положительным или нулём. Результат выведите в консоль.


//Задание 24
// Используя цикл if...else, проверьте является ли переменная number кратным 5 или 7. Результат выведите в консоль.


//Задание 25
// Используя цикл if...else, проверьте является ли переменная number отрицательным или нулём. Результат выведите в консоль.


//Задание 26
// Используя цикл if...else, проверьте является ли переменная number трёхзначным положительным числом. Результат выведите в консоль.


//Задание 27
// Используя switch case, напишите программу, которая принимает на вход целое число от 1 до 7 и выводит в консоль название соответствующего дня недели (например, 1 - "Понедельник", 2 - "Вторник" и т.д.).


//Задание 28
// Используя цикл switch case, напишите программу, которая принимает на вход символ направления (N, S, E, W) и выводит в консоль полное название этого направления (N - "Север", S - "Юг", E - "Восток", W - "Запад").
let direction = 'W';
let fullName;

switch (direction) {
}






const currentDate7 = new Date();
const currentYear7 = currentDate7.getFullYear();
const poemYear = 1820;
const yearsPassed = currentYear7 - poemYear;
console.log(`С момента написания стихотворения "У лукоморья дуб зеленый" прошло ${yearsPassed} года(лет).`);
//С момента написания стихотворения "У лукоморья дуб зеленый" прошло 203 года(лет).

const resultElement = document.getElementById('result'); 

resultElement.textContent = `С момента написания стихотворения "У лукоморья дуб зеленый" прошло ${yearsPassed} года(лет).`;