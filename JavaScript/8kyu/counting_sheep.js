/*
8kyu
INSTRUCTIONS:
Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

For example,

[true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]
The correct answer would be 17.

Hint: Don't forget to check for bad values like null/undefined
*/

function countSheeps(arrayOfSheep) {
  let numSheep = 0;
  for (let i = 0; i <= arrayOfSheep.length - 1; i++) {
    if (arrayOfSheep[i] === true) {
      numSheep += 1;
    } else continue;
  }
  return numSheep;
}
