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

 let futureDate = new Date(2021,11,24,12,30,0); // Date() : gets the actual date
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


