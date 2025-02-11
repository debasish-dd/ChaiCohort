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


