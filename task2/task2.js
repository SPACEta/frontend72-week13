//Находим необходимые элементы DOM и записываем в переменные
const imputBirthday = document.getElementById('imputBirthday');
const btnBirthday = document.getElementById('btnBirthday');
const result = document.getElementById('result');
const errorResult = document.getElementById('errorResult');
let currentDate = new Date();

function daysBeforBirthday() {
    let birthday = new Date(Date.parse(imputBirthday.value));

    if(birthday.value == '') {
        errorResult.textContent = 'Введите дату своего рождения';
    } else {
        const timeDiff = birthday - currentDate;
        const datePassed = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

        if(datePassed === 1 || datePassed === 21 || datePassed === 31) {
            result.textContent = "До Вашего дня рождения осталось " + datePassed + "день.";
        } else if (datePassed === 2 || datePassed === 3 || datePassed === 4 || datePassed === 22 || datePassed === 23 || datePassed === 24) {
            result.textContent = "До Вашего дня рождения осталось " + datePassed + "дня.";
        } else if (datePassed >=5 && datePassed >=20) {
            result.textContent = "До Вашего дня рождения осталось " + datePassed + "дней.";
        } else {
            result.textContent = "До Вашего дня рождения осталось " + datePassed + "дней.";
        }
    }
}

btnBirthday.addEventListener('click', daysBeforBirthday);


