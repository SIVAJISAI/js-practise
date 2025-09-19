const  string ="sir";
let revString = "";
let length = string.length;
while (length >= 1){
    revString = revString + string[length-1]
    length--
}
console.log(revString,"is reverse of ",string)
