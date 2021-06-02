const names = [
  "Peter",
  "Ahmad",
  "Yana",
  "kristina",
  "Rasmus",
  "Samuel",
  "katrine",
  "Tala",
];
const nameToRemove = "Ahmad";


names.splice(names.indexOf(nameToRemove), 1);


names.splice(1, 1);

console.log(names);
