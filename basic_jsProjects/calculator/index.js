let num = '';
let displayVal = num; 
let result = NaN;
let oparator = '';
let numss = [];
document.querySelectorAll("#btnss button").forEach(button => {
    button.addEventListener("click", () => {
        
       if(button.className==="operator"){
        oparator = button.innerHTML;
        console.log(oparator);
        
       }else{
        num += button.innerHTML;

       }
       numss.push(num);
       if (button.className === "equal") {
        
       }
    });
});

