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

upload.addEventListener("change", function(){

const file = this.files[0];

const reader = new FileReader();

reader.onload = function(e){

const img = document.createElement("img");

img.src = e.target.result;

document.getElementById("gallery").appendChild(img);

}

reader.readAsDataURL(file);


});

.hearts{
position:fixed;
top:0;
left:0;
width:100%;
height:100%;
pointer-events:none;
overflow:hidden;
}

.heart{
position:absolute;
color:#ff4d88;
font-size:20px;
animation:floatUp linear infinite;
}

@keyframes floatUp{
0%{
transform:translateY(100vh) scale(1);
opacity:1;
}

100%{
transform:translateY(-10vh) scale(1.5);
opacity:0;
}
}
