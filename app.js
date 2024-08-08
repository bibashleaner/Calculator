const operator = document.querySelectorAll('#operator');
const operand = document.querySelectorAll('#operand');
const btnAc = document.querySelector('#ac');
const btnDel = document.querySelector('#del');
const btnEqualto = document.querySelector('#equalto');
const btns = document.querySelector('.btn');
const displayArea = document.querySelector('.screen');

let currentInput = '';
let perviousInput = '';

// Function to display or update in display area with pressing buttons
const updateDisplay = (value) => {
    displayArea.textContent = value;
}

//Function to add two numbers
function add(a, b){
    return a + b;
}

//Function to add subtract numbers
function sub(a, b){
    return a - b;
}

//Function to multiply two numbers
function mul(a, b){
    return a * b;
}

//Function to divide two numbers
function divide(a, b){
    if(b==0){ 
        alert("Error! can't divide by 0"); //If try to divide by 0 display error msg
    }
    else{
        return a/b;
    }
}

// Function to store the operand
// function storeCal(operator){
//     if(!numStore){
//         numStore = displayArea.textContent;
//     }
//     else{
//         numStore = operate(Number(numStore), operatorStore, Number(displayArea.textContent));
//     }

//     operatorStore = operator;
//     newInput = true;
//     didEquals = false;
// }

// Function to calculate as per operator
function operate(a, operator, b){
    if(operator == '+'){
        return add(a, b);
    }
    else if(operator == '-'){
       return sub(a, b);
    }
    else if(operator == '*'){
       return mul(a, b);
    }
    else if(operator == '/'){
       return divide(a, b);
    }
}
// console.log(operate(25, '+', 5));

function displayresult(){
    btnEqualto.addEventListener('click', () => {
        updateDisplay(operate(a, operator, b));
    });
}

// Function to clear the screen
function clear(){
    currentInput = '';
    perviousInput = '';
    displayArea.textContent = '';
}

// Function to delete last single digit or operator
function deleteSingleNum(){
    currentInput = currentInput.slice(-2, -1);
    updateDisplay(currentInput);
}

// Function to transfer the numbers when btn is pressed to display on screen 
function appendNum(num){
    if(currentInput == ''){
        currentInput = num;
        updateDisplay(currentInput);
        displayArea.textContent = '';
    }
    else{
        currentInput += num;
    }
    updateDisplay(currentInput);
}

//Function to for clicking the operand btns and transfer to appendNum
operand.forEach((btn) => {
    btn.addEventListener('click', () => {
       const btnText = btn.textContent;
       appendNum(btnText); 
    });
});

// Function to display operator
operator.forEach((btn) => {
    btn.addEventListener('click', () => {
        const operatorText = btn.textContent;
        appendNum(operatorText);
    });
});

btnAc.addEventListener('click', clear); //when clicked ac button it calls the clear function
btnDel.addEventListener('click', deleteSingleNum); //when clicked del button it calls the deleteSingleNum

// btnEqualto.addEventListener('click', () => {
//     resultDisplay();
// });
