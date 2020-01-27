const HashMap = require("./HashMap");

const main = () => {
  const lotr = new HashMap();

  lotr.set("Hobbit", "Bilbo");
  lotr.set("Hobbit", "Frodo");
  lotr.set("Wizard", "Gandalf");
  lotr.set("Human", "Aragorn");
  lotr.set("Elf", "Legolas");
  lotr.set("Maiar", "The Necromancer");
  lotr.set("Maiar", "Sauron");
  lotr.set("Ringbearer", "Gollum");
  lotr.set("LadyOfLight", "Galadriel");
  lotr.set("HalfElven", "Arwen");
  lotr.set("Ent", "Treebeard");

  console.log(lotr.get("Maiar"));
  console.log(lotr.get("Hobbit"));
  console.log(lotr._capacity);
};

// main();

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

paliPerm("app");
