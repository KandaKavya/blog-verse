let x=20;
let y=4;

console.log(x+y)
console.log(x/y)
console.log(x-y)
console.log(x%y)
console.log(x**y)

//Assignment operators
let z=5;
z+=2;
console.log(z)
z-=4;
console.log(z)
z*=2;
console.log(z)
z/=2;
console.log(z)
z%=2;
console.log(z)

//comparison operators

let a=10,b="10";

console.log(a==b)
console.log(a!=b)
console.log(a===b)
console.log(a!==b)
console.log(a<=b)
console.log(a>=b)
console.log(a<b)
console.log(a>b)

//logical operators
let age=20;

console.log(age>=20 && age<=40)
console.log(age<20 || age>20)
console.log(!(age<18))

//String operators
let fName="Kavya";
let sName="Sri";
let fullName=fName+" "+sName;
console.log(fullName);
let correctName=`Hello ${fName} ${sName}, Welcome to Dev Astra`;
console.log(correctName)

//ternary operator
let myAge=19;
if(myAge>=18){
    console.log("Eligible to vote")
}
else{
    console.log("You Cannot Vote")
}
let result=myAge>=18 ?"Eligible to vote":"You Cannot Vote";
console.log(result)

//increment and decrement operators
let count=20;
console.log(count++)
console.log(count)
console.log(++count)

//typeof operators
console.log(typeof count)
console.log(typeof "Kavya")
console.log(typeof 18)



