/*
8kyu
INSTRUCTIONS:
Complete the solution so that it reverses the string passed into it.

SAMPLE OUTPUT:
'world'  =>  'dlrow'
'word'   =>  'drow'
*/

function solution(str) {
  let newString = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newString += str[i];
  }
  return newString;
}
