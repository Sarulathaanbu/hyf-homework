/*Part 1: Working with tasks*/
use `hyf_lesson1`;
/*Add a task with these attributes: title, description, created, updated, due_date, status_id, */
INSERT INTO task(title, description, created, updated, due_date, status_id, user_id)
VALUES ('DO homework',NULL,'2021-08-01 19:39:16','2021-08-02 20:39:16','2021-08-06', 2 ,1);

/*Change the title of a task*/
UPDATE task
SET title = "Database homework"
WHERE id = 1;

/*Change a task due date*/
UPDATE task
SET due_date ='2021-08-05'
WHERE id = 1;

/*Change a task status*/
UPDATE task
SET status_id = 1
WHERE id = 1;

/*Mark a task as complete*/
UPDATE task
SET status_id = 3
WHERE id = 1;

/*Delete a task*/

DELETE FROM task
WHERE id = 1;

--Part 2: School database
  --Create a new database
  CREATE DATABASE School;
SET NAMES utf8mb4;
 -- containing the following tables:
 --Class: with the columns: id, name, begins (date), ends (date)
 CREATE TABLE
 `class`
 (
   `id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
   `name` VARCHAR(255) NOT NULL,
   `begins`DATETIME NOT NULL,
   `ends` DATETIME NOT NULL
 )ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

  --Student: with the columns: id, name, email,
   --phone, class_id (foreign key)
 CREATE TABLE
 `student`
 (
   `id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
   `name` VARCHAR(255) NOT NULL,
   `email`VARCHAR(255) NOT NULL,
   `phone`VARCHAR(255) NULL,
   `class_id` INT(10) UNSIGNED NOT NULL,
    CONSTRAINT `fk_class` FOREIGN KEY (`class_id`)
    REFERENCES `class` (`id`)
    ON DELETE CASCADE ON UPDATE CASCADE
    )ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
  --Create an index on the name column of the student table.
  CREATE INDEX idx_name ON student(name);
  --Add a new column to the class table named status which can only have the
  --following values: not-started, ongoing, finished.
  ALTER TABLE class ADD status enum('not-started','ongoing','finished');


  /*Part 3: More Queries*/
use `hyf_lesson2`;

/*Get all the tasks assigned to users whose email ends in @spotify.com*/
SELECT
user.email,
task.title,
task.description
FROM (task JOIN user_task ON task.id = user_task.task_id)
JOIN user ON user.id = user_task.user_id
where user.email like '%@spotify.com';

/*Get all the tasks for 'Donald Duck' with status 'Not started'*/
SELECT *
FROM task
JOIN user_task on user_task.task_id = task.id
JOIN user ON user_task.user_id = user.id
JOIN status ON task.status_id =status.id
WHERE user.name LIKE "Donald Duck" AND
status.name LIKE "Not started";

/*Get all the tasks for 'Maryrose Meadows' that were created in september (hint: month(created)=month_number)*/

SELECT *
FROM task
JOIN user_task ON user_task.task_id = task.id
JOIN user ON user.id = user_task.user_id
WHERE user.name LIKE "Maryrose Meadows" AND month(task.created) = 9;

/*Find how many tasks where created in each month,
-- e.g. how many tasks were created in october, how many tasks were created in november, etc. (hint: use group by)*/

SELECT count(task.id) as TaskCount, month(task.created) as Month
FROM task GROUP BY month(task.created);

-- Part 4

CREATE DATABASE College;
USE College;
CREATE TABLE `student`
(
  `id` INT(10) UNSIGNED PRIMARY KEY,
  `fullname` varchar(255) NOT NULL,
   `course` varchar(255),
   `dept` varchar(255)
);
CREATE TABLE `department`
(
  `id` INT(10) UNSIGNED PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(255) NOT NULL
);
CREATE TABLE `staff`
(
  `id` INT(10) UNSIGNED PRIMARY KEY,
  `fullname` varchar(255) NOT NULL,
   `course` varchar(255)
);
CREATE TABLE `course`
(
  `id` INT(10) UNSIGNED PRIMARY KEY AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `dept_id` INT(10) NOT NULL
);
