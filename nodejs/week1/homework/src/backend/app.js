const express = require("express");
const app = express();

// import data here
const meals = require("./data/meals");
const meal = require("./data/meal");
const reviews = require("./data/reviews")
const reservations = require("./data/reservations")
const reservation = require("./data/reservation")

function getMealsWithReviews() {
    return meals.map(meal => {
        meal.reviews = reviews.filter(review => review.mealId === meal.id);
        return meal;
    });
}

function getRandomMeal() {
    const randomNumber = Math.floor((Math.random() * 4) + 1);
    return getReviewsWithMeal().find(meal => meal.id === randomNumber);
}
// this is where you will be adding your routes
// app.get("/", async(request, response) => {
//   response.send("asd");
// });

app.get("/", async(request, response) => {
    response.send("Meal Sharing Web App");
});

app.get("/meal", async(request, response) => {
    response.send(mealsReviews[Math.floor(Math.random() * reservations.length)])
});

app.get("/meals", async(request, response) => {
    response.send(getMealsWithReviews())
})

app.get("/cheap-meals", async(request, response) => {
    response.send(getMealsWithReviews().filter(meal => meal.price < 90))
})

app.get("/large-meals", async(request, response) => {
    response.send(getMealsWithReviews().filter(meal => meal.maxNumberOfGuests >
        5))
})

app.get("/meal", async(request, response) => {
    response.send(getRandomMeal())
})

app.get("/reservations", async(request, response) => {
    response.send(reservations)
})

app.get("/reservation", async(request, response) => {
    response.send(reservations[Math.floor(Math.random() * reservations.length)]);
});

module.exports = app;