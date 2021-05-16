let dogYearOfBirth = 2017;
let dogYearFuture = 2027;

let dogYear = dogYearFuture - dogYearOfBirth;
let shouldShowResultInDogYears=false;
let result = dogYear * 7;

if (shouldShowResultInDogYears) {
  console.log(`Your dog will be ${result} years old in ${dogYearFuture}`);
} else {
  console.log(`Your dog will be ${dogYear} human years old in ${dogYearFuture}`);
}
