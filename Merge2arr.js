//Функция объединяет два массива в отсортировнный массив.
function m2a(arr1, arr2) {
  var arr = arr1.concat(arr2);
  if (typeof(arr1[0]) === "number" && typeof(arr2[0]) === "number") arr.sort(Num);
  else arr.sort();
  console.log(arr);
}

function Num(a, b) {
  return a - b;
}