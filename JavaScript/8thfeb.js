//creating of array
let arr = ["lemon tea" , "masala tea" , "olong tea" , "white tea" , "harbal tea"];
//remove oolong tea
const ind = arr.indexOf("olong tea");
console.log(ind);
if(ind>-1){
    arr.splice(ind , 1);
}
console.log(arr);
//filter the array