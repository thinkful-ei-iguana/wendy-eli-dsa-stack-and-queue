const Stack = require("./Stack");

const starTrek = new Stack();

starTrek.push("Kirk");
starTrek.push("Scotty");
// console.log(JSON.stringify(starTrek));

function peek(stack) {
  console.log(stack.top);
}

// peek(starTrek);

const isEmpty = stack => (!stack.top ? true : false);

// isEmpty(starTrek);

function display(stack) {
  if (!stack.top) {
    console.log("stack empty");
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

const sortStack = stack => {
  let tempStack = new Stack();

  while (stack.top) {
    let tmp = stack.pop();

    while (tempStack.top && tempStack.top.data > tmp)
      stack.push(tempStack.pop());

    tempStack.push(tmp);
  }

  return tempStack;
};

const testStack = new Stack();
testStack.push("4");
testStack.push("1");
testStack.push("6");
testStack.push("2");
// console.log(JSON.stringify(testStack))
// console.log(testStack);
const sorted = sortStack(testStack);

console.log(JSON.stringify(sorted, null, 2));
