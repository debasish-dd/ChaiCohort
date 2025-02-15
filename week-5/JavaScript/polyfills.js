//include

if (!Array.prototype.yesFilter) {
  Array.prototype.yesFilter = (callback)=>{
    const arr = [];
    for (let i = 0; i < arr.length; i++) {
       if (callback()) {
        arr.push(this[i]);
       }
    }
    return arr;
  }
}

    const arr = [2,4,6,8,10];
    console.log(arr.yesFilter((val)=>val>5));
    