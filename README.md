# musement-challenge
## About the project
- This Project contains some automation code for testing search feature for https://www.musement.com/uk/ 

## About covered test case
I simulated the following steps
- open https://www.musement.com/uk/ ;
- insert “Colosseum”;
- click on “search”;
- ensure that there are experiences returned

Regarding the assertion part, I tried to make an matured asserion, so I simulated the search steps via the UI meanwhile I called the same API that the website call with the same paramter. Hence I compared the results returned by the API with date displayed on the UI so in that test case we covered more than thing, for example the API and the existance of data in search result screen after click in search and also if the number of data displayed on UI is equal to the API.

## Prerequisites of the project
- you need to have the [Chrome](https://www.google.com/chrome/?brand=YTUH&gclid=EAIaIQobChMIqKGnpfWa-wIVYY9oCR2nlwAOEAAYASAAEgLhS_D_BwE&gclsrc=aw.ds) browser installed in your maching
- install [node.js](https://nodejs.org/en/download/), if you are using macOS and you have HomeBrew installed in your mchine just run ```brew install node``` as shown [here](https://changelog.com/posts/install-node-js-with-homebrew-on-os-x)
- more info [here](https://testcafe.io/documentation/402834/guides/basic-guides/install-testcafe)

## How to setup the proejct
- clone the proejct and navigation to the proejct's root directory in the terminal
- run ```npm install --save-dev testcafe```

## How to run the project
- run ```npx testcafe chrome tests/. all```
