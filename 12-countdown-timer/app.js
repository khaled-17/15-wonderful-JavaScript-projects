const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];


const giveaway =document.querySelector('.giveaway')
const items =document.querySelectorAll('.deadline-format h4')
const deadline =document.querySelector('.deadline')

let futureDate= new Date(2024,10,2,11,30,0)

 let year =futureDate.getFullYear();
 let hours=futureDate.getHours();
 let minutes=futureDate.getMinutes();
let month=futureDate.getMonth();
month=months[month]

let day=futureDate.getDay()
day=weekdays[day]

let theDate=futureDate.getDate()

 giveaway.textContent=`giveaway ends on ${day} ${theDate}   ,  ${month} ${year} ,${hours}:${minutes}am`



 //future Time in ms 

 const futureTime=futureDate.getTime();

 function getRemaining() {
  // console.log("getRemaining getRemaining");
 const today= new Date().getTime();

 const t=futureTime-today;
//1s=1000ms
//1m=60s
//1hr=60min
//1d=24hr

//vlues in ms

const oneDay=24*60*60*1000;
const OneHour=60*60*1000;
const OneMinute=60*1000;


let days=t/oneDay;

days=Math.floor(days)
let hours=Math.floor((t%oneDay)/OneHour);
let minutes=Math.floor((t%OneHour)/OneMinute);
let second=Math.floor((t%OneMinute)/1000);




// set values
const values=[days,hours,minutes,second]



function format(item) {
  if (item<10) {
    return item=`0${item}`
    
  }
  return item
  
}

items.forEach(function (item,index) {
   item.innerHTML=format(values[index])
  
});

if (t<0) {
  clearInterval(countdown)
  deadline.innerHTML=`<h4 class='expired'> sorry ,this giveaway has expired </h4>`
}

 }



 let countdown=setInterval(() => {
  
   getRemaining()
 }, 1000);