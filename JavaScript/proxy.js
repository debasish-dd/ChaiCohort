let arr = [1,2,3,4,5,6,7,8,9];

    // console.log(arr[-1]);
    

const user = {
    user: "Debasish",
    age: 19,
    password: "abc1234"
}
// console.log(user.password);

const proxyUser = new Proxy(user , {
    get(target, prop){
        // console.log(target);
        // console.log(" the prop is: ", prop);
        if (prop==="password") {
             console.error("access denied");         
        }
        
        return target[prop]
    },
    set(target,prop,user){}
})

// console.log(proxyUser.password);



function negativeIndex(arr){
    return new Proxy(arr , {
        get(target , prop){
            
            const index = Number(prop);
            if (index<0) {
                return target[target.length + index]
                
            }
            return target[length]
        },
        set(target, prop, val){
            const index = Number(prop)
            if (index<0) {
             target[target.length + index]  = val;
            }else target[index] = val

            return true;
        }
    })
}

arr = [1,2,3,4,5,6,7,8,9];
const newArr = negativeIndex(arr)
console.log(newArr[-2]);
