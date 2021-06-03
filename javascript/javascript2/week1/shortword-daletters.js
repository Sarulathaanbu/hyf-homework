const danishWords = ["bil", "plante", "kaffe", "bog", "ø", "planetarium"];

function shortWord(array) {
  return array.reduce(function(prevWord, currWord) {
    if (currWord.length < prevWord.length) {
      return currWord;
    } else
      return prevWord;
  })
}

console.log(shortWord(danishWords));

//////////////////////////Finding Danish Letters/////////////////////

const danishString = "Jeg har en blå bil";

function findDanishLetters(danishString) {
  const å = danishString.match(/å/g);
  const æ = danishString.match(/æ/g);
  const ø = danishString.match(/ø/g);
  let total = æ.length + å.length + ø.length;
  return `total: ${total}, æ: ${æ.length}, ø: ${ø.length}, ${å.length}: 1`;
}
console.log(findDanishLetters("Blå grød med røde bær"));
