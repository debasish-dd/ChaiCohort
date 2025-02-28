// Get DOM elements
const display = document.getElementById('disp');
const buttons = document.querySelectorAll('#btnss button');

// Initialize variables
let currentInput = '';
let expression = '';

// Function to update display
function updateDisplay(val) {
    display.textContent = val || '0';
}

// Add click event listeners to all buttons
    buttons.forEach((button)=>{
        button.addEventListener('click' , ()=>{
            const buttonText = button.textContent;

            if (!button.classList.contains('operator') && buttonText!=='=') {
                if (buttonText==='.' && currentInput.includes('.')) {
                    return;
                }
                currentInput += buttonText;
                expression += buttonText;
                updateDisplay(expression);

            }
        else if(button.classList.contains('operator')){
            if(buttonText==='CLR'){
                currentInput = '';
                expression = '';
                updateDisplay('');
            }else if(buttonText==='⌫'){
                currentInput = currentInput.slice(0,-1);
                expression = expression.slice(0,-1);
                updateDisplay(expression);    
            }
            switch (buttonText) {
                case '÷':
                case '×':
                case '−':
                case '+':
                    // Prevent multiple operators in a row
                    if (currentInput !== '' && !['÷', '×', '−', '+'].includes(expression.slice(-1))) {
                        currentInput = '';
                        expression += buttonText;
                        updateDisplay(expression);
                    }
                    break;
            }
        }

        if (buttonText==='=') {
            try {
                let evalExpresion = currentInput
                .replace('x' , '*')
                .replace('%' , '/')
                .replace('−', '-');

                const result = eval(evalExpresion);
                if(!isFinite(result)) throw new Error('Invalid calculation');
                expression = Number(result.toFixed(6)).toString();
                currentInput = expression;
                updateDisplay(expression);

            } catch (error) {
                updateDisplay(error);
                expression = '';
                currentInput = '';
            }
        }

        })
        
    
        
    })
        
// Initial display
updateDisplay('');
