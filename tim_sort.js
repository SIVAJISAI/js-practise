import { insertionSort } from "./insertion_sort.js";
import { merge } from "./merge_sort.js";

const makeRuns = (array) => {
  const runs = [];
  let run = [array[0]];
  for (let index = 1; index < array.length; index++) {
    const currentValue = array[index];
    let previousValue = array[index - 1];
    const isIncresing = currentValue >= previousValue;
    const previousOrder = run.length > 1
      ? run[run.length - 1] > run[run.length - 2]
      : isIncresing;
    if (isIncresing !== previousOrder) {
      runs.push(run.slice());
      run = [currentValue];
    } else {
      run.push(currentValue);
    }
  }
  runs.push(run);
  return runs;
};

const mergeRuns = (runs) => {
  while (runs.length > 1) {
    const left = runs.shift();
    const right = runs.shift();
    const mergedRuns = merge(left, right);
    runs.push(mergedRuns);
  }
  return runs[0];
};

const array = [6, 1, 2, 27, 83, 42, 23];
const runs = makeRuns(array);
console.log("runs are", runs);
console.log("after insertion sort", runs.map(insertionSort));
console.log("final sorted array", mergeRuns(runs));
