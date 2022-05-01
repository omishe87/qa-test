# qa-test

All task

To add user's credentials change /cypress/fixture/user.json

--Run commands--
To open Cypress test runner:
npx cypress open
To run tests in docker (https://www.cypress.io/blog/2019/05/02/run-cypress-with-a-single-docker-command/):
docker run -it -v ${PWD}:/e2e -w /e2e cypress/included:9.6.0
Options for docker:
--browser chrome
--browser firefox
