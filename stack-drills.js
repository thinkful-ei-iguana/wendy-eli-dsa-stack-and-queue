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

// display(starTrek);

// palindrome
const isPalindrome = s => {
  s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  // Your code goes here
  const stack = new Stack();

  s.split("").forEach(l => {
    stack.push(l);
  });

  let acc = "";

  while (stack.top != null) {
    acc += stack.top.data;
    stack.pop();
  }

  return acc == s;
};

// True, true, true, false
// console.log(isPalindrome("dad"));
// console.log(isPalindrome("A man, a plan, a canal: Panama"));
// console.log(isPalindrome("1001"));
// console.log(isPalindrome("Tauhida"));

// 5. sort stack

const sortStack = (stack, item) => {
  const stack2 = new Stack();

  // if the new node is smaller than the existing top,
  // then it gets pushed to that stack.
  // otherwise, push to stack 2
  if (stack.top.data > item) {
    stack.push(item);
  } else stack2.push(item);

  return stack;
};

const testStack = new Stack();
testStack.push("4");
testStack.push("3");

console.log(sortStack(testStack, "2"));
