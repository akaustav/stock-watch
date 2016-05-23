# Stock Watch
The app which takes in a stock symbol and provides data from the Yahoo Finance API. It provides the following details:

* Stock Symbol
* Stock Currency
* Last Traded Price of the stock
* Stock Name
* Stock Change Indicator
* Change in value of the stock
* Last Traded Date of the stock
* Charts showing
  * Day's Range of the stock
  * Year Range of the stock

## Git Commands:

1. Create a repository on GitHub.
1. Create a folder on your workstation.
1. git init
1. git add README.md
1. git status
1. git commit -m "Initial Commit"
1. git remote add origin https://github.com/akaustav/stock-watch.git
1. git push -u origin master
1. change code
1. git status
1. git commit -m "More changes"
1. git push -u origin master
1. Rinse and Repeat

## Features:

- [x] Stock change indicator arrows and colors
- [x] Dynamic charts - clicking on the legend toggles visibility the corresponding line graph
- [x] API call loading indicator

## TODO and Issues:

- [ ] Can't handle unknown stocks.
- [ ] Accepts blank string as symbol.
