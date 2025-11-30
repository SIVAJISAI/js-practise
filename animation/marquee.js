const HEIGHT = 30;
const WIDTH = 30;
const generateScreen = () => {
  const screen = [];
  for (let index = 0; index <= HEIGHT; index++) {
    screen.push(" ".repeat(WIDTH).split(""));
  }
  return screen;
};

const printScreen = (screen) => {
  console.log(screen.map((row) => row.join("")).join("\n"));
};

const vertical = (char, screen, word) => {
  for (let index = 0; index < char.length; index++) {
    const pos = (word.offset + index) % HEIGHT;
    screen[pos][word.col] = char[index];
  }
};

const RtoL = (char, screen, word) => {
  for (let index = 0; index < word.text.length; index++) {
    const pos = (word.offset + index) % WIDTH;
    screen[word.row][pos] = char[index];
  }
};

const LtoR = (char, screen, word) => {
  for (let index = 0; index < word.text.length; index++) {
    const pos = (index - word.offset + WIDTH) % WIDTH;
    screen[word.row][pos] = char[index];
  }
};

const drawScreen = (words) => {
  console.clear();
  const screen = generateScreen();
  words.forEach((word) => {
    const char = word.text.split("");
    switch (word.direction) {
      case "L":
        LtoR(char, screen, word);
        break;
      case "R":
        RtoL(char, screen, word);
        break;
      case "V":
        vertical(char, screen, word);
        break;
    }
    word.offset = (word.offset + 1) % WIDTH;
  });

  printScreen(screen);
  setTimeout(() => drawScreen(words), 100);
};

const main = () => {
  const words = [
    { text: "SIVAJI", row: 1, direction: "L", offset: 0 },
    { text: "HELLO", row: 8, direction: "R", offset: 0 },
    { text: "KARTHIK", col: 15, direction: "V", offset: 0 },
    { text: "PRAVEEN", col: 26, direction: "V", offset: 0 },
    { text: "Hello", row: 22, direction: "R", offset: 0 },
    { text: "BYE BYE", row: 30, direction: "L", offset: 0 },
    { text: "MARQUEE EFFECT", row: 29, direction: "R", offset: 0 },
    { text: "HEM PRADEEP", col: 1, direction: "V", offset: 0 },
    { text: "CHIRANJEEVI", row: 17, direction: "R", offset: 0 },
  ];
  drawScreen(words);
};

main();
