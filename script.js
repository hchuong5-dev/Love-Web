// ❤️ FIRST DAY OF LOVE
const startDate = new Date("2025-09-08T00:00:00");

// meeting date (will be set later)
let meetDate = null;


// MAIN LOVE TIMER
function updateLoveTimer(){

const now = new Date();

// TIME DIFFERENCE
const diff = now - startDate;

// DAYS
const days = Math.floor(diff / (1000 * 60 * 60 * 24));

// HOURS
const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);

// MINUTES
const minutes = Math.floor((diff / (1000 * 60)) % 60);


// UPDATE CIRCLE
document.getElementById("days").textContent = days;

document.getElementById("timeSmall").textContent =
hours + "h " + minutes + "m";


// UPDATE MEETING COUNTDOWN
if(meetDate){

const meetDiff = meetDate - now;

const meetDays = Math.floor(meetDiff / (1000 * 60 * 60 * 24));

document.getElementById("meet").textContent =
"We will meet in " + meetDays + " days 💕";

}

}


// BUTTON → SHOW DATE INPUT
function toggleMeetInput(){

const box = document.getElementById("meetInputBox");

if(box.style.display === "none"){
box.style.display = "block";
}else{
box.style.display = "none";
}

}


// SAVE MEETING DATE
function setMeetDate(){

const input = document.getElementById("meetInput").value;

if(!input){
alert("Pick a date ❤️");
return;
}

meetDate = new Date(input);

updateLoveTimer();

}


// update every second
setInterval(updateLoveTimer,1000);

// run once immediately
updateLoveTimer();