function decode(data) {
  const endIndex = data.indexOf('e', 0);
  const number = Number(data.slice(1, endIndex));
  return number;
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

function Testdecode(description, data, expectedOutput) {
  const result = decode(data);
  console.log(messageToPrint(description, data, result, expectedOutput));
}

function testAll() {
  Testdecode("number 123", "i123e", 123);
  Testdecode("number 456", "i456e", 456);
  Testdecode("number 0", "i0e", 0);
}

testAll();
