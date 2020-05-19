function add(x,y) {
    return x + y;
};

function subtract(x, y) {
    return x - y;
};

function multiply(x, y) {
    return x * y;
};

function divide(x, y) {
    if (y != 0) {
        return x/y;
    } else {
        return "Don't divide by 0 lol";
    }
    
};

function operate(operator, x, y) {
    if (operator == "+") {
        return add(x, y);
    } else if (operator == "-") {
        return subtract(x, y);
    } else if (operator == "*") {
        return multiply(x, y);
    } else if (operator == "/") {
        return divide(x, y);
    }
};


var display = ""; //What is shown on the calculator display
var decimal = false; // is there a decimal in curr

var curr = ""; // current value being inputted
var nums = [] // array of inputted nums IN ORDER
var symbols = []; //array of inputted symbols IN ORDER

const buttons = document.querySelectorAll('.button');
const displayScreen = document.querySelector('.display');
displayScreen.textContent = display;




//TEST VARIABLES TO SEE WHATS HAPPENING
const numbers = document.createElement('p');
numbers.textContent = nums;
const syms = document.createElement('p');
syms.textContent = symbols;
const main = document.querySelector('.main');
main.appendChild(numbers);
main.appendChild(syms);



function splitter(text) {
    var items = display.split
}

buttons.forEach(button => {
    button.addEventListener('click', (e) => {

        if (button.id == "clear") {
            display = "";
            displayScreen.textContent = display;

        } else if (button.id == "=") {
            display = "";
            if (curr != "") {
                nums.push(parseFloat(curr));
                curr = "";}

            if (symbols.length >= nums.length) {
                symbols = symbols.slice(0, -1);
            }

        } else if ("+-*/".includes(button.id)) { // symbol input cases
            if (display.length == 0) {
                    display = "";

            } else if ((display.length > 0) && ("+-*/".includes(display.slice(-1)))) {
                display = display.slice(0, -1);
                display += button.id;
                displayScreen.textContent = display;
                decimal = false;
                symbols.pop();
                symbols.push(button.id);
            
            } else {
                display += button.id;
                displayScreen.textContent = display;
                decimal = false;
                symbols.push(button.id);
                nums.push(parseFloat(curr));
                curr = "";
            }

        } else if ((display.length > 0) && (button.id == "back")) {
            display = display.slice(0, -1);
            displayScreen.textContent = display;

        } else if (button.id == ".") {
            if (!decimal) {
            display += button.id;
            displayScreen.textContent = display;
            curr += ".";
            }
            decimal = true;

        } else {
            display += button.id;
            displayScreen.textContent = display;
            curr += button.id;
        }    
        numbers.textContent = nums;
        syms.textContent = symbols;
    });
});
