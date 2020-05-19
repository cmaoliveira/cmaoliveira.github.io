window.addEventListener('load', start);
var inputsRange = null;
var inputsValue = null;
function start() {
  inputsValue = document.querySelectorAll('.inputValue');
  inputsRange = document.querySelectorAll('.inputRange');

  setDefaultValues();
}
function setDefaultValues() {
  for (i = 0; i < inputsValue.length; i++) {
    inputsValue[i].value = 0;
  }
  for (i = 0; i < inputsRange.length; i++) {
    inputsRange[i].value = 0;
  }
  inputsRange.forEach((range) => {
    range.addEventListener('input', setValues);
  });
}
function setValues(event) {
  rangeId = event.target.id;
  rangeColor = rangeId.slice(5);
  rangedValue = event.target.value;
  var valueSelected = document.querySelector('#input' + rangeColor);
  valueSelected.value = rangedValue;

  var redColor = document.querySelector('#inputRed').value;
  var greenColor = document.querySelector('#inputGreen').value;
  var blueColor = document.querySelector('#inputBlue').value;
  var boxColor = document.querySelector('.boxColor');
  boxColor.style.backgroundColor =
    'rgb(' + redColor + ',' + greenColor + ',' + blueColor + ')';
}
