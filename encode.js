function encode(data) {
  if (typeof data === "number") {
    return "i" + data + 'e';
  }

  if (typeof data === "string") {
    return data.length + ":" + data;
  }

  if (Array.isArray(data)) {
    let bencodedList = "";
    for (let index = 0; index < data.length; index++) {
      bencodedList += encode(data[index]);
    }
    return 'l' + bencodedList + "e";
  }
  return "enter proper data";
}

function messageToPrint(description, data, result, expectedOutput) {
  const isPass = result === expectedOutput;
  const status = isPass ? "✅" : "❌";
  const message = "  " + description;
  const inputFragment = !isPass ? "\n\n\tinput  :  | " + data : "";
  const expectFragment = !isPass ? "\n\texpect :  | " + expectedOutput : "";
  const actualFragment = !isPass ? "\n\tactual :  | " + result + "\n\t" : "";
  return status + message + inputFragment + expectFragment + actualFragment;
}

function TestBencode(description, data, expectedOutput) {
  const result = encode(data);
  console.log(messageToPrint(description, data, result, expectedOutput));
}

function testDecode() {
  decode("a normal number", "i123e", 123)
}

function testAll() {
  TestBencode("number 123", 123, 'i123e');
  TestBencode("number 456", 456, 'i456e');
  TestBencode("number 0", 0, 'i0e');
  TestBencode("negative numbers", -86, 'i-86e');
  TestBencode("string hello", "hello", '5:hello');
  TestBencode("empty string", "", '0:');
  TestBencode("string bye bye", "bye bye", '7:bye bye');
  TestBencode("string bye bye", "special!@#$chars", "16:special!@#$chars");
  TestBencode("normal list", [0], "li0ee");
  TestBencode("empty list", [], "le");
  TestBencode("list with number and string", [0, 'hello'], "li0e5:helloe");
  TestBencode("list inside a list", [0, 'hello', ["abc"]], "li0e5:hellol3:abcee");
  TestBencode("nested list inside a list", ["one", ["two", ["three"]]], "l3:onel3:twol5:threeeee");
  TestBencode("empty list inside a list", ["", 0, []], "l0:i0elee");
  testDecode();
}

testAll();
