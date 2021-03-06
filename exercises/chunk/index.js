// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  const array_result = [];
  let final = 0;
  while (final < array.length) {
    array_result.push(array.slice(final,final+size));
    final += size;
  }

  return array_result;
}

// function chunkv1(array, size) {
//   const array_result = [];
//
//   for (let element of array) {
//     const last = array_result[array_result.length - 1];
//
//     if (!last || last.length === size) {
//       array_result.push([element]);
//     } else {
//       last.push(element);
//     }
//   }
//   return array_result;
// }
module.exports = chunk;
