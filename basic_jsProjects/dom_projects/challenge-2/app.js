const buttons = document.querySelectorAll('button')
const mainHeading = document.getElementById('mainHeading')
buttons.forEach((button)=>{
    button.addEventListener('click' , ()=>{      
        const btnColor = (button.textContent.toLowerCase());
        mainHeading.style.color = btnColor;
        if (button.id==='resetButton') {
            mainHeading.style.color = '#34495e';
        }
    })
})
