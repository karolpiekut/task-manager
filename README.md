# task-manager

task-manager prototype

## investigate:

- data validation
- investigate react
- prompt window replacement
- react?
- app design

app sections:

---

- PLAN 125px wide
- TODAY
- FUTURE
- OVERDUE
- DONE

## user stories

task status:

- PLAN: does not have a date assigned, status is "not started"
- TODAY: date assigned "today", status is "in progress"
- FUTURE: if date is set to a future date, the task status is automatically set to "future"
- OVERDUE: if date is < today, status is automatically set to "overdue" and tasks are placed in this location
- DONE: tasks are placed here once status is changed to "done", new date gets set with the value of today when the status is changed to "done"

create a task:

1. click on the plus icon
2. add task name
3. add optional task text
4. add optional due date
5. add optional task status

review tasks in "not started" section:

1. under "not started" section see all tasks that have "not started" status
2. plan task's completion date, if date > today, tasks goes to the future list
3. change tasks status to "in progress" or date to today to put it in the "today" section
4. complete today's tasks to place them in the done section

review tasks in "overdue" section:

1. change date to today (...work in progress...)

Credentials:

- some of the post-it CSS comes from:
  https://mentormate.com/blog/css-postit-note/#:~:text=Making%20the%20Post%2Dit,be%20built%20around%20your%20content
- chalkboard pic:
  https://unsplash.com/photos/grayscale-photo-of-a-land-zcx5ztIjQAM
