const Stack = require("./Stack");

const starTrek = new Stack();

starTrek.push("Kirk");
starTrek.push("Scotty");
// console.log(JSON.stringify(starTrek));

function peek(stack) {
  console.log(stack.top);
}

// peek(starTrek);

function isEmpty(stack) {
  if (!stack.top) {
    console.log("empty");
  }
}

// isEmpty(starTrek);

function display(stack) {
  if (!stack.top) {
    return;
  }
  console.log(stack.top.data);
  return stack.top.data;
}

display(starTrek);
