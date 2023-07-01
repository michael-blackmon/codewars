/*
8kyu
INSTRUCTIONS:
Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

SAMPLE OUTPUT:
5  =>  'Odd'
8   =>  'Even'
*/
function evenOrOdd(number) {
  if (number % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}
