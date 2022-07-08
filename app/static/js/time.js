window.onload = displayClock();
window.onload = displayDates();


function displayClock(){
    var d = new Date();
    var hour = d.getHours();
    var minute = d.getMinutes();
    var second = d.getSeconds();

    // console.log(typeof(hour));
    // console.log(minute);
    // console.log(second);

    if(hour < 10){ 
      document.getElementById('h').innerHTML = "0" + hour;
    }else{
     document.getElementById('h').innerHTML = hour;  
    }

    if(minute < 10){ 
      document.getElementById('m').innerHTML = "0" + minute;
    }else{
     document.getElementById('m').innerHTML = minute;  
    }

    if(second < 10){ 
      document.getElementById('s').innerHTML = "0" + second;
    }else{
     document.getElementById('s').innerHTML = second;  
    }
  window.setInterval(displayClock, 1000);
}


function displayDates(){

  var dateObj = new Date();
  var date = dateObj.getDate()
  var month = dateObj.getUTCMonth();
  var day = dateObj.getDay();
  var year = dateObj.getUTCFullYear();

const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
];
const dayName = ["Sunday", "Monday","Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

   document.getElementById('day').innerHTML = date;
   document.getElementById('month').innerHTML = monthNames[month];
   document.getElementById('year').innerHTML = year;
   document.getElementById('dayname').innerHTML = dayName[day];
  
}