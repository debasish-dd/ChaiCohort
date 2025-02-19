//creating of array
let arr = ["lemon tea" , "masala tea" , "olong tea" , "white tea" , "harbal tea"];
//remove oolong tea
const ind = arr.indexOf("olong tea");
// console.log(ind);
if(ind>-1){
    arr.splice(ind , 1);
}
// console.log(arr);
//filter the array with only include cafinated tea 
    const uncafTea = "harbal tea";
   const newArr =  arr.filter((tea)=>(tea!="harbal tea"));
    // console.log(newArr);
// print each type of tea from the array using loop

    for (let index = 0; index < arr.length; index++) {
        // console.log(arr[index]);    
    }
// using a loop create a new array with all tea names are uppercases

const teaList = [];
    for (let index = 0; index <arr.length; index++) {
         teaList.push(arr[index].toUpperCase());
    }
    // console.log(teaList);
// use a for loop to find the tea name with most characters
    let longTea = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[longTea].length>=arr[i].length) {
            longTea = i;
        }
    }
    // console.log(arr[longTea]);

    
    