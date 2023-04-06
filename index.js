// find the first non-repeated character in a string

// 'I am Elizabeth'

// word = 'I am Elizabeth'
// I want to pring 'Elizabeth'
// slicing method
// print(word[5:14])

// are strings mutable ???????????????? No
// Strings are immutable

// let word = 'Hello';

// replace 'H' with 'Y'

// console.log(word[0]);

// word[0] = 'Y';
// console.log(word);
// word[2] = 'j';
// console.log(word);

// then how should I change the string ?
// is there any way?

// 'ello'
// console.log('Y' + word.substring(1,5));
// console.log(`before string concatenation ${word}`);
// word = 'Y' + word.substring(1,5);
// console.log(`after string concatenation ${word}`);
// 'yello' to 'yellow'

// function firstNonRepeated(word){
//     let char = '';
//     for(let i = 0; i<word.length; i++){
//         if(word.includes(word[i],i+1) != -1){
//             continue;
//         }else if(word.substring(0,i+1).includes(word[i])){
//             char = word[i];
//             break;
//         }
//     }
//     console.log(char);
// }

// firstNonRepeated('bbbbcccadef');
// console.log('bbbbcccaadef'.substring(0,4).includes('b'));
// const movies = ['Poltergeist', 'The Others','Inception','Infinity War','Spider-Man 2']

// else if(word.includes(word[i], i+1) == -1 && word.substring(0,i).includes(word[i])){
//     char = word[i];
//     break;
// }
// word.includes(word[i], i+1) == -1 &&




// function firstNonRepeated(word){
//     for(let i = 0; i<word.length; i++){
//         if(word.indexOf(word[i]) == i && word.indexOf(word[i], i+1) == -1){
//             return word[i];
//         }
//     }
//     return 'there is no repeating character'
// }

// 'bbbbcccaaddeeffff'
// const result = firstNonRepeated('bbbbcccaadef');
// console.log(result);

const word = prompt('please enter a word: ');
let isNonRepeating = false;
for(let i = 0; i<word.length; i++){
    if(word.indexOf(word[i]) == i && word.indexOf(word[i], i+1) == -1){
        console.log(word[i]);
        isNonRepeating = true;
        break;
    }
    // console.log('no repeating character');
}
if(isNonRepeating == false){
    console.log('no repeating character');
}
console.log('just trying git');


