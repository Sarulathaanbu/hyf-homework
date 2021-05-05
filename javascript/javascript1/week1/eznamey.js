var firstWords= ["Easy", "Awesome", "Corporate", "Build", "Bakers", "Flow", "Sun", "Cloud" , "InterV","Cantor"];
var secondWords = ["Blosum", "Philler","Beta", "Delta", "Data", "Level","Brand","Selection","Sonic","Collaboration"];
//var startupName = firstWords[2] + secondWords[3]; This is manual option/////
const randomNumber = Math.floor(Math.random() * 10) + 0;

let startupName = firstWords[randomNumber] + secondWords[randomNumber];
console.log(`The startup: ${startupName} contains ${startupName.length} characters`);
