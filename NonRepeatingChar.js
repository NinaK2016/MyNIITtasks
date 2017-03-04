//Функция находит первый неповторяющийся символ в строке.
function un(str) {
  var n = str.length;
  for (var i = 0; i < n; i++) {
    for (j = 0; j < n; j++)
      if (str.charAt(i) === str.charAt(j) && i !== j) break;
    if (j === n) {
      console.log(str.charAt(i));
      return;
    }
  }
  console.log("Неповторяющихся символов нет.");
}