let lname : string;

lname = "Santosh";

let newname = lname.toLowerCase();

console.log(newname);

let age : number;

age = 24;
age = 24.4;

let dob = "25";
let result = parseInt(dob);

let isValid : boolean;
isValid = false;

console.log(isValid);

//two types to define an array, feel free top use anyone
let empList : string[];
empList = ["Varun", "Ashish", "Madhura", "Manoj"];

let numList : Array<number>;
numList = [1,2,3,4,5];

let results = numList.filter((num) => num>2);

let sum = numList.reduce((acc, num) => acc + num);

console.log(sum);

const enum Color {
    Red,
    Green,
    Blue
}

let c: Color = Color.Blue;