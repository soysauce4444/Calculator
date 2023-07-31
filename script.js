function add(num1, num2) {
    return num1 + num2;
}
function minus(num1, num2) {
    return num1 - num2;
}
function times(num1, num2) {
    return num1 * num2;
}
function divide(num1, num2) {
    return num1 / num2;
}

function operate(num1, operator, num2) {
    let userInput = prompt('Enter the equation to solve:');
    
    if (operator == '+') {
        return add(num1, num2);
    }
    else if (operator == '-') {
        return minus(num1, num2);
    }
    else if (operator == '*') {
        return times(num1, num2);
    }
    return divide(num1, num2);
    /*
   (operator == '+') ? add(num1, num2) : 
   (operator == '-') ? minus(num1, num2) : 
   (operator == '*') ? divide(num1, num2) : 
   divide(num1, num2); */
}

console.log(operate());