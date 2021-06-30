// Fetch movies from this api:
// Create an array of bad movies
// Creat an array of bad movies since year 2000
fetch(
    "https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json"
  )
  .then((moviesResponse) => moviesResponse.json())
  .then(data => {
    const getBadMovies = data.filter(m => m.rating < 6)
      //.map(m => m.title);
    const getBadMoviesSince2000 = getBadMovies.filter(mov => mov.year > 2000)
      .map(mov => mov.title);
    console.log(getBadMovies)
    console.log(getBadMoviesSince2000)
  })

// Create a function that has one parameter: resolveAfter.
// Calling this function will return a promise that resolves after the resolveAfter seconds has passed.
function resolveFunction(resolveAfter) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(), resolveAfter * 1000);
  });
}
resolveFunction(8).then(() => {
  console.log("I am called asynchronously"); // logged out after 8 seconds
});

async function resolveFn(resolve) {
  const promise = await resolveFunction(8)
  console.log("I am called asynchronously by async await")
}

// Rewrite setTimeout and navigator.geolocation.getCurrentPosition to promises.
//  The getCurrentPosition function is probably going to throw an error, but that is fine.
//   As long as you can use it as a promise.
function setTimeoutPromise(time) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, time);
  });
}
setTimeoutPromise(3000).then(() => {
  console.log("Called after 3 seconds");
});

const getCurrentLocation = function(options) {
  return new Promise(function(resolve, reject) {
    navigator.geolocation.getCurrentPosition(position => {
        resolve(position.coords)
      },
      error => {
        reject(error)
      }
    )
  }).catch(error => error)
}
getCurrentLocation()
  .then((position) => {

    console.log(position);
  })
  .catch((error) => {

    console.log(error);
  });

// Wait 3 seconds
// After 3 seconds fetch some data from any api you like
// Log out the data from the api
new Promise((resolve) => {
  setTimeout(() => {
    fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then((res) => res.json())
      .then((data) => {
        resolve(data);
        console.log('print after 3 sec', data.bpi);
      })
  }, 3000);
})

//Using Async and await

function newPromiseAsync() {
  setTimeout(async() => {
    const response = await fetch(
      'https://api.coindesk.com/v1/bpi/currentprice.json')
    const data = await response.json();
    console.log(data);
  }, 4000);
}
newPromiseAsync();
