//Q.1 => find max number from array

//   let array = [999, 87, 35, 90, 456, 32, 786, 7888, 23, 67, 999998];
//   let MaxNumber = 0;
//   for (let a = 0; a < array.length; a++) {
//     if (array[a] > MaxNumber) {
//       MaxNumber = array[a];
//     }
//   }
//   console.log(MaxNumber);
////////////////////////////////////////
//Q.2 => find Min number from array

// let array = [999, 87, 35, 90, 456, 1, 32, 786, 7888, 23, 67, 999998];
// let MinNumber = 1;
// for (let a = 0; a < array.length; a++) {
//   if (array[a] < MinNumber) {
//     MinNumber = array[a];
//   }
// }
// console.log(MinNumber);

/////////////////////////////////////////////////////

//Q.3 => Find dupli.  count of a number

//   let array = [
//     2, 5, 98, 66, 33, 2, 1, 4, 2, 5, 6, 7, 34, 1, 65, 78, 988, 8, 23, 1, 3,
//     7,
//   ];
//   let duplicate = 0;
//   for (let a = 0; a < array.length; a++) {
//     if (array[a] === 1) {
//       duplicate += 1;
//     }
//   }
//   console.log(duplicate);
/////////////////////////////////////////////////////////////
//Q.6 => find frist element of a tha array
//   let array = [1, 2, 6, 3, 7, 8, 8, 10];
//   console.log(array[1]);

////////////////////////////////////////////////////////////////
//Q.8 => Find total count of odd Numbers in Array

let array = [1, 2, 6, 55, 61, 23, 53, 77, 88, 3, 7, 8, 8, 10];
let odd = 0;
for (let a = 0; a < array.length; a++) {
  if (array[a] % 2 === 1) {
    odd += 1;
  }
}
console.log(odd);
