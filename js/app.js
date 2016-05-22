$(function() {

  // Lookup Stock button click handler
  $('button#stock-lookup').on('click', fetchStockDetails);

  /* --- Event Handlers --- */
  function fetchStockDetails(event) {
    event.preventDefault();
    event.stopPropagation ? event.stopPropagation() : (event.cancelBubble=true);
    var symbol = $('input#stock-symbol-input').val();

    var url = 'http://query.yahooapis.com/v1/public/yql';
    var query = 'select * from yahoo.finance.quotes where symbol in ("' + symbol + '")';
    var settings = {
      method: 'GET',
      dataType: 'json',
      data: {
        format: 'json',
        env: 'http://datatables.org/alltables.env',
        q: query
      }
    };

    $.ajax(url, settings)
    .done(function(response) {
      // Select DOM elements into variables
      var stockDetailContainer = $('#stock-details');
      var stockSymbolElement = $('#stock-symbol');
      var stockValueElement = $('#stock-value');
      var stockNameElement = $('#stock-name');
      var stockChangeElement = $('#stock-change');
      var stockLastTradedElement = $('#stock-last-traded');

      // Set data from response of the API call into variables
      var stockSymbol = response.query.results.quote.Symbol;
      var stockValue = response.query.results.quote.LastTradePriceOnly;
      var stockName = response.query.results.quote.Name;
      var stockChange = response.query.results.quote.Change;
      var stockLastTraded = response.query.results.quote.LastTradeDate;

      // Set the text node of the selected DOM elements to the corresponding data from the API call
      stockSymbolElement.text(stockSymbol);
      stockValueElement.text(stockValue);
      stockNameElement.text(stockName);
      stockChangeElement.text(stockChange);
      stockLastTradedElement.text(stockLastTraded);

      // Display the Stock Details container
      stockDetailContainer.removeClass('hidden');
    })
    .fail(function() {
      alert( "error" );
    })
    .always(function() {
      //alert( "complete" );
    });
  }

});