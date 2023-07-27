//Task 5: Implement a simple JavaScript calculator. The calculator should take two numbers 
//and an operator (+, -, *, /) as input and return the result of the operation.

function calculate(n1, n2, operator) {
    switch (operator) {
      case "+":
        return n1 + n2;
      case "-":
        return n1 - n2;
      case "*":
        return n1 * n2;
      case "/":
        if (n2 === 0) {
          return "Error: Division by zero is not allowed.";
        }
        return n1 / n2;
      default:
        return "Error: Invalid operator. Please use one of +, -, *, or /";
    }
  }
  
  const number1 = 10;
  const number2 = 0;
  const operator = "+";
  
  console.log(calculate(number1, number2, operator));
  
