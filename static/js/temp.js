/*Converts Celcius to Fahrenheit and Fahrenheit to Celcius using Event Listener*/

//Connect to values from HTML file
var celciusInput = document.getElementById("celciusInput")
var fahrenheitDisplay = document.getElementById("fahrenheitDisplay")
var fahrenheitInput = document.getElementById("fahrenheitInput")
var celciusDisplay = document.getElementById("celciusDisplay")

//Event Listener will adjust the output sentence as soon as a value is entered
celciusInput.addEventListener("input", displayFunctionC)

function displayFunctionC() {
    if (celciusInput.value) {
        var fahrenheitOutput = convertCtoF(celciusInput)
        fahrenheitDisplay.innerText = "The temperature is " + fahrenheitOutput.toFixed(2) + "\xB0 Fahrenheit."
    } else {
        fahrenheitDisplay.innerText = "The temperature in \xB0F will display here."
    }
}

fahrenheitInput.addEventListener("input", displayFunctionF)

function displayFunctionF() {
    if (fahrenheitInput.value) {
        var celciusOutput = convertFtoC(fahrenheitInput)
        celciusDisplay.innerText = "The temperature is " + celciusOutput.toFixed(2) + "\xB0 Celcius."
    } else {
        celciusDisplay.innerText = "The temperature in \xB0C will display here."
    }
}

//Mathematics for conversion functions
function convertCtoF(x) {
    return parseFloat(x.value) * 1.8 + 32
}

function convertFtoC(y) {
    return (parseFloat(y.value) - 32) / 1.8
}

//Example for using getElementById with "innerHTML" - use single quotes inside the string quotes
document.getElementById("footer").innerHTML = "<h3>by <span style='color:seagreen'>Felix</span></h3>"; 
