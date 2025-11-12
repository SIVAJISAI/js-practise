export const insertionSort = array => {
  for (let index = 1; index < array.length; index++) {
    let current = array[index];
    let previousElementIndex = index - 1;
    
    while (previousElementIndex >= 0 && array[previousElementIndex] > current) {
      array[previousElementIndex + 1] = array[previousElementIndex];
      previousElementIndex--;
    }
    array[previousElementIndex + 1] = current;
  }
  return array;
}
