const class07Students = [];

function addStudentToClass(studentName) {
  if (class07Students.length === 6 && studentName !== "Queen Margrethe II") {
    console.log("Cannot add more students to class 07");
    return;
  } else if (class07Students.includes(studentName)) {
    console.log(`Student ${studentName} is already in the class`);
    return;
  } else if (!studentName) {
    console.log("You cannot add an empty string to a class");
    return;
  }
  class07Students.push(studentName);
}

addStudentToClass("Mila");
addStudentToClass("Mia");
addStudentToClass("Pia");
addStudentToClass(""); // empty string
addStudentToClass("Tia");
addStudentToClass("Mia"); // already in the class
addStudentToClass("Saru");
addStudentToClass("Julia");
addStudentToClass("Dev");
addStudentToClass("Queen Margrethe II"); //Mandatory Queen

console.log(class07Students);

function getNumberOfStudents() {
  return class07Students.length;
}
