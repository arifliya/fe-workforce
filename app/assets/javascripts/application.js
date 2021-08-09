/* global $ */

// Warn about using the kit in production
if (window.console && window.console.info) {
  window.console.info('GOV.UK Prototype Kit - do not use for production')
}

$(document).ready(function () {
  window.GOVUKFrontend.initAll()
});


// Back button code
$('#backLink').click(function (event) {
  event.preventDefault()
  history.back(1)
});
//********************** */


// Adding numbers on gov-04.html
var numberOne = parseInt($('#staffGovernors').html());
var numberTwo = parseInt($('#studentGovernors').html());
var numberThree = parseInt($('#independantGovernors').html());
var numberFour = parseInt($('#parentGovernors').html());

var total = numberOne + numberTwo + numberThree + numberFour

$('#totalGovernors').text('');
$('#totalGovernors').append(total);
//*********************** */


