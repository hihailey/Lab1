

function isleapYear(year) //function which can figure whether a year is a leap year or not
{
  if((year%4==0&&year%100 !=0)||year%400==0){
    return true;  
    } else{
    return false;
    }
}


function getDayOfTheWeek(year,month,day){ 

  var toText = year.toString(); //to change string
  var lastdigit = toText.slice(-2); //bring the last two digits

  var stepOne= Math.floor(lastdigit/12);
  var stepTwo= (lastdigit-(stepOne*12));
  var stepThree= Math.floor(stepTwo/4);
  var stepFour=day;
  var stepFive=0; // 얘 지정해줘야 인식함 왜???,,

  var month = month.toString();

  function monthCode(month)
  {
      if(month.includes("Apr")||month.includes("Jul")==true||month==7||month==4){

          stepFive = 0;

      }else if(month.includes("Jan")||month.includes("Oct")==true||month==1||month==10){

          stepFive = 1;

      }else if(month.includes("May")==true||month==5){

          stepFive = 2;

      }else if(month.includes("Aug")==true||month==8){

          stepFive = 3;

      }else if(month.includes("Feb")||month.includes("Mar")||month.includes("Nov")==true||month==2||month==3||month==11){

          stepFive = 4;
      
      }else if(month.includes("Jun")==true||month==6){

          stepFive = 5;
      }else if(month.includes("Sep")||month.includes("Dec")==true||month==9||month==12){

          stepFive = 6;
      }    
}
monthCode(month); 

function exception(year){  //exception cases

  if(isleapYear(year)&&(month.includes("Jan") || month.includes("Feb")||month==1||month==2)){      
    stepFive -= 1;
  }
  if (1600 <= year && year < 1700){ // 중요 중요 질문해야함
    stepFive = stepFive+6;
  }else if(1700 <= year && year < 1800){
    stepFive = stepFive+4;
  }else if(1800 <= year && year < 1900){
    stepFive = stepFive+2;
  }else if(2000 <= year && year < 2100){
    stepFive = stepFive+6;
  }else if(2100 <= year && year < 2200){
    stepFive = stepFive+4;
  }else{
    return stepFive;
  }
  }
  exception(year);


  var stepSix =(stepOne+stepTwo+stepThree+stepFour+stepFive)%7;

  function findDayOfWeek(){

      switch (stepSix) {

      case 0:
    
      dayOfWeek = "Saturday";
    
        break;
    
      case 1:
    
      dayOfWeek = "Sunday";
    
        break;
    
      case 2:
    
      dayOfWeek = "Monday";
    
        break;
    
      case 3:
    
      dayOfWeek = "Tuesday";
    
        break;
    
      case 4:
    
      dayOfWeek = "Wednesday";
    
        break;
    
      case 5:
    
      dayOfWeek = "Thursday";
    
        break;
    
      case 6:
    
      dayOfWeek = "Friday";
    }
    }
  findDayOfWeek();
    return dayOfWeek;
    }


  function makeCalendar(year){

  var calendar ={1:31,2:28,3:31,4:30,5:31,6:30,7:31,8:31,9:30,10:31,11:30,12:31};

  j=0;

  if (isleapYear(year)){ //글로벌 함수일때만 호출 가능!!
    calendar ={1:31,2:29,3:31,4:30,5:31,6:30,7:31,8:31,9:30,10:31,11:30,12:31}; //값 한개만 못바꾸나?
    console.log("This is a leap year.");
  }

  for (var x in calendar) { 
  console.log(x+"(Mon)");
  while(j<calendar[x]){
    j++; 
    getDayOfTheWeek(year,x,j);

    console.log(x+"-"+j+"-"+year+" is a "+dayOfWeek);
  }
  j = 0;  //얘를 안넣어주면 안돌아감..
  }
  }
  //console.log(getDayOfTheWeek(2020,"Sep",25));

  module.exports ={isleapYear,makeCalendar,getDayOfTheWeek};//Using { } to export functions more than two