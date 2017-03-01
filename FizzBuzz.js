//Задача FizzBuzz для натуральных чисел до 100, кратных 3, 5 и 15.
function fb() {
  var S = "";
   for (var i = 1; i <= 100; i++) {
     if (i%3 === 0) S = "Fizz";
     if (i%5 === 0) S += "Buzz";
     if (S === "") S = i;
     console.log(S);
     S = "";
   }
}