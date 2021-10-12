-- Find out how many tasks are in the task table
select
    COUNT(id)
FROM
    task;

-- Find out how many tasks in the task table do not have a valid due date
SELECT
    COUNT(id)
from
    task
WHERE
    due_date is Null;

-- Find all the tasks that are marked as done
SELECT
    *
FROM
    task
WHERE
    status_id = "Done";

-- Find all the tasks that are not marked as done
SELECT
    *
FROM
    task
WHERE
    status_id != "Done";

-- Get all the tasks, sorted with the most recently created first
SELECT
    *
FROM
    task
ORDER BY
    created ASC;

-- Get the single most recently created task
SELECT
    *
FROM
    task
ORDER BY
    created ASC
LIMIT 1;

-- Get the title and due date of all tasks where the title or description contains database
SELECT
    title,
    due_date
from
    task
where
    title like "%database%"
    or description like "%database%";

-- Get the title and status (as text) of all tasks
SELECT
    title,
    status.name
FROM
    task
    JOIN status ON task.status_id = status.id;

-- Get the name of each status, along with a count of how many tasks have that status
SELECT
    status.name,
    COUNT(task.id)
FROM
    task
    JOIN status ON task.status_id = status.id
GROUP BY
    task.status_id;

-- Get the names of all statuses, sorted by the status with most tasks first
SELECT
    status.name,
    COUNT(task.id)
FROM
    task
    JOIN status on task.status_id = status.id
GROUP BY
    task.status_id
ORDER BY
    COUNT(task.id)
    DESC;
