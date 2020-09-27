let makeCalendar = require("./lab-three").makeCalendar
let getDayOfTheWeek = require("./lab-three").getDayOfTheWeek
let isleapYear=require("./lab-three").isleapYear
let readlineSync = require('readline-sync');



console.log("This is calendar of 2020 ! ")

makeCalendar(2020);


console.log("You can find the day of week , You want ! ")

function getDayOfWeekForUserDate(){
var year = readlineSync.question('Type the year. ');
var month = readlineSync.question('Type the month. (You can put in English too. ex. March ")');
var day = readlineSync.question('Type the day. '); 
//얘네가 값을 다 스트링으로 받아서 이상한 값을 내보냈음 

//year = parseInt(year); year 도 스트링으로 변환해서 뒷부분을 자르기때문에 상관없고,
//month = parseInt(month);
day=parseInt(day);


console.log(getDayOfTheWeek(year,month,day));
}
getDayOfWeekForUserDate();



