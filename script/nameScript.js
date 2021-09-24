$(function() {
  $('#btnClear').hide();

  $('#btnName').click(function() {
    var userName = $('#userName').val();

    var nameLength = getStringLength(userName);
    var nameMsg = 'The length of your name is: ';
    $('#nameOutput').text(nameMsg + nameLength);

    var nameReverse  = reverseString(userName);
    var nameMsgTwo = 'Your name in reverse is: ';
    $('#nameOutput').append('<br/>' + nameMsgTwo + nameReverse + '<br/>');


    var thirdNameLetter = thirdLetter(userName);
    var nameMsgThree = 'The 3rd letter of your name is: ';
    $('#nameOutput').append(nameMsgThree + thirdNameLetter + '<br/>');

    var stringCaps = allCaps(userName);
    var nameMsgFour = 'Your name in uppercase letters: ';
    $('#nameOutput').append(nameMsgFour + stringCaps);

    stringArrayPosition(userName);

    $('#btnName').hide();
    $('#btnClear').show();

  });

  $('#btnClear').click(function() {
    clearElement("#nameOutput");
    $(userName).val("");
    $('#btnClear').hide();
    $('#btnName').show();
  });





  function getStringLength(stringVal) {
    var stringLength = stringVal.length;
    return stringLength;
  };

  function reverseString(stringVal) {
    var revString = stringVal.split('').reverse().join('');
    return revString;
  };

  function thirdLetter(stringVal) {
    var thirdString = stringVal[2];
    return thirdString;
  };

  function clearElement(elementId){
    $(elementId).html("");
  };

  function allCaps(stringVal) {
    var stringUpper = stringVal.toUpperCase();
    return stringUpper;
  };

  function stringArrayPosition(stringVal) {
    for (let i=0; i < stringVal.length; i++) {
    $('#nameOutput').append('<br/>' + stringVal[i] + ' - ' + i);
    }
  };

});