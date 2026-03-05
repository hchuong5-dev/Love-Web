const container = document.getElementById("months")
const upload = document.getElementById("upload")

const year = container.dataset.year

const months = [
"January","February","March","April",
"May","June","July","August",
"September","October","November","December"
]

let selectedKey = ""

months.forEach((month,mIndex)=>{

const monthDiv = document.createElement("div")
monthDiv.className="month"

const title = document.createElement("div")
title.className="month-title"
title.textContent = month + " " + year

const daysDiv = document.createElement("div")
daysDiv.className="days"

for(let d=1; d<=31; d++){

const day = document.createElement("div")
day.className="day"

const key = year + "-" + mIndex + "-" + d

const saved = localStorage.getItem(key)

if(saved){

const img = document.createElement("img")
img.src = saved
day.appendChild(img)

}

day.onclick = ()=>{

selectedKey = key
upload.click()

}

daysDiv.appendChild(day)

}

monthDiv.appendChild(title)
monthDiv.appendChild(daysDiv)

container.appendChild(monthDiv)

})

upload.addEventListener("change",function(){

const file = this.files[0]

const reader = new FileReader()

reader.onload = function(e){

localStorage.setItem(selectedKey,e.target.result)
location.reload()

}

reader.readAsDataURL(file)

})