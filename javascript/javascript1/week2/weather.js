function dressToWear(temp) {
  if (temp < -10) {
    return "Winter Clothes"
  } else if (temp < 5) {
    return "Warm jackets and Sweater"
  } else if (temp < 10) {
    return "Jumpers"
  } else if (temp < 15) {
    return "Pants and Shirts"
  } else {
    return "Shorts and Sleeveless"
  }
}

console.log(dressToWear(19));
console.log(dressToWear(13));
console.log(dressToWear(-20));
console.log(dressToWear(4));
console.log(dressToWear(9));
