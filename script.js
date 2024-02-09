function appendValue(value){
    document.getElementById('display').value+=value;
}
function clearDisplay(){
    var displayInput = document.getElementById('display');
    displayInput.value=''; 
}
function del() {
    var displayInput = document.getElementById('display');
    var currentValue = displayInput.value;
    displayInput.value = currentValue.substring(0, currentValue.length - 1);
}
function equal(){
    var displayInput = document.getElementById('display');
    var expression = displayInput.value;
    var result=eval(expression);
    displayInput.value=result;
}