//Функция определяет, является ли число эн простым.
function pr(n) {
  if (n === 1) return "thrue";
  else if (n > 1 && n%1 === 0) {
    for (var i = 2; i < n; i++)
      if (n%i === 0) return "false";
    return "thrue";
  } else {
    console.log("Введите натуральное число.");
  }
}