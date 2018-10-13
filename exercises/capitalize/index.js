// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  var words = str[0].toUpperCase();

  for(let index=1; index< str.length; index++){
    letter = str[index];
    if(str[index-1]===" "){
      letter = str[index].toUpperCase();
    }
    words +=letter;
  }
  return words;
}

module.exports = capitalize;

// function capitalize(str) {
//   const words = [];
//   for(let word of str.split(' ')){
//     words.push(word[0].toUpperCase() + word.slice(1));
//   }
//   return words.join(' ');
// }


// function capitalize(str) {
//   var  string_array = str.split(' ');
//   const string_result = [];
//   for(let value in string_array){
//     var new_string = string_array[value][0].toUpperCase();
//     new_string += string_array[value].slice(1);
//     string_result.push(new_string);
//   }
//   return string_result.join(' ');
// }
