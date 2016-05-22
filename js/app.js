$(function() {

  // Lookup Stock button click handler
  $('button#stock-lookup').on('click', fetchStockDetails);

  /* --- Event Handlers --- */
  function fetchStockDetails(event) {
    // Prevent the form submit action
    event.preventDefault();

    // Cancel Event Bubbling
    event.stopPropagation ? event.stopPropagation() : (event.cancelBubble=true);

    // Input
    var symbol = $('input#stock-symbol-input').val();

    // Setting for the API call
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

    // Make the AJAX call
    $.ajax(url, settings)
    .done(function(response) {
      // Select DOM containers into variables
      var stockDetailContainer = $('#stock-details');
      var stockChartContainer = $('#stock-chart');

      // Select DOM elements into variables
      var stockSymbolElement = $('#stock-symbol');
      var stockCurrencyElement = $('#stock-currency');
      var stockLastTradePriceElement = $('#stock-last-traded-price');
      var stockNameElement = $('#stock-name');
      var stockChangeElement = $('#stock-change');
      var stockChangeValueElement = $('#stock-change-value');
      var stockLastTradedDateElement = $('#stock-last-traded-date');

      // Set data from response of the API call into variables
      var quote = response.query.results.quote;
      var stockSymbol = quote.Symbol;
      var stockCurrency = quote.Currency;
      var stockLastTradePrice = quote.LastTradePriceOnly;
      var stockName = quote.Name;
      var stockChange = Number.parseFloat(quote.Change);
      var stockChangePositive = (stockChange >= 0);
      var stockLastTradedDate = quote.LastTradeDate;

      // Modify DOM elements according to corresponding data received from the API call
      stockSymbolElement.text(stockSymbol);
      stockCurrencyElement.text(stockCurrency);
      stockLastTradePriceElement.text(stockLastTradePrice);
      stockNameElement.text(stockName);

      stockChangeElement.removeClass('text-danger text-success')
      if (stockChangePositive) {
        stockChangeElement.addClass('text-success');
      } else {
        stockChangeElement.addClass('text-danger');
      }

      stockChangeValueElement.text(stockChange);


      stockLastTradedDateElement.text(stockLastTradedDate);

      // Chart Settings
      var chartSettings = {
        fill: true,
        lineTension: 0.5,
        borderCapStyle: 'round',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderWidth: 1,
        pointHoverRadius: 6,
        pointHoverBorderWidth: 2,
        pointRadius: 5,
        pointHitRadius: 10
      };

      var chart1 = {};
      chart1.color      = 'rgba(161,186,203,1)';
      chart1.colorLight = 'rgba(161,186,203,0.4)';
      chart1.colorHover = 'rgba(220,220,220,1)';

      var chart2 = {};
      chart2.color      = 'rgba(219,219,219,1)';
      chart2.colorLight = 'rgba(219,219,219,0.4)';
      chart2.colorHover = '#fff';

      // Draw the Chart
      var stockChart = new Chart(stockChartContainer, {
        type: 'line',
        data: {
          labels: ['Low', 'Last Traded', 'High'],
          datasets: [
            $.extend({}, chartSettings, {
              label:                     'Days Range',
              backgroundColor:           chart1.colorLight,
              borderColor:               chart1.color,
              pointBorderColor:          chart1.color,
              pointBackgroundColor:      chart1.color,
              pointHoverBackgroundColor: chart1.color,
              pointHoverBorderColor:     chart1.colorHover,
              data:                      [216.35, 220.28, 220.55]
            }),
            $.extend({}, chartSettings, {
              label:                     'Days Range 2',
              backgroundColor:           chart2.colorLight,
              borderColor:               chart2.color,
              pointBorderColor:          chart2.color,
              pointBackgroundColor:      chart2.color,
              pointHoverBackgroundColor: chart2.color,
              pointHoverBorderColor:     chart2.colorHover,
              data:                      [140, 220.28, 280]
            })
          ]
        }
      });

      // Display the Stock Details and Stock Chart container
      stockDetailContainer.removeClass('hidden');
      stockChartContainer.removeClass('hidden');
    })
    .fail(function() {
      alert( "error" );
    })
    .always(function() {
      //alert( "complete" );
    });
  }

});