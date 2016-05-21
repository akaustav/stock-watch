window.onload = function() {

  //document.getElementById('main').addEventListener('click', bodyclick, false);
  document.getElementById('stock-lookup').addEventListener('click', fetchStockDetails, false);

  /* --- Event Handlers --- */
  /*function bodyclick(event) {
    event.preventDefault();
    event.stopPropagation ? event.stopPropagation() : (event.cancelBubble=true);
    alert('Outer!');
  }*/

  function fetchStockDetails(event) {
    event.preventDefault();
    event.stopPropagation ? event.stopPropagation() : (event.cancelBubble=true);
    var stockSymbol = document.getElementById('stock-symbol-input').value;
    alert(stockSymbol);
  }
};