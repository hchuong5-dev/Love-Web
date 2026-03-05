// FIRST DAY YOU STARTED DATING
const startDate = new Date("2024-02-14");

// NEXT MEETING DATE
const meetDate = new Date("2026-04-10");

const today = new Date();

// DAYS TOGETHER
const diff = today - startDate;
const days = Math.floor(diff / (1000 * 60 * 60 * 24));

document.getElementById("days").textContent = days;


// COUNTDOWN TO MEET
const diffMeet = meetDate - today;
const meetDays = Math.floor(diffMeet / (1000 * 60 * 60 * 24));

document.getElementById("meet").textContent =
"Next time we meet in " + meetDays + " days 💕";


// IMAGE UPLOAD PREVIEW
const upload = document.getElementById("upload");

if(upload){

upload.addEventListener("change", function(){

const file = this.files[0];
if(!file) return;

const reader = new FileReader();

reader.onload = function(e){

const img = document.createElement("img");
img.src = e.target.result;

document.getElementById("gallery").appendChild(img);

}

reader.readAsDataURL(file);

});

}
