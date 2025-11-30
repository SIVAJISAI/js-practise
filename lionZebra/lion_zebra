const str = "  LLL   "
const startIndex =0;
let nextIndex = 0;
let zebraPointer =0;
let lionIndex = 0; 
let zebraIndex = 0;
let distance = 0;
let currentDistance = 100
while(nextIndex<str.length){
    if(str[startIndex + nextIndex]==="L"){
        lionIndex= nextIndex;
        zebraPointer = 0
        while(zebraPointer<str.length){
            while(str[startIndex + zebraPointer]!=="Z" && zebraPointer<str.length){
                zebraPointer++;
            }if (zebraPointer >= str.length){
                break;
            }
            zebraIndex= zebraPointer;
            distance = zebraIndex - lionIndex;
            if(distance < 0){
                distance = -distance;
            }
            if(distance === 1){
                currentDistance = distance
                break
            }
            else if(distance < currentDistance){
                currentDistance = distance
            }
            zebraPointer++
        }
    }
    nextIndex++
}
if(currentDistance === 100){
    console.log(-1)
}else{
 console.log("distance is ",currentDistance - 1);
}
