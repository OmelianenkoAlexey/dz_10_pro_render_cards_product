// ! ДЗ № 10 Рендер карточки товара

// Дано:

// Три товара с категории vegetables:
// cabbage = 8;
// avocado = 30;
// tomato = 10;

// Три товара с категории fruits:
// grapes = 20;
// raspberry = 25;
// coconut = 50;

// Задача: в зависимости от выбранного пользователем периода(winter или summer), категории(vegetables или fruits), товара с выбранной категории(vegetables: cabbage, avocado, tomato или fruits: grapes, raspberry, coconut), и количества единиц выбранного товара – посчитать финальную стоимость покупки и вывести всю информацию о выбранном товаре в html.
// Порядок действий:

cabbage = 8;
avocado = 30;
tomato = 10;
vegetables = [cabbage, avocado, tomato];

grapes = 20;
raspberry = 25;
coconut = 50;
fruits = [grapes, raspberry, coconut];

//1 Запрашиваем у пользователя период, в которой он совершает покупку: winter или summer.
// Если пользователь вводит winter, то финальное значение стоимости покупки будет умножаться на 2
// Если пользователь вводит summer, то финальное значение стоимости покупки будет умножаться на 0.8
// Важно:
// Продолжаем запрашивать у пользователя название периода до тех пор, пока не будет введено слово ‘winter’ либо ‘summer’.
// Введенное пользователем значение может быть в любом регистре и с любым количеством пробелов до / внутри слова.
// !!!!!!!!!!!!!!!!!!!
period = prompt('Выберите и введите время года, в которое вы совершаете покупку "winter" или "summer".').replaceAll(" ", "").toLowerCase();
console.log(period);

while (period !== "winter" && period !== "summer") {
    alert('Не верно, введите "winter" или "summer".');
    period = prompt('Выберите и введите время года, в которое вы совершаете покупку "winter" или "summer".').replaceAll(" ", "").toLowerCase();
}

alert(`Верно. Вы ввели "${period}".`);
console.log(`Верно. Вы ввели "${period}".`);
// !!!!!!!!!!!!!!!!!!!!!
//2 Запрашиваем у пользователя категорию, с которой он будет далeе выбирать товар: vegetables или fruits.
//     Важно:
// Продолжаем запрашивать у пользователя название категории до тех пор, пока не будет введено слово ‘vegetables’ либо ‘fruits’.
// Введенное пользователем значение может быть в любом регистре и с любым количеством пробелов до / внутри слова.
// !!!!!!!!!!!!!!!!!!
category = prompt('Выберите и введите категорию с товаром, "vegetables" или "fruits".').replaceAll(" ", "").toLowerCase();
console.log(category);

while (category !== "vegetables" && category !== "fruits") {
    alert('Не верно, введите "vegetables" или "fruits".');
    category = prompt('Выберите и введите категорию с товаром, "vegetables" или "fruits".').replaceAll(" ", "").toLowerCase();
}
alert(`Верно. Вы ввели "${category}".`);
console.log(`Верно. Вы ввели "${category}".`);

// !!!!!!!!!!!!!!!!!!!!!!!!
//3 Запрашиваем у пользователя товар в зависимости от выбранной ранее категории.
// Для категории vegetables пользователь может ввести название товара cabbage или avocado или tomato.
// Для категории fruits пользователь может ввести название товара grapes или raspberry или coconut.
//     Важно: 
// Продолжаем запрашивать у пользователя название товара до тех пор, пока не будет введено название одного из трех допустимых товаров.
// Введенное пользователем значение может быть в любом регистре и с любым количеством пробелов до / внутри слова.
// !!!!!!!!!!!!!!!!
if (category === "vegetables") {

    product = prompt(`Вы выбрали категорию vegetables.
Выберите и введите товар: "cabbage", "avocado" или "tomato".`).replaceAll(" ", "").toLowerCase();
    console.log(product);

    while (product !== "cabbage" && product !== "avocado" && product !== "tomato") {
        alert('Не верно, введите "cabbage", "avocado" или "tomato".');
        product = prompt(`Вы выбрали категорию vegetables.
Выберите и введите товар: "cabbage", "avocado" или "tomato".`).replaceAll(" ", "").toLowerCase();
    }
    alert(`Верно. Вы ввели "${product}".`);
    console.log(`Верно. Вы ввели "${product}".`);

    // !!!!!!!!!!!!!!!!!
} else if (category === "fruits") {
    product = prompt(`Вы выбрали категорию fruits.
Выберите и введите товар: "grapes", "raspberry" или "coconut".`).replaceAll(" ", "").toLowerCase();
    console.log(product);

    while (product !== "grapes" && product !== "raspberry" && product !== "coconut") {
        alert('Не верно, введите "grapes", "raspberry" или "coconut".');
        product = prompt(`Вы выбрали категорию fruits.
Выберите и введите товар: "grapes", "raspberry" или "coconut".`).replaceAll(" ", "").toLowerCase();
    }
    alert(`Верно. Вы ввели "${product}".`);
    console.log(`Верно. Вы ввели "${product}".`);
}

// !!!!!!!!!!!!!!!!!!!!!!!!
//4 Запрашиваем у пользователя количество единиц ранее выбранного товара.
//     Важно:
// Введенное значение должно быть числом и не меньше 1.
// !!!!!!!!!!
amount = parseInt(prompt(`Вы выбрали категорию ${category}.
Вы выбрали товар ${product}.
Введите колличество товара, не менее 1.`));
console.log(amount);

while (amount < 1 || isNaN(amount)) {

    if (isNaN(amount)) {
        alert('Не верно, это не цифра, введите колличество товара, не менее 1.');
    } else if (amount < 1) {
        alert('Не верно, вы ввели меньше 1, введите колличество товара, не менее 1.');
    }

    amount = parseInt(prompt(`Вы выбрали категорию ${category}.
Вы выбрали товар ${product}.
Введите колличество товара, не менее 1.`));
}
alert(`Верно. Вы ввели ${amount} шт.`);
console.log(`Верно. Вы ввели ${amount} шт.`);

if (category === "vegetables") {
    if (product === "cabbage") {
        sum = amount * vegetables[0];
    } else if (product === "avocado") {
        sum = amount * vegetables[1];
    } else if (product === "tomato") {
        sum = amount * vegetables[2];
    }

} else if (category === "fruits") {
    if (product === "grapes") {
        sum = amount * fruits[0];

    } else if (product === "raspberry") {
        sum = amount * fruits[1];
    } else if (product === "coconut") {
        sum = amount * fruits[2];
    }
}
console.log(`Сумма до времени года ${sum} грн`);

if (period === "winter") {
    sum = sum * 2;
} else if (period === "summer") {
    sum = sum * 0.8;
}

console.log(`Сумма после времени года ${sum} грн`);
// !!!!!!!!!!!!!!!!!!

//5 Выводим в html информацию о выбранном товаре с финальной стоимостью покупки.Вариант вывода:

document.write(`
<div class="product" align="center">
 <img src="images/${product}.svg" alt="${product}" width="100" height="100">
  <p>Selected product: <b>${product}</b></p>
  <p>Count of cabbages: <b>${amount}</b></p>
  <p>Selected period: <b>${period}</b></p>
  <p>Selected category: <b>${category}</b></p>
  <p>Final sum: <b>${sum} UAH</b></p>
</div>
`);
