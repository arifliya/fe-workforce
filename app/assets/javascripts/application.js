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

// journey path 

var journeyPath = $('#journeyPath').html();

// alert(journeyPath)

if (journeyPath == 'new') {
  $('#startButton').attr('href', 'gov-02');
}


if (journeyPath == 'returning') {
  $('#startButton').attr('href', 'dashboard');

  //************** gov-02 ***************** */
  
  if ($('#boardSize').html() == '') {
    // this is for gov-02  
    $('#boardSize').html('12');
    $('#board-size').val('12');
  }


  //************** gov-03 ***************** */
  
  if ($('#staffGovernors').html() == '') {
    // this is for gov-03  
    $('#staffGovernors').html('1');
    $('#staff-governors').val('1');
  }

  if ($('#studentGovernors').html() == '') {
    // this is for gov-03  
    $('#studentGovernors').html('2');
    $('#student-governors').val('2');
  }

  if ($('#independantGovernors').html() == '') {
    // this is for gov-03  
    $('#independantGovernors').html('3');
    $('#independent-governors').val('3');
  }
  
  if ($('#parentGovernors').html() == '') {
    // this is for gov-03  
    $('#parentGovernors').html('4');
    $('#parent-governors').val('4');
  }


  //************** gov-04 ***************** */
  var numberOne = parseInt($('#staffGovernors').html());
  var numberTwo = parseInt($('#studentGovernors').html());
  var numberThree = parseInt($('#independantGovernors').html());
  var numberFour = parseInt($('#parentGovernors').html());

  var total = numberOne + numberTwo + numberThree + numberFour


  if (total == '10') {
    // $('.govuk-warning-text').addClass('hidden');
  } else {
    $('.govuk-warning-text').removeClass('hidden');
    $('.new-text').removeClass('hidden');
  }

  
  //************** gov-05 ***************** */
  
  if ($('#male').val() == '' && total == '10') {
    // this is for gov-05 
    $('#maleHtml').html('3');
    $('#male').val('3');
  } 

  if ($('#female').val() == '' && total == '10') {
    // this is for gov-05 
    $('#femaleHtml').html('2');
    $('#female').val('2');
  } 

  if ($('#another').val() == '' && total == '10') {
    // this is for gov-05 
    $('#anotherHtml').html('3');
    $('#another').val('3');
  } 

  if ($('#pnts').val() == '' && total == '10') {
    // this is for gov-05 
    $('#pntsHtml').html('2');
    $('#pnts').val('2');
  } 

  

  
  //************** gov-06 ***************** */

  if ($('#16').val() == '' && total == '10') {
    // this is for gov-06 
    $('#16Html').html('1');
    $('#16').val('1');
  }
  
  if ($('#19').val() == '' && total == '10') {
    // this is for gov-06 
    $('#19Html').html('0');
    $('#19').val('0');
  }
  
  if ($('#25').val() == '' && total == '10') {
    // this is for gov-06 
    $('#25Html').html('3');
    $('#25').val('3');
  }
  
  if ($('#35').val() == '' && total == '10') {
    // this is for gov-06 
    $('#35Html').html('2');
    $('#35').val('2');
  }
  
  if ($('#45').val() == '' && total == '10') {
    // this is for gov-06 
    $('#45Html').html('1');
    $('#45').val('1');
  }
  
  if ($('#55').val() == '' && total == '10') {
    // this is for gov-06 
    $('#55Html').html('3');
    $('#55').val('3');
  }
  
  if ($('#65').val() == '' && total == '10') {
    // this is for gov-06 
    $('#65Html').html('0');
    $('#65').val('0');
  }
  
  if ($('#76').val() == '' && total == '10') {
    // this is for gov-06 
    $('#76Html').html('0');
    $('#76').val('0');
  }
  
  if ($('#age-pnts').val() == '' && total == '10') {
    // this is for gov-06 
    $('#agePntsHtml').html('0');
    $('#age-pnts').val('0');
  }


  //************** gov-07 ***************** */

  if ($('#disability').val() == '' && total == '10') {
    // this is for gov-07 
    $('#disabilityHtml').html('1');
    $('#disability').val('1');
  }
  
  if ($('#no-disability').val() == '' && total == '10') {
    // this is for gov-07 
    $('#noDisabilityHtml').html('7');
    $('#no-disability').val('7');
  }
  
  if ($('#disability-pnts').val() == '' && total == '10') {
    // this is for gov-07 
    $('#disabilityPntsHtml').html('2');
    $('#disability-pnts').val('2');
  }


  //************** gov-08 ***************** */

  if ($('#ewsnb').val() == '' && total == '10') {
    // this is for gov-08 
    $('#ewsnbHtml').html('2');
    $('#ewsnb').val('2');
  }
  
  if ($('#irish').val() == '' && total == '10') {
    // this is for gov-08 
    $('#irishHtml').html('1');
    $('#irish').val('1');
  }
  
  if ($('#gypsy').val() == '' && total == '10') {
    // this is for gov-08 
    $('#gypsyHtml').html('0');
    $('#gypsy').val('0');
  }
  
  if ($('#roma').val() == '' && total == '10') {
    // this is for gov-08 
    $('#romaHtml').html('0');
    $('#roma').val('0');
  }
  
  if ($('#other-white').val() == '' && total == '10') {
    // this is for gov-08 
    $('#otherWhiteHtml').html('0');
    $('#other-white').val('0');
  }
  
  
  if ($('#wbc').val() == '' && total == '10') {
    // this is for gov-08 
    $('#wbcHtml').html('0');
    $('#wbc').val('0');
  }
  if ($('#wba').val() == '' && total == '10') {
    // this is for gov-08 
    $('#wbaHtml').html('2');
    $('#wba').val('2');
  }
  if ($('#wa').val() == '' && total == '10') {
    // this is for gov-08 
    $('#waHtml').html('0');
    $('#wa').val('0');
  }
  if ($('#other-mixed').val() == '' && total == '10') {
    // this is for gov-08 
    $('#otherMixedHtml').html('1');
    $('#other-mixed').val('1');
  }
  
  if ($('#indian').val() == '' && total == '10') {
    // this is for gov-08 
    $('#indianHtml').html('2');
    $('#indian').val('2');
  }
  if ($('#pakistani').val() == '' && total == '10') {
    // this is for gov-08 
    $('#pakistaniHtml').html('1');
    $('#pakistani').val('1');
  }
  if ($('#bangladeshi').val() == '' && total == '10') {
    // this is for gov-08 
    $('#bangladeshiHtml').html('0');
    $('#bangladeshi').val('0');
  }
  if ($('#chinese').val() == '' && total == '10') {
    // this is for gov-08 
    $('#chineseHtml').html('0');
    $('#chinese').val('0');
  }
  if ($('#other-asian').val() == '' && total == '10') {
    // this is for gov-08 
    $('#otherAsianHtml').html('0');
    $('#other-asian').val('0');
  }
  
  if ($('#african').val() == '' && total == '10') {
    // this is for gov-08 
    $('#africanHtml').html('1');
    $('#african').val('1');
  }
  if ($('#caribbean').val() == '' && total == '10') {
    // this is for gov-08 
    $('#caribbeanHtml').html('0');
    $('#caribbean').val('0');
  }
  if ($('#other-black').val() == '' && total == '10') {
    // this is for gov-08 
    $('#otherBlackHtml').html('0');
    $('#other-black').val('0');
  }
  
  if ($('#arab').val() == '' && total == '10') {
    // this is for gov-08 
    $('#arabHtml').html('0');
    $('#arab').val('0');
  }
  if ($('#other-ethnic').val() == '' && total == '10') {
    // this is for gov-08 
    $('#otherEthnicHtml').html('0');
    $('#other-ethnic').val('0');
  }
  
  if ($('#ethnicity-pnts').val() == '' && total == '10') {
    // this is for gov-08 
    $('#ethnicityPntsHtml').html('0');
    $('#ethnicity-pnts').val('0');
  }
  
  
  if ($('#ltoy').val() == '' && total == '10') {
    // this is for gov-08 
    $('#ltoyHtml').html('0');
    $('#ltoy').val('0');
  }
  if ($('#1to4').val() == '' && total == '10') {
    // this is for gov-08 
    $('#1to4Html').html('4');
    $('#1to4').val('4');
  }
  if ($('#5to8').val() == '' && total == '10') {
    // this is for gov-08 
    $('#5to8Html').html('3');
    $('#5to8').val('3');
  }
  if ($('#9to12').val() == '' && total == '10') {
    // this is for gov-08 
    $('#9to12Html').html('2');
    $('#9to12').val('2');
  }
  if ($('#over12').val() == '' && total == '10') {
    // this is for gov-08 
    $('#over12Html').html('1');
    $('#over12').val('1');
  }
  if ($('#open-vacancies').html() == '') {
    // this is for gov-08 
    $('#open-vacancies').html('yes');
  }
  
  
}

//******************* */


// Adding numbers on gov-03.html

$('#continueTotal').click(function(e){
  $(".form input[type=text]").each(function () {  
    
    if(isNaN(this.value)) {
      $('#gov-error').removeClass('hidden');
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

$('.totalGovernors').text('');
$('.totalGovernors').append(total);

//*********************** */


// Fill any empty inputs with 0s when focussing off each input
$('.form input[type="text"]').blur(function(){
  if(!$(this).val()){
      $(this).val("0");
  } 
  
});
//*********************** */

// Fill any empty inputs with 0s when clicking on any govuk-button



$('.govuk-button').click(function(e){

  $('form input').each(function() {
    if(!$(this).val()){  
      $(this).val("0");
    }
  });
});


//************************/


// Show an error if none of the radio buttons are checked after clicking CTA for gov-04 page

$('#govButtonForRadios').click(function() {
  if (!$("input[name='correct-number']:checked").val()) {
    $('#govCheckRadioError').removeClass('hidden');
    $('.govuk-form-group').addClass('govuk-form-group--error');
    $('#gov-error-for-radios').removeClass('hidden');
    window.scrollTo(0, 0);
    return false;
  }
});

//************************/


// Check the value on button click and proceed to the next page for gov-03 page







// Check the value on button click and proceed to the next page for gov-05 page
var male = parseInt($('#male').val());
    female = parseInt($('#female').val());
    another = parseInt($('#another').val());
    pnts = parseInt($('#pnts').val());
  
var genderTotal = male + female + another + pnts

$("#genderCompButton").click(function(e){

  var male = parseInt($('#male').val());
      female = parseInt($('#female').val());
      another = parseInt($('#another').val());
      pnts = parseInt($('#pnts').val());
  
  var genderTotal = male + female + another + pnts

  
  if (genderTotal !== total) {
    $('#gov-error').removeClass('hidden');
    $('#errorMessageTotal').show();
    $('#errorMessageNumber').hide();

    $('.custom-error-group').addClass('govuk-form-group--error');
    $('#groupInputErrorMessage').removeClass('hide');
    
    window.scrollTo(0, 0);
    
    $(".form input[type=text]").each(function () {  

      if(isNaN(this.value)) {

        $('.custom-error-group').removeClass('govuk-form-group--error');  // if both errors need to display simultaneously remove this line
        $('#groupInputErrorMessage').addClass('hide');  // if both errors need to display simultaneously remove this line

        $('#gov-error').removeClass('hidden');
        $('#errorMessageTotal').hide(); // if both errors need to display simultaneously remove this line 
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

    e.preventDefault();
    
  } 

});


$("#genderCompButtonExit").click(function(e){ 

  var male = parseInt($('#male').val());
      female = parseInt($('#female').val());
      another = parseInt($('#another').val());
      pnts = parseInt($('#pnts').val());

  var genderTotal = male + female + another + pnts


  if (genderTotal !== total) {
    
    $("#genderCompButton").click();
    e.preventDefault()

  } else {

    $('.form').attr('action', "gov-12")
  }

});


$('#genderTotalInput').val(genderTotal);

if (genderTotal !== total) {
  $('#genderComplete').hide();
  $('#genderNotStarted').hide();
  $('#genderIncomplete').show();
} 

if ($('#genderTotalInput').val() == 'NaN') {
  $('#genderComplete').hide();
  $('#genderNotStarted').show();
  $('#genderIncomplete').hide();
} 

if (journeyPath == 'returning' && $('#genderTotalInput').val() == 'NaN'){
  $('#genderComplete').hide();
  $('#genderNotStarted').hide();
  $('#genderIncomplete').show();
}

if (genderTotal == total) {
  $('#genderComplete').show();
  $('#genderNotStarted').hide();
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

$("#ageRangesButton").click(function(e){

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
    $('#gov-error').removeClass('hidden');
    $('#errorMessageTotal').show();
    $('#errorMessageNumber').hide();

    $('.custom-error-group').addClass('govuk-form-group--error');
    $('#groupInputErrorMessage').removeClass('hide');

      window.scrollTo(0, 0);


      $(".form input[type=text]").each(function () {  

        if(isNaN(this.value)) {

          $('.custom-error-group').removeClass('govuk-form-group--error');
          $('#groupInputErrorMessage').addClass('hide');

          $('#gov-error').removeClass('hidden');
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

    e.preventDefault();
    
  } 
  
});


$("#ageRangeButtonExit").click(function(e){ 

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
    
    $("#ageRangesButton").click();
    e.preventDefault()

  } else {

    $('.form').attr('action', "gov-12")
  }

});

$('#ageTotalInput').val(ageTotal);


if (ageTotal !== total) {
  $('#ageComplete').hide();
  $('#ageNotStarted').hide();
  $('#ageIncomplete').show();
} 

if ($('#ageTotalInput').val() == 'NaN') {
  $('#ageComplete').hide();
  $('#ageNotStarted').show();
  $('#ageIncomplete').hide();
} 

if (journeyPath == 'returning' && $('#ageTotalInput').val() == 'NaN'){
  $('#ageComplete').hide();
  $('#ageNotStarted').hide();
  $('#ageIncomplete').show();
}

if (ageTotal == total) {
  $('#ageComplete').show();
  $('#ageNotStarted').hide();
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
    $('#gov-error').removeClass('hidden');
    $('#errorMessageTotal').show();
    $('#errorMessageNumber').hide();

    $('.custom-error-group').addClass('govuk-form-group--error');
    $('#groupInputErrorMessage').removeClass('hide');

      window.scrollTo(0, 0);

      $(".form input[type=text]").each(function () {  

        if(isNaN(this.value)) {

          $('.custom-error-group').removeClass('govuk-form-group--error');
          $('#groupInputErrorMessage').addClass('hide');

          $('#gov-error').removeClass('hidden');
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
    
  } 
  
});
  
$("#disabilityButtonExit").click(function(){ 
  $('.form').attr('action', "gov-12").submit();
});


$('#disabilityTotalInput').val(disabilityTotal);

if (disabilityTotal !== total) {
  $('#disabilityComplete').hide();
  $('#disabilityNotStarted').hide();
  $('#disabilityIncomplete').show();
} 

if ($('#disabilityTotalInput').val() == 'NaN') {
  $('#disabilityComplete').hide();
  $('#disabilityNotStarted').show();
  $('#disabilityIncomplete').hide();
}  

if (journeyPath == 'returning' && $('#disabilityTotalInput').val() == 'NaN') {
  $('#disabilityComplete').hide();
  $('#disabilityNotStarted').hide();
  $('#disabilityIncomplete').show();
}  

if (disabilityTotal == total) {
  $('#disabilityComplete').show();
  $('#disabilityNotStarted').hide();
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
    $('#gov-error').removeClass('hidden');
    $('#errorMessageTotal').show();
    $('#errorMessageNumber').hide();

    $('.custom-error-group').addClass('govuk-form-group--error');
    $('#groupInputErrorMessage').removeClass('hide');
    
      window.scrollTo(0, 0);

      $(".form input[type=text]").each(function () {  

        if(isNaN(this.value)) {

          $('.custom-error-group').removeClass('govuk-form-group--error');
          $('#groupInputErrorMessage').addClass('hide');

          $('#gov-error').removeClass('hidden');
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
    
  } 
  

});

$("#ethnicButtonExit").click(function(){ 
  $('.form').attr('action', "gov-12").submit();
});


$('#ethnicityTotalInput').val(ethnicTotal);

if (ethnicTotal !== total) {
  $('#ethnicityComplete').hide();
  $('#ethnicityNotStarted').hide();
  $('#ethnicityIncomplete').show();
} 

if ($('#ethnicityTotalInput').val() == 'NaN') {
  $('#ethnicityComplete').hide();
  $('#ethnicityNotStarted').show();
  $('#ethnicityIncomplete').hide();
}  

if (journeyPath == 'returning' && $('#ethnicityTotalInput').val() == 'NaN') {
  $('#ethnicityComplete').hide();
  $('#ethnicityNotStarted').hide();
  $('#ethnicityIncomplete').show();
}  

if (ethnicTotal == total) {
  $('#ethnicityComplete').show();
  $('#ethnicityNotStarted').hide();
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
    $('#gov-error').removeClass('hidden');
    $('#errorMessageTotal').show();
    $('#errorMessageNumber').hide();

    $('.custom-error-group').addClass('govuk-form-group--error');
    $('#groupInputErrorMessage').removeClass('hide');
      
    window.scrollTo(0, 0);

      $(".form input[type=text]").each(function () {  

        if(isNaN(this.value)) {

          $('.custom-error-group').removeClass('govuk-form-group--error');
          $('#groupInputErrorMessage').addClass('hide');

          $('#gov-error').removeClass('hidden');
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
    
  } 
  
});
  
$("#timeServedButtonExit").click(function(){ 
  $('.form').attr('action', "gov-12").submit();
});


$('#timeServedTotalInput').val(ethnicTotal);

if (timeServedTotal !== total) {
  $('#timeServedComplete').hide();
  $('#timeServedNotStarted').hide();
  $('#timeServedIncomplete').show();
} 

if ($('#timeServedTotalInput').val() == 'NaN') {
  $('#timeServedComplete').hide();
  $('#timeServedNotStarted').show();
  $('#timeServedIncomplete').hide();
}  

if (journeyPath == 'returning' && $('#timeServedTotalInput').val() == 'NaN') {
  $('#timeServedComplete').hide();
  $('#timeServedNotStarted').hide();
  $('#timeServedIncomplete').show();
}  

if (timeServedTotal == total) {
  $('#timeServedComplete').show();
  $('#timeServedNotStarted').hide();
  $('#timeServedIncomplete').hide();
}

//************************/



// if a new total value is put into gov-03 then change the url from gov-04 to gov-04b

  // $('#onInputChange :input').change(function() {

  //   var tot = 0;
  //   $("form :input").each(function() {
  //     tot += Number($(this).val());
  //   });

  //   $('#totalGovernors').text(tot);

  //   // if ($('#totalGovernors') !== (total)) {
  //   //   $('.form').attr('action', "gov-04b");
  //   // }

  // });
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
var vacancyValue = $('#vacancyValues input').val();

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
  $('#vacancyInProgress').hide();
  $('#vacancyIncomplete').show();
} 

if (openVacancies !== '') {
  $('#vacancyComplete').show();
  $('#vacancyInProgress').hide();
  $('#vacancyIncomplete').hide();
} 

if (openVacancies == 'yes' && vacancyValue == '' ) {
  $('#vacancyComplete').hide();
  $('#vacancyInProgress').show();
  $('#vacancyIncomplete').hide();
} 

$('#vacancyButton').click(function() {
  if (!$("input[name='open-vacancies']:checked").val()) {
    $('#govCheckRadioError').removeClass('hidden');
    $('.govuk-form-group').addClass('govuk-form-group--error');
    $('#gov-error-for-radios').removeClass('hidden');
    window.scrollTo(0, 0);
    return false;
  }
});

$("#vacancyButtonExit").click(function(){ 
  $('.form').attr('action', "gov-12").submit();
});

//****************** */



// Check the value on button click and proceed to the next page for gov-11 page

$('#memberVacancyButton').click(function(e){
  
  $(".form input[type=text]").each(function () {  
    
    if(isNaN(this.value)) {
      $('#gov-error').removeClass('hidden');
      $('#errorMessageNumber').show();
      // $('#errorMessageTotal').hide();
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
      // $('.form').attr('action', "gov-04")
    }   
  });

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

if ($('#boardRepIncomplete').is(':visible')) {
  // alert('is visible')
  $('#genderGroup').hide()
  $('#ageRangesGroup').hide()
  $('#disabilityGroup').hide()
  $('#ethnicityGroup').hide()
  $('#timeServedGroup').hide()
  $('#vacanciesGroup').hide()
}

//********** */




