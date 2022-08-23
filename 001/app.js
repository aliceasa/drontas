let masyvas = [];

function rand(min, max) {
  Math.ceil(min);
  Math.floor(max);
  const skaicius = Math.floor(Math.random() * (max - min + 1) + min);
  masyvas.push(skaicius);
}

for (let i = 0; i <= 9; i++) {
  rand(100, 999);
  console.log(masyvas);
}

const cats = [
  { name: "Pilkis", weight: 4 },
  { name: "Murka", weight: 7 },
  { name: "Keris", weight: 3 },
];

let newCatsArr = [];

cats.forEach((element) => {
  return { element };
});

console.log(cats);
