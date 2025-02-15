class person{
    constructor(fname, lname){
        this.fname = fname;
        this.lname = lname;
    }
     getFullName() {
        return `${this.fname} ${this.lname}`
    }
}

const p = new person('debasish' , 'das');

console.log(p.getFullName());
