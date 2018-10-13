// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'
//recursion
function steps(n, row = 0, stairs = '') {
  if(n == row) return;

  if(n === stairs.length){
    console.log(stairs);
    return steps(n, row + 1);
  }
  if(row >= stairs.length){
    stairs +="#";
  } else {
    stairs +=" ";
  }
  return steps(n, row ,stairs);
}

module.exports = steps;
//
// function steps(n) {
//   for(let index=0;index < n; index++){
//     var result="";
//     for(let indexx=0;indexx < n; indexx++){
//         if(index<indexx){
//           result += " ";
//         }
//         else {
//           result += "#";
//         }
//   }

// function steps(n) {
//   for(let index=0;index < n; index++){
//     console.log(printR(index).padEnd(n," "))
//   //  console.log(pad(n,printR(index).," "))
//   }
// }
//
// function printR(n){
//   var result="";
//   for(let index=0;index <= n; index++){
//     result +="#"
//   }
//   return result;
// }
