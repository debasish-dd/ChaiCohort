let p1 = {
    name : "Debasish"
}
let p2 = {};
let p3 = {
    name : p1.name
}

p2 = p1;
console.log(p2);
console.log(p3);
p1.name = "XYZ";
console.log(p2);
console.log(p3);

console.log(typeof(p1.name));

let onj = {
    fName : "Debasish",
    lName : "Das",
    age: 19,
    address: {
        house: "abc",
        dist: "5km"
    }
}

let newObj = {
    ...onj //creating a shallow coppy
}
 console.log(newObj);
 
 onj.age = 20;

 onj.address.dist = "8km"
 console.log(newObj);
 
