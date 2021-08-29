// Log out the text Called after 2.5 seconds 2.5 seconds after the script is loaded.
setTimeout(function() {
  console.log("Called after 2.5 seconds");
}, 2500);

// Create a function that takes 2 parameters: delay and stringToLog.
// Calling this function should log out the stringToLog after delay seconds.
// Call the function you have created with some different arguments.
function timer(delay, stringToLog) {
  const time = delay * 1000;
  setTimeout(function() {
    console.log(stringToLog);
  }, time);
}
timer(5, "This String logged after 5 seconds");
timer(7, "This String logged after 7 seconds");
// Create a button in html. When clicking this button,
// use the function you created in the previous task to log out the text:
//  Called after 5 seconds 5 seconds after the button is clicked.
const but3 = document.querySelector(".btn3");
but3.addEventListener("click", function() {
  setTimeout(function() {
    console.log("Called after 5 seconds");
  }, 5000);
});
// Create two functions and assign them to two different variables.
// One function logs out Earth, the other function logs out Saturn.
// Now create a new third function that has one parameter: planetLogFunction.
// The only thing the third function should do is call the provided parameter function.
// Try call the third function once with the Earth function and once with the Saturn function.

const earthLogger = () => {
  console.log(`Earth`);
};
const saturnLogger = () => {
  console.log(`Saturn`);
};

function planetLogFunction(callback) {
  callback();
}
planetLogFunction(earthLogger);
planetLogFunction(saturnLogger);

// Create a button with the text called "Log location".
// When this button is clicked the location (latitude, longitude) of the
// user should be logged out using this browser api
const x = document.getElementById("demo");
const mapLink = document.querySelector('#map-link');

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}
// Now show that location on a map using fx the Google maps api
function showPosition(position) {
  mapLink.href =
    `https://www.google.dk/maps/@${position.coords.latitude}/${position.coords.longitude}`;
  mapLink.textContent =
    `This is the Latitude: ${position.coords.latitude}
    This is the Longitude: ${position.coords.longitude} `;
}
let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: {
      lat: -34.397,
      lng: 150.644
    },
    zoom: 8,
  });
}
// Create a function called runAfterDelay. It has two parameters: delay and callback.
// When called the function should wait delay seconds and then call the provided callback function.
// Try and call this function with different delays and different callback functions

function runAfterDelay(delay, callback) {
  setTimeout(() => {
    callback();
  }, delay * 1000);
}
runAfterDelay(4, function() {
  console.log('should be logged after 4 seconds');
});

// Check if we have double clicked on the page. A double click is defined by two clicks within 0.5 seconds.
//  If a double click has been detected, log out the text: "double click!"
window.addEventListener('dblclick', () => {
    console.log("double click!")
  })
  // Create a function called jokeCreator that has three parameters: shouldTellFunnyJoke - boolean,
  // logFunnyJoke - function and logBadJoke - function. If you set shouldTellFunnyJoke to true it should call the
  //  logFunnyJoke function that should log out a funny joke. And vice versa.
function jokeCreator(shouldTellFunnyJoke, logFunnyJoke, logBadJoke) {
  if (shouldTellFunnyJoke == true) {
    return funnyJoke();
  }
  return badJoke();
}

function funnyJoke() {
  console.log("Its a funny joke");
}

function badJoke() {
  console.log("Its a bad joke");
}
jokeCreator(true, funnyJoke, badJoke)
