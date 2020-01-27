const queue = require("./Queue");

const starTrekQ = new queue();

// starTrekQ.enqueue("Kirk");
starTrekQ.enqueue("Spock");
starTrekQ.enqueue("Uhura");
starTrekQ.enqueue("Sulu");
starTrekQ.enqueue("Checkov");
// console.log(JSON.stringify(starTrekQ));

const peek = queue => {
  console.log(queue.first);
};

// peek(starTrekQ);

const isEmpty = queue => {
  if (!queue.first) {
    return true;
  }

  return false;
};

// isEmpty(starTrekQ);

const display = queue => {
  console.log(JSON.stringify(queue));
};

// starTrekQ.dequeue("Spock");

// display(starTrekQ);

function squarePairs(men, women) {
  let pairs = [];

  while (isEmpty(men) === false && isEmpty(women) === false) {
    let man = men.dequeue();
    let woman = women.dequeue();
    pairs.push([man, woman]);
  }
  console.log(pairs);
  return pairs;
}

const menQ = new queue();
const womenQ = new queue();

menQ.enqueue("jim");
menQ.enqueue("dwight");
menQ.enqueue("toby");
womenQ.enqueue("pam");
womenQ.enqueue("angela");

squarePairs(menQ, womenQ);
console.log(menQ);
