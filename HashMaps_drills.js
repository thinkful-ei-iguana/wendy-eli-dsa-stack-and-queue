const HashMap = require("./HashMap");
const LinkedList = require("./LinkedList");

const main = () => {
  const lotr = new HashMap();

  const characters = [
    { Hobbit: "Bilbo" },
    { Hobbit: "Frodo" },
    { Wizard: "Gandolf" },
    { Human: "Aragorn" },
    { Elf: "Legolas" },
    { Maiar: "The Necromancer" },
    { Maiar: "Sauron" },
    { RingBearer: "Gollum" },
    { LadyOfLight: "Galadriel" },
    { HalfElven: "Arwen" },
    { Ent: "Treebeard" }
  ];

  characters.forEach(char => {
    const list = new LinkedList();
    let duplicate;

    try {
      duplicate = lotr.get(Object.keys(char)[0], Object.values(char)[0]);
    } catch (err) {
      lotr.set(Object.keys(char)[0], Object.values(char)[0]);
    }

    if (duplicate) {
      list.insertFirst(char);
      list.insertFirst(duplicate);
      lotr.set(Object.keys(char)[0], list);
    }
  });

  // console.log(JSON.stringify(lotr.get("Maiar")));
  // console.log(lotr);
  // console.log(lotr.get("Hobbit"));
  console.log(lotr._capacity);
};

//values of Maiar and Hobbit will create collisions (duplicate keys being hashed to same location). The resulting values for these two keys are the SECOND value for these key/value pairs.

//The capacity of the hash table after hashing all items above is 24. The initial capacity is set to 8, and the SIZE RATIO is set to 3. Once the initial capacity was exceeded, we multiplied the capacity by 3.
main();

const demo = () => {
  const hm = new HashMap(11);
  hm.set(10, "");
  hm.set(22, "");
  hm.set(3, "");
  hm.set(4, "");
  hm.set(15, "");
  hm.set(28, "");
  hm.set(17, "");
  hm.set(88, "");
  hm.set(59, "");
  hm.set(5, "");
  hm.set(28, "");
  hm.set(19, "");
  hm.set(15, "");
  hm.set(20, "");
  hm.set(33, "");
  hm.set(12, "");
  hm.set(17, "");
  hm.set(10, "");

  console.log(JSON.stringify(hm));
};

// demo();

const paliPerm = str => {
  const pali = new HashMap();

  if (!str) {
    return;
  }

  //traverse over the str, for every char
  //found in str, add new entry in map (add count)
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    let perm;
    try {
      perm = pali.get(str.charAt(i));
    } catch (error) {
      perm = 0;
    }
    pali.set(str.charAt(i), perm + 1);
  }
  for (let i = 0; i < str.length; i++) {
    // console.log(str[i]);
    count += pali.get(str[i]) % 2;
  }
  return console.log(count <= 1);
};

// paliPerm("app");
