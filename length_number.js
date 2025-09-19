let number = 123456789012;
let length = 0;
while(number >= 1){
    number = number /10;
    length = length + 1
}
console.log("length of a number is ", length)
