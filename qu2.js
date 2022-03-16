let number=require("readline-sync")
var usernumber=number.questionInt("enter the number")
if (usernumber%2===0){
    console.log("even")
}
else{
    console.log("odd")
}