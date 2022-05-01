# qa-test

This project checks, that amount of click is +1 after jumping to default url

Tests are devided to two scenarios in /cypress/integration/countclicks.feature:

1)Look for current amount of clicks

2)New click was added in report after jumping to generated url

Login functionality is added to /cypress/support/commands.js + adding new comand in /cypress/support/step_definitions/common_steps.js with tag @loggedIn

Code for each step is in /cypress/support/step_definitions/countclicks.js

To add user's credentials change /cypress/fixture/user.json

## **Run commands**

###### **To install Cypress**

npm i

###### **To open Cypress test runner:**

npx cypress open

###### **To run tests in docker** (https://www.cypress.io/blog/2019/05/02/run-cypress-with-a-single-docker-command/):

docker run -it -v ${PWD}:/e2e -w /e2e cypress/included:9.6.0

###### Options for docker:

--browser chrome

--browser firefox
