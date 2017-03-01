//Функция выводит энное число последовательности Фибоначчи.
function fib(n) {
  var F0 = 0, F1 = 1, Fx = 1;
  if (n === 1) console.log(Fx);
  else if (n > 1 && n%1 === 0) {
    for (var i = 2; i <= n; i++) {
      Fx = F0 + F1;
      F0 = F1;
      F1 = Fx;
    }
    console.log(Fx);
  } else {
    console.log("Введите натуральное число.");
  }
}