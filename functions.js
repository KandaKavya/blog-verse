function greet(){
    console.log("Welcome to Dev Astra")
}
greet()
//functions with parameters

function add(x,y){
    return x+y;
}
let result=add(18,20);
console.log(result)

const pi=3.14
console.log(pi)

const mul =function(x,y){
    return x*y;
}
/*function multiply{
    return x*y;
}*/
console.log(mul(5,4))
//Arrow function
const square = (x)=>x*x;
console.log(square(5))
const sub =(x,y)=>{
    console.log(x,y);
    return x-y;
}
console.log(sub(20,18))

