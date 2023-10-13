
let hour = document.getElementById("hours")
let minutes = document.getElementById("Minutes")
let seconds = document.getElementById("Seconds")
let ampm = document.getElementById("timing")

setInterval(()=>{
    
    let a = new Date()
    hour.innerText = a.getHours() < 10 ? "0" + a.getHours() :a.getHours()
    minutes.innerHTML = a.getMinutes() < 10 ? "0" + a.getMinutes() :a.getMinutes()
    seconds.innerHTML = a.getSeconds() < 10 ? "0" + a.getSeconds() :a.getSeconds()
    ampm.innerHTML =  a.getHours() > 12 ? "PM"  :"AM"

},1000)