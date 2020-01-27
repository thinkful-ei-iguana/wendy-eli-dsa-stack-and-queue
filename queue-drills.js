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

// squarePairs(menQ, womenQ);
// console.log(menQ);

// 10. the ophidian bank
const bankQueue = queue => {
  while (queue.last != null) {
    const chance = Math.random();
    console.log(queue, chance);

    if (chance > 0.75) {
      queue.enqueue(queue.dequeue());
    } else queue.dequeue();
  }

  console.log(queue);
};

const bank = new queue();
bank.enqueue("1");
bank.enqueue("2");
bank.enqueue("3");
bank.enqueue("4");
bank.enqueue("5");

bankQueue(bank);
