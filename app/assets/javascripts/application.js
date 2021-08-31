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


// Adding numbers on gov-03.html

$('#continueTotal').click(function(e){
  $(".form input[type=text]").each(function () {  
    
    if(isNaN(this.value)) {
      $('#gov-03-error').removeClass('hidden');
      $('#errorMessageNumber').show();
      $(this).addClass('govuk-input--error');
      var ids = $(this).attr('id');
      $('#errorMessageNumber').attr("href", '#' + ids);
      $(this).parent().addClass('govuk-form-group--error')
      $(this).prev('span.govuk-error-message').removeClass('hidden');
      window.scrollTo(0, 0);
      e.preventDefault()
    } else {
      $(this).removeClass('govuk-input--error');
      $(this).parent().removeClass('govuk-form-group--error')
      $(this).prev('span.govuk-error-message').addClass('hidden');
      $('.form').attr('action', "gov-04")

    }   
  });
  
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
//************************/


// Show an error if none of the radio buttons are checked after clicking CTA for gov-04 page

$('#gov04Button').click(function() {
  if (!$("input[name='correct-number']:checked").val()) {
    $('#gov04CheckRadio').removeClass('hidden');
    $('.govuk-form-group').addClass('govuk-form-group--error');
    $('#gov-04-error-for-input').removeClass('hidden');
    window.scrollTo(0, 0);
    return false;
  }
});

$('.govuk-radios').change(function(){
  $('#gov04CheckRadio').addClass('hidden');
    $('.govuk-form-group').removeClass('govuk-form-group--error');
    $('#gov-04-error-for-input').addClass('hidden');
});
//************************/


// Check the value on button click and proceed to the next page for gov-05 page
var male = parseInt($('#male').val());
    female = parseInt($('#female').val());
    another = parseInt($('#another').val());
    pnts = parseInt($('#pnts').val());
  
var genderTotal = male + female + another + pnts

$("#genderCompButton").click(function(){

  // $(".form input[type=text]").removeClass('govuk-input--error')

  var male = parseInt($('#male').val());
      female = parseInt($('#female').val());
      another = parseInt($('#another').val());
      pnts = parseInt($('#pnts').val());
  
  var genderTotal = male + female + another + pnts

  if (genderTotal !== total) {
    $('#gov-05-error').removeClass('hidden');
    $('#errorMessageTotal').show();
    $('#errorMessageNumber').hide();

    // $('.govuk-error-message').addClass('hidden');
    // $('.govuk-form-group').removeClass('govuk-form-group--error')
    // $('.govuk-input').removeClass('govuk-input--error')
    window.scrollTo(0, 0);
    
    $(".form input[type=text]").each(function () {  
      if(isNaN(this.value)) {
        $('#gov-05-error').removeClass('hidden');
        $('#errorMessageTotal').hide();
        $('#errorMessageNumber').show();
        $(this).addClass('govuk-input--error');
        var ids = $(this).attr('id');
        $('#errorMessageNumber').attr("href", '#' + ids);
        $(this).parent().addClass('govuk-form-group--error')
        $(this).prev('span.govuk-error-message').removeClass('hidden');
        window.scrollTo(0, 0);
      } else {
        $(this).removeClass('govuk-input--error');
        $(this).parent().removeClass('govuk-form-group--error')
        $(this).prev('span.govuk-error-message').addClass('hidden');
      }
    });

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

if (ageTotal !== total) {
  $('#ageComplete').hide();
  $('#ageIncomplete').show();
} 

if (ageTotal == total) {
  $('#ageComplete').show();
  $('#ageIncomplete').hide();
}
//************************/




// Check the value on button click and proceed to the next page for gov-07 page
var disability = parseInt($('#disability').val());
    nodisability = parseInt($('#no-disability').val());
    disabilitypnts = parseInt($('#disability-pnts').val());
  
var disabilityTotal = disability + nodisability + disabilitypnts


$("#disabilityButton").click(function(){
  
  var disability = parseInt($('#disability').val());
      nodisability = parseInt($('#no-disability').val());
      disabilitypnts = parseInt($('#disability-pnts').val());
  
  var disabilityTotal = disability + nodisability + disabilitypnts
  
  if (disabilityTotal !== total) {
    $('#gov-07-error').removeClass('hidden');
      window.scrollTo(0, 0);
    return false;
    
  } else {
    $('.form').attr('action', "gov-08").submit();
  }
});
  
$("#disabilityButtonExit").click(function(){ 
  $('.form').attr('action', "gov-12").submit();
});

if (disabilityTotal !== total) {
  $('#disabilityComplete').hide();
  $('#disabilityIncomplete').show();
} 

if (disabilityTotal == total) {
  $('#disabilityComplete').show();
  $('#disabilityIncomplete').hide();
}
//************************/



// Check the value on button click and proceed to the next page for gov-08 page
var ewsnb = parseInt($('#ewsnb').val());
    irish = parseInt($('#irish').val());
    gypsy = parseInt($('#gypsy').val());
    roma = parseInt($('#roma').val());
    otherWhite = parseInt($('#other-white').val());
    wbc = parseInt($('#wbc').val());
    wba = parseInt($('#wba').val());
    wa = parseInt($('#wa').val());
    otherMixed = parseInt($('#other-mixed').val());
    indian = parseInt($('#indian').val());
    pakistani = parseInt($('#pakistani').val());
    bangladeshi = parseInt($('#bangladeshi').val());
    chinese = parseInt($('#chinese').val());
    otherAsian = parseInt($('#other-asian').val());
    african = parseInt($('#african').val());
    caribbean = parseInt($('#caribbean').val());
    otherBlack = parseInt($('#other-black').val());
    arab = parseInt($('#arab').val());
    otherEthnic = parseInt($('#other-ethnic').val());
    ethnicityPnts = parseInt($('#ethnicity-pnts').val());

var ethnicTotal = ewsnb + irish + gypsy + roma + otherWhite + wbc + wba + wa + otherMixed + indian + pakistani + bangladeshi + chinese + otherAsian + african + caribbean + otherBlack + arab + otherEthnic + ethnicityPnts

$('#ethnicButton').click(function(){

  var ewsnb = parseInt($('#ewsnb').val());
    irish = parseInt($('#irish').val());
    gypsy = parseInt($('#gypsy').val());
    roma = parseInt($('#roma').val());
    otherWhite = parseInt($('#other-white').val());
    wbc = parseInt($('#wbc').val());
    wba = parseInt($('#wba').val());
    wa = parseInt($('#wa').val());
    otherMixed = parseInt($('#other-mixed').val());
    indian = parseInt($('#indian').val());
    pakistani = parseInt($('#pakistani').val());
    bangladeshi = parseInt($('#bangladeshi').val());
    chinese = parseInt($('#chinese').val());
    otherAsian = parseInt($('#other-asian').val());
    african = parseInt($('#african').val());
    caribbean = parseInt($('#caribbean').val());
    otherBlack = parseInt($('#other-black').val());
    arab = parseInt($('#arab').val());
    otherEthnic = parseInt($('#other-ethnic').val());
    ethnicityPnts = parseInt($('#ethnicity-pnts').val());

var ethnicTotal = ewsnb + irish + gypsy + roma + otherWhite + wbc + wba + wa + otherMixed + indian + pakistani + bangladeshi + chinese + otherAsian + african + caribbean + otherBlack + arab + otherEthnic + ethnicityPnts

  
  if (ethnicTotal !== total) {
    $('#gov-08-error').removeClass('hidden');
    
      window.scrollTo(0, 0);
    return false;
    
  } else {
    $('.form').attr('action', "gov-09").submit();
  }

});

$("#ethnicButtonExit").click(function(){ 
  $('.form').attr('action', "gov-12").submit();
});

if (ethnicTotal !== total) {
  $('#ethnicityComplete').hide();
  $('#ethnicityIncomplete').show();
} 

if (ethnicTotal == total) {
  $('#ethnicityComplete').show();
  $('#ethnicityIncomplete').hide();
}

//************************/



// Check the value on button click and proceed to the next page for gov-09 page
var ltoy = parseInt($('#ltoy').val());
    oneToFour = parseInt($('#1to4').val());
    fiveToEight = parseInt($('#5to8').val());
    nineToTwelve = parseInt($('#9to12').val());
    overTwelve = parseInt($('#over12').val());
  
var timeServedTotal = ltoy + oneToFour + fiveToEight + nineToTwelve + overTwelve


$("#timeServedButton").click(function(){
  var ltoy = parseInt($('#ltoy').val());
      oneToFour = parseInt($('#1to4').val());
      fiveToEight = parseInt($('#5to8').val());
      nineToTwelve = parseInt($('#9to12').val());
      overTwelve = parseInt($('#over12').val());
  
var timeServedTotal = ltoy + oneToFour + fiveToEight + nineToTwelve + overTwelve
  
  if (timeServedTotal !== total) {
    $('#gov-09-error').removeClass('hidden');
      window.scrollTo(0, 0);
    return false;
    
  } else {
    $('.form').attr('action', "gov-10").submit();
  }
});
  
$("#timeServedButtonExit").click(function(){ 
  $('.form').attr('action', "gov-12").submit();
});

if (timeServedTotal !== total) {
  $('#timeServedComplete').hide();
  $('#timeServedIncomplete').show();
} 

if (timeServedTotal == total) {
  $('#timeServedComplete').show();
  $('#timeServedIncomplete').hide();
}
//************************/



// if a new total value is put into gov-03 then change the url from gov-04 to gov-04b

  $('#onInputChange :input').change(function() {

    var tot = 0;
    $("form :input").each(function() {
      tot += Number($(this).val());
    });

    $('#totalGovernors').text(tot);

    // if ($('#totalGovernors') !== (total)) {
    //   $('.form').attr('action', "gov-04b");
    // }

  });
//**************************** */



// if staff governors value on gov-12 is blank show incomplete tag otherwise show complete
var staffGov = $('#staffGovernors').html()
  
    if (staffGov == ('')) {
      $('#boardRepComplete').hide();
      $('#boardRepIncomplete').show();
    }
    
    if (staffGov !== ('')) {
      $('#boardRepComplete').show();
      $('#boardRepIncomplete').hide();
    }


    

//*********************** */



// Check the value on button click and proceed to the next page for gov-10 page

var openVacancies = $('#open-vacancies').html();

if (openVacancies == 'no') {
  // $("form :input").each(function() {
  //   $(this).val('');
  // });
 
  $('.summaries').addClass('hide');
} else {
  $('.summaries').removeClass('hide');
}

if (openVacancies == '') {
  $('.summaries').addClass('hide');
  $('#vacancyComplete').hide();
  $('#vacancyIncomplete').show();
} 

if (openVacancies !== '') {
  $('#vacancyComplete').show();
  $('#vacancyIncomplete').hide();
} 

$("#vacancyButtonExit").click(function(){ 
  $('.form').attr('action', "gov-12").submit();
});

//****************** */


// If the board size on gov-12 is blank then show the incomplete tag otherwise show the complete tag
var boardSize = $('#boardSize').html();

if (boardSize == '') {

  $('#boardSizeComplete').hide();
  $('#boardSizeIncomplete').show();
} 

if (boardSize !== '') {
  $('#boardSizeComplete').show();
  $('#boardSizeIncomplete').hide();
} 

//********** */

if ($('#boardRepIncomplete').is(':visible')) {
  // alert('is visible')
  $('#genderGroup').hide()
  $('#ageRangesGroup').hide()
  $('#disabilityGroup').hide()
  $('#ethnicityGroup').hide()
  $('#timeServedGroup').hide()
  $('#vacanciesGroup').hide()
}


