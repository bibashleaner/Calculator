const operator = document.querySelector('#operator');
const operand = document.querySelector('#operand');
const ac = document.querySelector('#ac');
const del = document.querySelector('#del');
const btn = document.querySelector('.btn');
const screen = document.querySelector('.screen');

function display(){
    
}

function add(a, b){
    return a + b;
}

function sub(a, b){
    return a - b;
}

function mul(a, b){
    return a * b;
}

function divide(a, b){
    if(b==0){
        alert("Error! can't divide by 0");
    }
    else{
        return a/b;
    }
}

function operate(){
    let dis = btn.addEventListener('click', () => {
        const buttonText = btn.textContent;
        screen.textContent = buttonText;
    });
}