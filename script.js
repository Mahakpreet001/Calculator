const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
}

function cleardisplay(){
    display.value = "";
}

function backspace(){
    display.value = display.value.slice(0, -1);
}

function calculatePercentage(){
    try{
        const currentValue = display.value;
        const lastNumberMatch = currentValue.match(/(\d+\.?\d*)$/);
        if (lastNumberMatch) {
            const lastNumber = lastNumberMatch[0];
            const percentageValue = parseFloat(lastNumber) / 100;
            display.value = currentValue.slice(0, -lastNumber.length) + percentageValue;
        }
    }
    catch(e){
        display.value = 'Error';
    }
}

function calculate() {
    try{
        display.value = eval(display.value);
    }
    catch(e){
        display.value = 'Error';
    }
}