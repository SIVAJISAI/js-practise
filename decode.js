function heading(text) {
  console.log(`\n${"-".repeat(20) + text + "-".repeat(20)}`);
}

function decodeNext(data) {
  return decode(data, 0)[0];
}

function decode(data, index) {
  if (data[index] === 'i') {
    const endIndex = data.indexOf('e', index);
    const number = Number(data.slice(index + 1, endIndex));
    return [number, endIndex + 1];
  }

  if (data[index] <= '9' && data[index] >= '0') {
    const colonIndex = data.indexOf(":", index);
    const textLength = Number(data.slice(index, colonIndex));
    const startIndex = colonIndex + 1;
    const endIndex = startIndex + textLength;
    const text = data.slice(startIndex, endIndex);
    return [text, endIndex];
  }
  const result = [];
  let currentIndex = index + 1;
  while (data[currentIndex] !== 'e') {
    const [element, nextIndex] = decode(data, currentIndex);
    result.push(element);
    currentIndex = nextIndex;
  }
  return [result, currentIndex + 1];
}

function areDeepEqual(array1, array2) {
  if (typeof array1 !== typeof array2) {
    return false;
  }
  if (typeof array1 !== "object") {
    return array1 === array2;
  }
  if (array1.length !== array2.length) {
    return false;
  }
  for (let index = 0; index < array1.length; index++) {
    if (!areDeepEqual(array1[index], array2[index])) {
      return false;
    }
  }
  return true;
}

function messageToPrint(description, data, result, expectedOutput) {
  const isPass = areDeepEqual(result,expectedOutput);
  const status = isPass ? "✅" : "❌";
  const message = "  " + description;
  const inputFragment = !isPass ? "\n\n\tinput  :  | " + data : "";
  const expectFragment = !isPass ? "\n\texpect :  | " + expectedOutput : "";
  const actualFragment = !isPass ? "\n\tactual :  | " + result + "\n\t" : "";
  return status + message + inputFragment + expectFragment + actualFragment;
}

function Testdecode(description, data, expectedOutput) {
  const result = decodeNext(data, 0);
  console.log(messageToPrint(description, data, result, expectedOutput));
}

function testNumbers() {
  heading("NUMBERS");
  Testdecode("number 123", "i123e", 123);
  Testdecode("number 456", "i456e", 456);
  Testdecode("negative number 42", "i-42e", -42);
  Testdecode("number 0", "i0e", 0);
  Testdecode("number 01", "i01e", 1);
}

function testString() {
  heading("STRING");
  Testdecode("normal string", "5:hello", "hello");
  Testdecode("string", "5:hello world", "hello");
  Testdecode("bigger string", "16:special!@#$chars", "special!@#$chars");
  Testdecode("empty string", "0:", "");
}

function testList() {
  heading("LIST");
  Testdecode("normal list", "li6e5:helloe", [6, 'hello']);
  Testdecode("single element in list", "li3ee", [3]);
  Testdecode("nested list in list", "li3eli4eee", [3, [4]]);
  Testdecode("normal array", "li3eli4ee5:helloe", [3, [4],"hello"]);
  Testdecode("normal array", "li3eli4ee0:e", [3,[4],""]);
  Testdecode("normal array", "l3:onel3:twol5:threeeee", ["one", ["two", ["three"]]]);
  Testdecode("empty list in list", "l0:i0elee", [ "", 0, [] ]);
  Testdecode("empty list", "le", []);
}
function testAll() {
  testNumbers();
  testString();
  testList();
}

testAll();
