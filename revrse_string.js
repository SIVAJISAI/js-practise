const  string ="sir";
let rev_string = "";
let length = string.length;
while (length >= 1){
    rev_string = rev_string + string[length-1]
    length--
}
console.log(rev_string,"is reverse of ",string)
