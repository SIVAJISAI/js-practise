const whichNo = 5;
let firstNumber = 2;
let primeFound=1;
while(primeFound <=whichNo){
    let counter = 0;
    let div = 1;
    while(div <= firstNumber){
        if(firstNumber % div === 0){
            counter = counter+1;
        }
        div = div +1
    }
    if(counter === 2){
        primeFound += 1
    }
    firstNumber = firstNumber + 1;
}
console.log(firstNumber - 1,"is",whichNo)
