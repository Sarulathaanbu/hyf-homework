CREATE DATABASE meals;

SET NAMES utf8mb4;

USE meals;

CREATE TABLE `meal` (
    `id` INT (10) UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
    `title` VARCHAR(255) NOT NULL,
    `description` TEXT NULL DEFAULT NULL,
    `location` VARCHAR(255),
    `when` DATETIME NOT NULL,
    `max_reservations` INT (50) UNSIGNED,
    `price` DECIMAL UNSIGNED NOT NULL,
    `created_date` DATETIME NOT NULL DEFAULT NOW()) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;

CREATE TABLE `reservation` (
    `id` INT (10) UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
    `no_of_guests` INT (50) UNSIGNED NOT NULL,
    `meal_id` INT (10) UNSIGNED NOT NULL,
    `created_date` DATETIME NOT NULL DEFAULT NOW(),
    `contact_phonenumber` VARCHAR(255) NOT NULL,
    `contact_name` VARCHAR(255) NOT NULL,
    `contact_email` VARCHAR(255) NOT NULL,
    CONSTRAINT `fk_reservation_meal` FOREIGN KEY (`meal_id`) REFERENCES `meal` (`id`) ON DELETE CASCADE ON
    UPDATE
        CASCADE) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;

CREATE TABLE `review` (
    `id` INT (10) UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
    `title` VARCHAR(255) NOT NULL,
    `description` TEXT NULL DEFAULT NULL,
    `meal_id` INT (10) UNSIGNED NOT NULL,
    `stars` INT (10) NOT NULL,
    `created_date` DATETIME NOT NULL DEFAULT NOW(),
    CONSTRAINT `fk_review_meal` FOREIGN KEY (`meal_id`) REFERENCES `meal` (`id`) ON DELETE CASCADE ON
    UPDATE
        CASCADE) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;

/*insert data into meal table*/
insert into meal (`title`, `description`, `location`, `when`, `max_reservations`, `price`, `created_date`)
    values ('dragon chicken', 'Chicken semidry', 'valby', '2021-08-08 04:49:05', '1', '120.23', '2017-08-08 19:40:23'), ('gobi manchurian', 'indian starter', 'Hellerup', '2021-06-08 04:49:05', '12', '112.13', '2019-08-05 15:40:23'), ('briyani', 'indian main course', 'Holte', '2015-06-08 04:49:05', '10', '110.28', '2016-08-06 14:40:23');

/*insert data into reservation table*/
INSERT INTO reservation (`no_of_guests`, `meal_id`, `contact_phonenumber`, `contact_name`)
    VALUES ('5', '1', '45897890', 'paul'), ('6', '1', '75897890', 'vicky'), ('7', '3', '35897890', 'Lone'), ('8', '2', '95897890', 'shervin');

/*insert data into review table*/
INSERT INTO review (`title`, `description`, `meal_id`, `stars`)
    values ('Excellent', 'taste is excellent', '1', '5'), ('very good', 'delicious food', '2', '4'), ('good', 'nice plating', '2', '3');

/*Get all meals*/
SELECT
    *
FROM
    meal;

/* add new meal*/
INSERT INTO meal (`title`, `description`, `location`, `when`, `max_reservations`, `price`, `created_date`)
    values ('chilli parota', 'spicy dish', 'lyngby', '2021-08-08 04:49:05', '11', '119.23', '2020-08-08 20:40:23');

--Meal queries
/*Get a meal with any id, fx 1*/
SELECT
    *
FROM
    meal
WHERE
    id = 2;

/*Update a meal with any id, fx 1. Update any attribute fx the title or multiple attributes*/
UPDATE
    meal
SET
    title = 'gobi machurian',
    description = 'indian veg starter'
WHERE
    id = 1;

/*Delete a meal with any id, fx 1*/
DELETE FROM meal
WHERE id = 1;

--reservation queries
/*Add a new reservation*/
INSERT INTO reservation (`no_of_guests`, `meal_id`, `contact_phonenumber`, `contact_name`)
    VALUES ('5', '1', '45897890', 'mark'), ('8', '1', '45897890', 'Kone');

/*Get a reservation with any id, fx 1*/
SELECT
    *
FROM
    reservation
WHERE
    id = 1;

/*Update a review with any id, fx 1. Update any attribute fx the title or multiple attributes*/
UPDATE
    reservation
SET
    no_of_guests = '3',
    contact_phonenumber = '56789034'
WHERE
    id = 3;

/*Delete a review with any id, fx 1*/
DELETE FROM reservation
WHERE id = 3;

/*Get all reviews*/
SELECT
    *
FROM
    review;

/*Add a new review*/
insert into review (`title`, `description`, `meal_id`, `stars`)
    values ('good', 'tasty food', '1', '3');

/*Get a review with any id, fx 1*/
SELECT
    *
FROM
    review
WHERE
    id = 3;

/*Update a review with any id, fx 1. Update any attribute fx the title or multiple attributes*/
UPDATE
    review
SET
    title = 'Palak curry',
    stars = '5'
WHERE
    id = 3;

/*Delete a review with any id, fx 1*/
DELETE FROM review
WHERE id = 1;

---Additional queries
/*Get meals that has a price smaller than a specific price fx 90*/
SELECT
    *
FROM
    meal
WHERE
    price > 120;

/*Get meals that still has available reservations*/
SELECT
    meal.title,
    meal.max_reservations,
    reservation.no_of_guests
FROM
    meal
    JOIN reservation ON meal.id = reservation.meal_id
WHERE
    meal.max_reservations > reservation.no_of_guests;

SELECT
    *
FROM
    reservation;

/*Get meals that partially match a title. Rød grød med will match the meal with the title Rød grød med fløde*/
SELECT
    title
FROM
    meal
WHERE
    title LIKE "%chicken curry%";

/*Get meals that has been created between two dates*/
SELECT
    *
FROM
    meal
WHERE
    created_date BETWEEN '2010-08-08'
    AND '2021-03-20';

/*Get only specific number of meals fx return only 5 meals*/
SELECT
    *
FROM
    meal
LIMIT 5;

/*Get the meals that have good reviews*/
SELECT
    meal.title,
    review.stars
FROM
    meal
    JOIN review ON meal.id = review.meal_id
WHERE
    review.stars > 4;

/*Get reservations for a specific meal sorted by created_date */
SELECT
    meal.title,
    meal.created_date,
    reservation.contact_name
from
    meal
    JOIN reservation ON meal.id = reservation.meal_id
WHERE
    meal.title = 'chicken curry'
ORDER BY
    created_date;

/*Sort all meals by average number of stars in the reviews*/
SELECT
    meal.title,
    AVG(review.stars) as Avg_stars
FROM
    meal
    JOIN review ON meal.id = review.meal_id
GROUP BY
    meal.id
ORDER BY
    Avg_stars DESC;
