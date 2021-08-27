const express = require("express");
const router = express.Router();

const meals = require("./../data/meals.json");

router.get("/", async(request, response) => {
    try {
        console.log(meals);
        console.log("in /api/meals");
        const query = request.query;
        if (query.maxPrice) {
            response.send(meals.filter(meal => meal.price <= query.maxPrice));
        } else if (query.title) {
            response.send(meals.filter(meal => meal.title.toLowerCase().includes(
                query.title)));
        } else if (query.createdAfter) {
            response.send(meals.filter(meal => new Date(meal.createdAt) > new Date(
                query.createdAfter)));
        } else if (query.limit) {
            response.send(meals.slice(0, query.limit));
        } else {
            response.send(meals);
        }
    } catch (error) {
        response.status(400);
        response.send('Test failed', error);
    }
});

router.get("/:id", async(request, response) => {
    if (!Number.isInteger(parseFloat(request.params.id)) || Number.isNaN(
            parseFloat(request.params.id))) {
        response.status(400).send(`Id is not a number`);
    } else if (parseInt(request.params.id) > meals.length) {
        response.send(`Id does not exist`);
    } else {
        let mealWithId = meals.find(meal => meal.id === parseInt(request.params
            .id));
        response.send(mealWithId);
    }
    return response.status(400).send(error);
});


module.exports = router;