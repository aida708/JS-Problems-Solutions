/* given  a string
reverse it

sol 1:
 the given string it into an array
reverse the array
turn the array into string again

*/
const reverseString = (str) => {
    // const arr = str.split('');
    // arr.reverse();
    // str = arr.join('');
    const arr = str.split('').reverse();
    str = arr.join('')
    console.log(str);
};

reverseString('Ayeahhhhaaa');


