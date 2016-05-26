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


## How to Use:

1. Open the index.html file in a browser.
1. On the text box, input one stock symbol only. Example of stock symbols are: TSLA, IBM, AAPL, MSFT, GOOG, etc.
1. Click the "Lookup Stock" button to get details of the stock for that symbol.
For instance, for AAPL, the CSV will contain data for stocks of Apple Inc as described on the following page at:
http://finance.yahoo.com/q?s=AAPL

Note: The summary data is being generated from the JSON response at Yahoo Finance API end point at this URL:
http://query.yahooapis.com/v1/public/yql

For instance, for the symbol - IBM, I am using the JSON response at the following URL to create the CSV file:
http://query.yahooapis.com/v1/public/yql?env=http:%2F%2Fdatatables.org%2Falltables.env&format=json&q=select+*+from+yahoo.finance.quotes+where+symbol+in+(%22IBM%22)


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
- [ ] Implement the watch list for marking stocks as favourites.