# Calculator

This code is for a simple calculator that performs basic arithmetic operations such as addition, subtraction, multiplication, and division. The calculator has number buttons (0-9) and symbol buttons (+, -, *, /) that allow users to input equations, and a submit button that calculates and displays the result of the equation. The code also includes a 'Clear' button that resets the input, and records the equation and result, along with a timestamp.

## **Variables**

- **`numberButtons`**: An array containing the IDs of the number buttons (0-9).
- **`symbols`**: An array containing the IDs of the symbol buttons (+, -, *, /).
- **`equation`**: A string variable that stores the equation entered by the user.

## **Loops**

- **`for`** loop to iterate through each number button in the **`numberButtons`** array:
    - **`button`**: A constant variable that stores a reference to the current number button using the ID.
    - **`button.onclick`**: An event listener that listens for a click on the current number button.
        - When the button is clicked, it appends the corresponding digit to the equation in the **`equationText`** element, and updates the **`equation`** variable with the new value.
- **`for`** loop to iterate through each symbol button in the **`symbols`** array:
    - **`symbolBtn`**: A constant variable that stores a reference to the current symbol button using the ID.
    - **`symbolBtn.onclick`**: An event listener that listens for a click on the current symbol button.
        - When the button is clicked, it appends the corresponding symbol to the equation in the **`equationText`** element, and updates the **`equation`** variable with the new value.

## **Event Listeners**

- **`submitBtn.onclick`**: An event listener that listens for a click on the submit button.
    - When the button is clicked, it logs the **`equation`** variable to the console and evaluates the equation using the **`eval()`** function.
    - The result is then displayed in the **`equationText`** element.
- **`clearBtn.onclick`**: An event listener that listens for a click on the Clear button.
    - When the button is clicked, it logs the equation and the result to the equation-history element, along with a timestamp.
    - The **`equation`** variable is then reset, and the input and equation are cleared from the **`equationText`** element.

## **Elements**

- **`equationText`**: An HTML element that displays the equation and the result. The innerHTML of this element is updated with the input and result of the equation.
- **`submitBtn`**: An HTML element that submits the equation for evaluation when clicked.
- **`clearBtn`**: An HTML element that clears the input and stores the equation, result, and timestamp.
- **`equation-history`**: An HTML element that displays the history of equations entered, along with their results and timestamps.