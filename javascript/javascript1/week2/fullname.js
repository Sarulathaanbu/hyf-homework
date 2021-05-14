function getFullname(firstName, surName, useFormalName, gender) {

  if (useFormalName, gender === "male") {
    return ("Lord" + " " + firstName + " " + surName);
  } else if (useFormalName, gender === "female") {
    return ("Lady" + " " + firstName + " " + surName);
  } else {
    return (firstName + " " + surName);
  }
}


console.log(getFullname("Benjamin", "Hughes", true, "male"));
console.log(getFullname("Saru", "Latha", false, "female"));
console.log(getFullname("Mila", "Andrew"));
