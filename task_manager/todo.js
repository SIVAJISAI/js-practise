const parseInput = (input) => {
  const [command, ...args] = input.trim().split(" ");
  return [command, args];
};

const loadTasks = () => {
  const data = Deno.readTextFileSync("./tasks.txt");
  const lines = data.trim().split("\n");

  const tasks = [];

  for (const line of lines) {
    const parts = line.split("|");
    tasks.push({
      id: Number(parts[0]),
      isDone: parts[1] === "1",
      text: parts.slice(2).join("|"),
    });
  }

  return tasks;
};

const whichid = (tasks) =>
  tasks.length ? Math.max(...tasks.map((t) => t.id)) + 1 : 1;

const saveTask = (tasks) => {
  const result = tasks
    .map((t) => `${t.id}|${t.isDone ? 1 : 0}|${t.text}`)
    .join("\n");
  Deno.writeTextFileSync("tasks.txt", result);
};

const add = (tasks, args) => {
  const text = args.join(" ");
  if (!text) {
    console.log("YOU MUST ENTER TEXT FOR ADD COMMAND");
  }
  tasks.push({ id: whichid(tasks), isDone: false, text });
  saveTask(tasks);
  console.log("Added:", text);
};

const show = (tasks) => {
  if (tasks.length === 0) {
    console.log("no tasks are there");
    return;
  }
  tasks.forEach((t, i) =>
    console.log(`${i + 1} ${t.isDone ? "✅" : "❌"} ${t.text}`)
  );
};

const remove = (tasks,args) => {
  const index = Number(args[0]) - 1;
  if (index < 0 || index >= tasks.length) {
    console.log("there is no such task id");
    return;
  }
  const removed = tasks.splice(index, 1)[0];
  saveTask(tasks);
  console.log("deleted:", removed.text);
};

const done = (tasks, args) => {
  const index = Number(args[0]) - 1;
  if (index < 0 || index >= tasks.length) {
    console.log("Invalid task number");
    return;
  }
  tasks[index].isDone = true;
  saveTask(tasks);
  console.log("Done:", tasks[index].text);
};

const exit = () => {
  console.log("ok work is done! bye");
  Deno.exit(0);
};

const handleCommands = {
  add,
  remove,
  show,
  done,
  exit,
};

const help = () => {
  console.log("COMMANDS ARE:");
  console.log("add <text>");
  console.log("show");
  console.log("remove <number>");
  console.log("exit");
  console.log("done <number>\n");
};

const commands = (input) => {
  const [command, args] = parseInput(input);
  const tasks = loadTasks();

  const instruction = handleCommands[command];

  if (!instruction) {
    help();
    return;
  }
  instruction(tasks, args);
};

while (true) {
  const input = prompt("> ");
  if (input === null) break;
  commands(input);
}
