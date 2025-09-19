const number = 2;
let nextNumber =0;
let factorial = 1;
while(nextNumber != number){
    factorial = (number-nextNumber)*factorial
    nextNumber= nextNumber+1
}
console.log("factorial of ",number,"is",factorial);
