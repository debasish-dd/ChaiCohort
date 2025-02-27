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

            if (button.classList.contains('operator') && buttonText !== '=') {
                if (buttonText === '.' && currentInput.includes('.')) {
                    return;
                }
                currentInput += buttonText;
            }

        })
        
    
        
    })
        
// Initial display
