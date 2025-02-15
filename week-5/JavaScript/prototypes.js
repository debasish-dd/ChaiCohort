const arr = [1,2,3,4,5,8,9];
Array.prototype.abc = ()=>{
    console.log("ABC");
}
// arr.abc();
    //forEach
    if (!Array.prototype.myFor) {
        Array.prototype.myFor = function(para){
            const theArray = this;
            for (let i = 0; i < theArray.length; i++) {
                para(theArray[i] , i);
            }
        }
    }

const ret = arr.myFor((val, ind) => {
    // console.log(`the value is ${val} for the index of ${ind}`);
});

// map()
if (!Array.prototype.myMap) {
    Array.prototype.myMap = function (myFn) {
        const newArr = [];
        for (let i = 0; i < this.length; i++) {
            const val = myFn(this[i], i);
            newArr.push(val);
        }
        
        return newArr;
    }

}

const val = arr.map((e)=>e*2);
console.log(val);


