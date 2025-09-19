const number  = 19762;
const div = 10;
let sum = 0;
let remainder = 0
let dummyNumber=number
while(dummyNumber != 0){
    remainder= dummyNumber%div;
    sum =sum + remainder
    dummyNumber = dummyNumber /div
    dummyNumber = dummyNumber-(remainder/div);
}
console.log("sum of digits of ",number," is",sum );
