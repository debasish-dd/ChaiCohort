const arr = [1,2,3,4,5,6,7,8,9];

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



