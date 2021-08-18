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










// Fill any empty inputs with 0s when focussing off each input
$('.form input[type="text"]').blur(function(){
  if(!$(this).val()){
      $(this).val("0");
  } 
  // else{
  //     $(this).removeClass("error");
  // }
});
//*********************** */

// Fill any empty inputs with 0s when clicking on any govuk-button
$('.govuk-button').click(function(){
  $('form input').each(function() {
    if(!$(this).val()){  
      $(this).val("0");
    }
  });
});
//*********************** */


// Check the value on button click and proceed to the next page or not for gov-05 page
var male = parseInt($('#male').val());
    female = parseInt($('#female').val());
    another = parseInt($('#another').val());
    pnts = parseInt($('#pnts').val());
  
var genderTotal = male + female + another + pnts

$("#genderCompButton").click(function(){
  var male = parseInt($('#male').val());
      female = parseInt($('#female').val());
      another = parseInt($('#another').val());
      pnts = parseInt($('#pnts').val());
  
  var genderTotal = male + female + another + pnts

  if (genderTotal !== total) {
    $('#gov-05-error').removeClass('hidden');
    window.scrollTo(0, 0);
    return false;
    
  } else {
    $('.form').attr('action', "gov-06").submit();
  }

});

$("#genderCompButtonExit").click(function(){ 
  $('.form').attr('action', "gov-12").submit();
});

if (genderTotal !== total) {
  $('#genderComplete').hide();
  $('#genderIncomplete').show();
} 

if (genderTotal == total) {
$('#genderComplete').show();
$('#genderIncomplete').hide();
}
//*********************** */

// Check the value on button click and proceed to the next page or not for gov-06 page
$("#ageRangesButton").click(function(){
  var sixteen = parseInt($('#16').val());
      nineteen = parseInt($('#19').val());
      twentyfive = parseInt($('#25').val());
      thirtyfive = parseInt($('#35').val());
      fortyfive = parseInt($('#45').val());
      fiftyfive = parseInt($('#55').val());
      sixtyfive = parseInt($('#65').val());
      seventysix = parseInt($('#76').val());
      seventysix = parseInt($('#76').val());
      agePnts = parseInt($('#age-pnts').val());

  var ageTotal = sixteen + nineteen + twentyfive + thirtyfive + fortyfive + fiftyfive + sixtyfive + seventysix +agePnts

  if (ageTotal !== total) {
    $('#gov-06-error').removeClass('hidden');
      window.scrollTo(0, 0);
    return false;
    
  } else {
    $('.form').attr('action', "gov-07").submit();
  }
});

$("#ageRangeButtonExit").click(function(){ 
  $('.form').attr('action', "gov-12").submit();
});
//*********************** */




