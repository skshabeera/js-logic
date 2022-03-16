let month=require("readline-sync")
var usernumber=month.questionInt("enter the number")
if(month===1||month===3|| month===5 ||month===7 ||month===8 || month===10 ||month==12){
    console.log("31 days in a month")
}
else{
    console.log("30 days in a month")
}