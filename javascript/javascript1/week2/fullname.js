function getFullname(firstName, surName, useFormalName, gender) {
  if (useFormalName) {
    if (gender === "male") {
      return "Lord" + " " + firstName + " " + surName;
    }
    if (gender === "female") {
      return "Lady" + " " + firstName + " " + surName;
    }
  }
  return firstName + " " + surName;
}

console.log(getFullname("Benjamin", "Hughes", true, "male"));
console.log(getFullname("Saru", "Latha", true, "female"));
console.log(getFullname("Mila", "Andrew", true));
