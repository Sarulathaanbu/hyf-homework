const travelInformation = {
  speed: 50,
  destinationDistance: 432,
};

function totalTime(travelInformation) {
  const hours = travelInformation.destinationDistance / travelInformation.speed
  const minutes = (hours - Math.floor(hours)) * 60
  return `${Math.floor (hours)} hours and ${minutes.toFixed(0)} minutes`
}
const travelTime = totalTime(travelInformation);
console.log(travelTime);
