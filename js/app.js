$(function() {

  // Lookup Stock button click handler
  $('button#stock-lookup').on('click', fetchStockDetails);

  /* --- Event Handlers --- */
  function fetchStockDetails(event) {
    event.preventDefault();
    event.stopPropagation ? event.stopPropagation() : (event.cancelBubble=true);
    var stockSymbol = $('input#stock-symbol-input').val();

    var query = 'select * from yahoo.finance.quotes where symbol in ("' + stockSymbol + '")';
    var url = 'http://query.yahooapis.com/v1/public/yql';
    var settings = {
      method: 'GET',
      data: {
        format: 'json',
        env: 'http://datatables.org/alltables.env',
        q: query
      }
    };

    $.ajax(url, settings)
    .done(function() {
      alert( "success" );
    })
    .fail(function() {
      alert( "error" );
    })
    .always(function() {
      alert( "complete" );
    });
  }

});