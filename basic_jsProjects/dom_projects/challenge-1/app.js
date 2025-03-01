/**
 * Write your challenge solution here
 */
const body = document.getElementById('body')
const toggleButton = document.getElementById('toggleButton')
const status = document.getElementById('status')
const bulb = document.getElementById('bulb')

let flag = false

toggleButton.addEventListener('click', () => {
    if (!flag) {
        toggleButton.textContent = 'Turn Off'
        flag = true
        status.textContent = 'Status: Off'
        body.style.backgroundColor = '#333333'
        body.style.color = '#ffffff'
        bulb.style.backgroundColor = '#f1c40f'
        bulb.style.transform = 'translateX(-50%)'
        bulb.style.boxShadow = '0 0 50px rgba(241, 196, 15, 0.5)'
        bulb.style.transition = 'all 0.3s ease'
    } else {
        flag = false
        toggleButton.textContent = 'Turn On'
        status.textContent = 'Status: On'
        body.style.backgroundColor = '#ffffff'
        body.style.color = '#333333'
        bulb.style
        bulb.style.backgroundColor = '#95a5a6'
        bulb.style.boxShadow = 'none'
    }
})
