
let marks =85;
if(marks>=90){
    console.log("A+ Grade")
}else if(marks<=85 || marks>60){
    console.log("A Grade")
}else{
    console.log("Fail")
}

//Switch case
let day=5;
switch(day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday")
        break;
    case 3:
        console.log("Wednesday")
        break;
    case 4:
        console.log("Thursday")
        break;
    case 5:
        console.log("Friday")
        break;
    case 6:
        console.log("Saturday")
        break;
    case 7:
        console.log("Sunday")
        break;
    default:
            console.log("Invalid day")
            break;
}

let colors=["red","blue","green"];
for(i=0;i<colors.length;i++){
    console.log(colors[i])
}
for(let color of colors){
    console.log(color);
}
//objects
let person={
    name:"KavyaSri",
    age:19,
    rollNo:"23VV1A0520"
}
for(let key in person){
    console.log(`${key}:${person[key]}`)
}
for(let i=5;i>=0;i--){
    if(i==3){
        continue;
    }else if(i==2){
        break;
    }
    console.log(i);
}