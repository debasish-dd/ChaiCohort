
const arr = [nameInput,ageInput, jobInput, bioInput ];

const nameDisplay = document.getElementById('nameDisplay')
const jobDisplay = document.getElementById('jobDisplay')
const ageDisplay = document.getElementById('ageDisplay')
const bioDisplay = document.getElementById('bioDisplay')


document.getElementById('nameInput').addEventListener('input' ,(event)=>{
    nameDisplay.textContent = (event.target.value);
    
} )
document.getElementById('ageInput').addEventListener('input' ,(event)=>{
    ageDisplay.textContent = (event.target.value);
    
} );
document.getElementById('jobInput').addEventListener('input' ,(event)=>{
    jobDisplay.textContent = (event.target.value);
    
} );
document.getElementById('bioInput').addEventListener('input' ,(event)=>{
    bioDisplay.textContent = (event.target.value);
    
} );
