function weatherCondition(temp){
  if(temp< -10){
    return "Winter Clothes"
  }
  else if(temp<5){
    return"Warm jackets and Sweater"
  }
  else if(temp<10){
    return "Jumpers"
  }
  else if(temp<15){
    return "Pants and Shirts"
  }
  else{
    return "Shorts and Sleeveless"
  }
}

console.log(weatherCondition(19));
console.log(weatherCondition(13));
console.log(weatherCondition(-20));
console.log(weatherCondition(4));
console.log(weatherCondition(9));
