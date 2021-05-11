function getFullname(firstName, surName, useFormalName, gender) {

  if (useFormalName, gender === "male") {
    return ("Lord" + " " + firstName + " " + surName);
  } else if (useFormalName, gender === "female") {
    return ("Lady" + " " + firstName + " " + surName);
  } else {
    return (firstName + " " + surName);
  }
}

const fullName1 = getFullname("Benjamin", "Hughes", true, "male");
const fullName2 = getFullname("Saru", "Latha", true, "female");
const fullName3 = getFullname("Mila", "Andrew");

console.log(fullName1);
console.log(fullName2);
console.log(fullName3);
