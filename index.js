const apprenants = [
  "wilfried",
  "marie",
  "sandra",
  "herman",
  "ahmed",
  "ateba",
  "myline",
  "melvis",
  "serges",
  "christian",
  "gaby",
];

function macabo(a) {
  console.log(`le meilleur apprenant est : ${a}`);
}

for (i in apprenants) {
  macabo(apprenants[i]);
}

let i = 0;
do {
  console.log(i);
  i++;
} while (i < 5);

while (i < 5) {
  console.log(i);
  i++;
}

for (i = i; i < 5; i++) {
  console.log(i);
}
