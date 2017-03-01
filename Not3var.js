//Функция меняет местами числовые значения двух переменных без третьей переменной.
function n3v(x,y) {
  if (typeof(x) === "number" && typeof(y) === "number") {
    x = x + y;
    y = x - y;
    x = x - y;
    console.log(x, y);
  } else console.log("Введите числа.");
}