var currentNumberWrapper = document.getElementById("currentNumber");
var btnIncrement = document.getElementById("increment");
var btnResetCurrentNumber = document.getElementById("resetCurrentNumber");
var btnDecrement = document.getElementById("decrement");

var currentNumber = 0;

currentNumberWrapper.innerHTML = currentNumber;

btnIncrement.addEventListener('click', function(){
    currentNumberWrapper.innerHTML = ++currentNumber;
    changeColor(++currentNumber)
})
btnResetCurrentNumber.addEventListener('click', function(){
    currentNumberWrapper.innerHTML = currentNumber = 0;
    changeColor(currentNumber = 0)
})
btnDecrement.addEventListener('click', function(){
    currentNumberWrapper.innerHTML = --currentNumber;
    changeColor(--currentNumber)
})

function changeColor(negativeNumbers){
    if (negativeNumbers <= -1){
        currentNumberWrapper.style.color = 'red';
    }
    else{
        currentNumberWrapper.style.color = 'white';
    }
}

