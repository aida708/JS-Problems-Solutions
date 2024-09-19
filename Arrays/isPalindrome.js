function Palindrome(str){
    const isPalindrome= str.split('').reverse().join('');
  console.log(str === isPalindrome);
}

Palindrome('aba');

// reverse the string
// check if they are the same 

