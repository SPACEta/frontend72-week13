//Находим необходимые элементы DOM и записываем в переменные
const birthday = document.getElementById('birthday');
const btnBirthday = document.getElementById('btnBirthday');
const result = document.getElementById('result');

//1. Напишите функцию с именем `calculateBMI`, которая принимает два числовых параметра: вес в килограммах и рост в метрах.
function calculateBMI() {
    //Получаем значение, введенное в поле ввода
    const birthdayValue = birthday.value;

    //2. Внутри функции выполните следующие шаги:
    // -возведите рост в квадрат, используя метод `Math.pow(a, b)`.
    const pow = Math.pow(height, 2);

    // -разделите вес на квадрат роста, чтобы получить ИМТ
    const imt = weight / pow * 10000;

    // -округлите результат ИМТ до двух десятичных знаков с помощью метода `Math.round()`
    const imtRound = Math.round(imt * 100.0) / 100.0;

    //3. Верните значение ИМТ
    result.innerText = "Индекс массы тела (ИМТ): " + imtRound;
};

//4. Вызовите функцию `calculateBMI` с различными значениями веса и роста и выведите результат
btn.addEventListener('click', calculateBMI);


