const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function calculator() {
  rl.question("Enter an expression (e.g., 2 + 2): ", (input) => {
    // Split the input by spaces to separate operands and operator
    const [operand1, operator, operand2] = input.split(" ");

    // Convert operands to numbers
    const num1 = parseFloat(operand1);
    const num2 = parseFloat(operand2);

    // Check if inputs are valid numbers
    if (isNaN(num1) || isNaN(num2)) {
      console.log("Invalid input. Please enter a valid expression.");
      calculator(); // Restart calculator function
      return;
    }

    // Perform calculation based on operator
    let result;
    switch (operator) {
      case "+":
        result = num1 + num2;
        break;
      case "-":
        result = num1 - num2;
        break;
      case "*":
        result = num1 * num2;
        break;
      case "/":
        if (num2 === 0) {
          console.log("Error: Division by zero");
          calculator(); // Restart calculator function
          return;
        }
        result = num1 / num2;
        break;
      default:
        console.log(
          "Invalid operator. Please enter a valid operator (+, -, *, /)."
        );
        calculator(); // Restart calculator function
        return;
    }

    console.log(`Result: ${result}`);
    rl.close();
  });
}

calculator(); // Start the calculator function
