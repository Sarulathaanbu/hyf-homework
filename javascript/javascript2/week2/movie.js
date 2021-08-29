// Create an array of movies containing the movies with a short title (you define what short means)

const shortName = movies.filter((x) => x.title.length < 10).map((x) => x.title);
console.log(shortName);
// Create an array of movie titles with long movie titles
const longName = movies.filter((x) => x.title.length > 10).map((x) => x.title);
console.log(longName);
// Count the number of movies made between 1980-1989 (including both the years)
const yearBet = movies.filter((x) => x.year >= 1980 && x.year <= 1989).map((x) =>
  x.title);
console.log(yearBet);
// Create a new array that has an extra key called tag. The tag is based on the rating: Good (>= 7), Average (>= 4 and < 7), Bad (< 4)
const rating = movies.filter(function(movie) {
  if (movie.rating >= 7) {
    return movie.tag = "Good";
  }
  if (movie.rating >= 4 && movie.rating < 7) {
    return movie.tag = "Average";
  }
  if (movie.rating < 4) {

const shortNames = movies.filter((name) => name.title.length < 10).map((name) =>
  name.title);
console.log(shortNames);
// Create an array of movie titles with long movie titles
const longName = movies.filter((name) => name.title.length > 10).map((name) =>
  name.title);
console.log(longName);
// Count the number of movies made between 1980-1989 (including both the years)
const moviesFromThe80s = movies.filter((name) => name.year >= 1980 && name.year <=
  1989).map((name) =>
  name.title);
console.log(moviesFromThe80s);
// Create a new array that has an enametra key called tag. The tag is based on the rating: Good (>= 7), Average (>= 4 and < 7), Bad (< 4)
const moviesWithTags = movies.filter(function(movie) {
  if (movie.moviesFromThe80s >= 7) {
    return movie.tag = "Good";
  }
  if (movie.moviesFromThe80s >= 4 && movie.moviesFromThe80s < 7) {
    return movie.tag = "Average";
  }
  if (movie.moviesFromThe80s < 4) {

    return movie.tag = "Bad";
  }
}).map((movie) => movie.tag);


console.log(rating);
// Using chaining, first filter the movies array to only contain the movies rated higher than 6.
// Now map the movies array to only the rating of the movies.
const chaining = movies.filter((x) => x.rating > 6).map((x) => x.title);
console.log(chaining);
=======
console.log(moviesFromThe80s);
// Using chaining, first filter the movies array to only contain the movies rated higher than 6.
// Now map the movies array to only the rating of the movies.
const wellRatedMovies = movies.filter((movie) => movie.rating > 6).map((movie) =>
  movie.rating);
console.log(wellRatedMovies);

// Count the total number of movies containing any of following keywords: Surfer, Alien or Benjamin.
//  So if there were 3 movies that contained Surfer, 1 with Alien and 2 with Benjamin, you would return 6.
//   Can you make sure the search is case insensitive?

const nameFilter = movies.filter((movie) =>

  (movie.title.toLowerCase().indexOf("surfer") >= 0) ||
  (movie.title.toLowerCase().indexOf("alien") >= 0) ||
  (movie.title.toLowerCase().indexOf("benjamin") >= 0));
console.log(nameFilter.length);

// Calculate the average rating of all the movies using reduce.
const movieRating = movies.map(movie => movie.rating);
var averageRating = movieRating.reduce((total, rating) => total + rating) /
  movieRating.length;
console.log(averageRating.toFixed(2));

// Count the total number of Good, Average and Bad movies using reduce.
// A return could fx be {goodMovies: 33, averageMovies: 45, goodMovies: 123}
const goodMovies = movies.filter(movie => movie.rating >= 7);
const averageMovies = movies.filter(movie => movie.rating >= 4 && movie.rating <
  7);
const badMovies = movies.filter(movie => movie.rating < 4);
console.log(
  `goodMovies: ${goodMovies.length}, averageMovies: ${averageMovies.length}, badMovies: ${badMovies.length}`
);

    (movie.title.toLowerCase().includes("surfer")) ||
    (movie.title.toLowerCase().includes("alien")) ||
    (movie.title.toLowerCase().includes("benjamin")); console.log(nameFilter.length);

    // Calculate the average moviesFromThe80s of all the movies using reduce.
    const movieRating = movies.map(movie => movie.moviesWithTags);
    const averageRating = movieRating.reduce((total, moviesWithTags) => total +
        moviesWithTags) /
      movieRating.length; console.log(averageRating.toFinameed(2));

    // Count the total number of Good, Average and Bad movies using reduce.
    // A return could fname be {goodMovies: 33, averageMovies: 45, goodMovies: 123}
    const goodMovies = movies.filter(movie => movie.moviesWithTags >= 7);
    const averageMovies = movies.filter(movie => movie.moviesWithTags >= 4 &&
      movie
      .moviesWithTags <
      7);
    const badMovies = movies.filter(movie => movie.moviesWithTags < 4); console
    .log(
      `goodMovies: ${goodMovies.length}, averageMovies: ${averageMovies.length}, badMovies: ${badMovies.length}`
    );

