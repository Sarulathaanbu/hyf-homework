const travelInformation = {
  speed: 50,
  destinationDistance: 432,
};

function totalTime(travelInformation) {
  const time = (travelInformation.destinationDistance) / (travelInformation.speed);
  return `${Math.floor(time)} hours and ${Math.floor((time-Math.floor(time)) * 60)} minutes`;
}
const travelTime = totalTime(travelInformation);
console.log(travelTime);
