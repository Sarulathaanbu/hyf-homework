var peterVolume = 8*10*10;
var peterGarden = 100;
var peterHouseCost = 2500000;
var peterHousePrice = peterVolume * 2.5 * 1000 + peterGarden * 300;

if (peterHouseCost>peterHousePrice){
  console.log('Peter is paying too much');
}else{
  console.log('Peter is paying too little');
}

var juliaVolume = 5*11*8;
var juliaGarden = 70;
var juliaHouseCost = 1000000;
var juliaHousePrice = juliaVolume * 2.5 * 1000 + juliaGarden * 300;

if (juliaHouseCost>juliaHousePrice){
  console.log('Julia is paying too much');
}else{
  console.log('Julia is paying too little');
}
