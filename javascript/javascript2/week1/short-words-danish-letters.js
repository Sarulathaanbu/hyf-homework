const danishWords = ["bil", "plante", "kaffe", "bog", "ø", "planetarium"];

function getShortestWord(array) {
  return array.reduce(function(prevWord, currWord) {
    if (currWord.length < prevWord.length) {
      return currWord;
    }
    return prevWord;
  })
}

console.log(getShortestWord(danishWords));

//////////////////////////Finding Danish Letters/////////////////////

const danishString = "Jeg har en blå bil";

function findDanishLetters(danishString) {
  const å = danishString.match(/å/g);
  const æ = danishString.match(/æ/g);
  const ø = danishString.match(/ø/g);
  const total = æ.length + å.length + ø.length;
  return `total: ${total}, æ: ${æ.length}, ø: ${ø.length}, ${å.length}: 1`;
}
console.log(findDanishLetters("Blå grød med røde bær"));
