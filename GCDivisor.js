//Функция выводит наибольший общий делитель двух чисел.
function gcd(x,y) {
  var d = 1, n = x;
  if (x%1 === 0 && y%1 === 0) {
	if (x > y) n = y;
    for (var i = 2; i <= n; i++)
      if (x%i === 0 && y%i === 0) d = i;
    console.log(d);
  } else console.log("Введите натуральные числа.");
}