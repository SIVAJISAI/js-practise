const jungle = "  L LLL";
let lastLion = -1;
let lastzebra = -1;
let minDistance = Infinity;
for (let index = 0; index < jungle.length; index++) {
  if (jungle[index] === "L") {
    lastLion = index;
  } else if (jungle[index] === "Z") {
    lastzebra = index;
  }
  if (lastLion !== -1 && lastzebra !== -1) {
    const distance = Math.abs(lastLion - lastzebra);
    if (distance < minDistance) {
      minDistance = distance;
    }
  }
}
if (minDistance === Infinity) {
  console.log(-1);
} else {
  console.log("min distance:", minDistance);
}
