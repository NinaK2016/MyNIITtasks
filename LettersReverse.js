//Функция перставляет буквы фразы в обратном порядке.
function lr(str) {
  var n = str.length - 1, rstr = "";
  for (var i = 0; i <= n; i++) rstr += str[n-i];
  console.log(rstr);
}