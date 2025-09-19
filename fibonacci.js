const limit = 50;
let first = 0;
let second = 1;
let next;
let nextTerm = 1;
while( nextTerm <= limit){
    if (nextTerm === 1){
        next = first
    }else if(nextTerm === 2){
        next = second
    }else{
        next = first + second;
        first = second;
        second = next;
    }
    console.log(next);
    nextTerm++
}
