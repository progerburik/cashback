const sum = 3051;  //сумма текущей покупки
const calculation = sum - (sum % 1000);  //расчет бонуса
const bonus = 100 * (calculation / 1000);
const resultBonusStr = bonus + " " + "бонусов";  //полученное колличество бонусов
console.log(resultBonusStr);