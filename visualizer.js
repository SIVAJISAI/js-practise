function sort(data) {
  let sortedArray = data.slice();
  for (let outerIndex = 0; outerIndex < sortedArray.length; outerIndex++) {
    for (let innerIndex = outerIndex + 1; innerIndex < sortedArray.length; innerIndex++) {
      attachtiles(sortedArray, [outerIndex, innerIndex]);
      delay();
      if (sortedArray[outerIndex] > sortedArray[innerIndex]) {
        [sortedArray[outerIndex], sortedArray[innerIndex]] = [sortedArray[innerIndex], sortedArray[outerIndex]];
        attachtiles(sortedArray, [outerIndex, innerIndex]);
        delay();
      }
    }
  }
  attachtiles(sortedArray);
  return sortedArray;
}

function delay() {
  for (let index = 0; index < 1000000000; index++) { }
}
function generateRandomNumbersBetween(min, max) {
  return min + Math.floor(Math.random() * (max - min + 1));
}

function randomNumbers(noOfElements) {
  const items = [];
  for (let count = 0; count < noOfElements; count++) {
    items.push(generateRandomNumbersBetween(0, 20));
  }
  return items;
}
function symbol(index, elementIndices) {
  if (elementIndices.includes(index)) {
    return "🟥";
  }
  return "⬜️";
}

function attachtiles(data, elementIndices = []) {
  console.clear();
  for (let index = 0; index < data.length; index++) {
    let string = "";
    for (let count = 0; count < data[index]; count++) {
      string += symbol(index, elementIndices);
    }
    console.log(`${data[index]}: ${string}`);
  }
}
function main(args) { 
  const noOfElements = args[0] || 8;
  const data = randomNumbers(noOfElements);
  console.log(data);
  attachtiles(data);
  sort(data);
}

main(Deno.args)
