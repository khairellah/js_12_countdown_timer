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

 // Get  Elements
 const giveaway = document.querySelector(".giveaway");
 const deadline = document.querySelector(".deadline");
 const items = document.querySelectorAll(".deadline-format h4");
 //console.log(items); show all my info days, hours, min, sec

let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDay();
//console.log(tempDay)

const futureDate = new Date()
futureDate.setFullYear(tempYear)
futureDate.setMonth(tempMonth)
futureDate.setDate(17),
futureDate.setHours(17)
futureDate.setMinutes(00)
futureDate.setSeconds(00)
console.log('temp', tempDay)
console.log('future',futureDate)
// let futureDate = new Date(2021,9,16,14,08,0); // Date() : gets the actual date 2021,15,10,12,30,0
//  let futureDate = new Date();
//  futureDate.setFullYear(2021, 9, 17);
//  futureDate.setHours(12);
//  futureDate.setMinutes(30)
// console.log(futureDate) //show date format
const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();

let month = futureDate.getMonth();
month = months[month]
const date = futureDate.getDate();

const weekday = weekdays [futureDate.getDay()];
// console.log(weekday)
giveaway.textContent = `giveaway ends on ${weekday}, ${date} ${month} ${year} ${hours}:${minutes}am`

// future time in ms
const futureTime = futureDate.getTime();
// console.log(futureTime)

function getRemainingTime () {
  const today = new Date().getTime();
  const t = futureDate - today
  // console.log(t)
  // 1s = 1000ms
  // 1m = 60s
  // 1h = 60m
  // 1d = 24h
  
  // Values in ms
  const oneDay = 24*60*60*1000; //   console.log(oneDay)
  const oneHour = 60*60*1000;
  const oneMinute = 60*1000
  // Calculaye all values
  let days = t / oneDay;
  days = Math.floor(days) // console.log(days)
  let hours = Math.floor((t%oneDay) / oneHour);   // console.log(hours)
  let minutes = Math.floor((t%oneHour) / oneMinute); // console.log(minutes)
  let seconds = Math.floor((t%oneMinute) / 1000); // console.log(seconds)

  // Set Values array
  const values = [days,hours,minutes,seconds];
  // format date
  function format(item){
    if(item < 10){return (item = `0${item}`);}
      return item
  }
  // set time in html
  items.forEach((item, index)=>{
    item.innerHTML = format(values[index])
  })
  if(t < 0){
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class="expired"> Sorry, the giveaway has expired ! </h4>`
  }
}

// countdown
let countdown = setInterval(getRemainingTime,1000) // call 'getRemainingTime' every 1000ms

getRemainingTime ();