
function calculateAverage(num1, num2) {
          return (num1 + num2) / 2;
          
        }
        function multiply (num1, num2) {
          return (num1 * num2)
          
        };
        let choice = prompt("Choose the type of average (integer or double):");
        
        if (choice === "integer") {
          let num1 = parseInt(prompt("Enter the first integer number:"));
          let num2 = parseInt(prompt("Enter the second integer number:"));
          let integerAverage = calculateAverage(num1, num2);
          alert("Integer Average: " + integerAverage);
        } else if (choice === "double") {
          let num1 = parseInt(prompt("Enter the first double number:"));
          let num2 = parseInt(prompt("Enter the second double number:"));
          let doubleResult = multiply(num1, num2);
          alert("Double result: " + doubleResult);
        } else {
          alert("Invalid choice. Please choose either 'integer' or 'double'.");
        }
        
        