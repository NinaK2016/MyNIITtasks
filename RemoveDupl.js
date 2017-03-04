//Функция удалят дублирующие элементы из массива.
function rd(arr) {
  var n = arr.length;
  for (var i = 0; i < n; i++)
    for (var j = i+1; j < n; j++)
      if (arr[i] === arr[j]) {
        arr.splice(j,1);
        j--;
      }
  console.log(arr);
}