Kuflink-test github repo: https://github.com/Aderex0/kuflink-test

Please CD into kuflink-test folder.

The example is done with JSON server to mimic an API.
https://github.com/typicode/json-server

To run JSON server run: yarn server

You might need to install the JSON server first by running

npm install -g json-server

Then run:

yarn start

to view the example.

There are a few interactions added, with action and social buttons. The website is build with mobile first approach in mind.
Testing is done with cypress for end to end testing and reat-testing-library for unit testing

run

yarn e2e

or

yarn test

to run the tests
