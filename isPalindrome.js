const number = 908;
let duplicateNo = number
let remainder;
let reverse=0;
const div =10
if (duplicateNo === 0){
    console.log(duplicateNo);    
}else{
    while(duplicateNo >= 1){
    remainder= duplicateNo%div;
    duplicateNo = duplicateNo /div;
    reverse = reverse * 10 + remainder;
    duplicateNo = duplicateNo -(remainder/div)
}
    console.log("reverse of",number,"is",reverse); 
}
const isPalindrome = (number === reverse)?"is palindrome":"is not palindrome";
console.log(number,  isPalindrome);
