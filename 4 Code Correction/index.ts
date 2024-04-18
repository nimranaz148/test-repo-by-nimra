// Mistake:
leet name = "name";
// solution: 
let my_name : string = "name"; 

// Mistake:
constant number = 5;
// solution: 
const num:number = 5;

// Mistake:
let MY_NAME = "name"
// solution:
let my_Name : string = " name";

// Mistake:
let MYage: boolean  = "name"
// solution: 
let my_age:number = 23;

// Mistake:
let number: num  = 6
// solution: 
let num1 : number = 6;

// Mistake:
let number  = "6"
consool.log[number]
// solution:
let num2 : string = "6";
console.log(num);


// Mistake:
let father=Name: array  = "fatherName"
log{father=Name}
// solution:
let father_Name : string[] = ['salahuddin'];
console.log(father_Name);



// Mistake:
let father=Name: array  = "fatherName"
log{father=Name}
// solution:
let father_name : string[] = ['salahuddin'];
console.log(father_name);

// Mistake:
let anyNumber = 65
anyNumber = "69"
// solution:

let any_Number : number | string = 65;
any_Number = "69";


// Mistake:
const myAge: number  = 26
myAge = 60
// solution:
const my_Age : number = 26;//const cannot assign to my age beacuse it is a constant
let my_Age2 : number = 60;

// Mistake:
const color: string;
const blue = "blue"
color = `color name is ${blue}.`
// solution:
const color_name : string = "blue";
console.log(`color name is ${color_name} `);


// Mistake:
const color: string;
const blue = "Black"
color = `color name is ${"Black"}.`
// solution:
const new_color : string= "Black"
console.log(`color name is ${new_color}`);

