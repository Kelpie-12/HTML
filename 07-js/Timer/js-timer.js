// JavaScript source code
const year = document.getElementById("year");
const mon = document.getElementById("mon");
const day = document.getElementById("day");
const hour = document.getElementById("hour");
const mim = document.getElementById("mim");
const sec = document.getElementById("sec");

//const currenty = new Date().getFullYear();
var user_start = document.getElementById("user-start");
//const newY = new Date(`1 Jan ${currenty + 1} 00:00:00`);
//console.log("new: " + newY);
var key = null;
var user_date; 

console.log("user_date: " + user_date);
//const user_tmp_date = new Date();
function countdown_timer() {
    const today = Date.now();
    console.log("today: " + today);
    //  const gap =  newY-today ;
    let gap = -1;

    gap = user_date - today;
    const d = Math.floor(gap / 1000 / 60 / 60 / 24);//(gap / (1000 / 60 / 60 / 24) % 28);
    const h = Math.floor((gap / 1000 / 60 / 60) % 24);//(gap / ((1000 * 60 * 60)) % 24);
    const i = Math.floor((gap / 1000 / 60) % 60);//(gap / ((1000 * 60)) % 60);
    const s = Math.floor((gap / 1000) % 60);//(gap / (1000) % 60);


    day.innerHTML = d < 10 ? "0" + d : d;
    hour.innerHTML = h < 10 ? "0" + h : h;
    mim.innerHTML = i < 10 ? "0" + i : i;
    sec.innerHTML = s < 10 ? "0" + s : s;
    key = setInterval(countdown_timer, 1000);


}
function start_timer() { 
    user_date  = new Date(document.getElementById("user-date").value);
    user_start.value = "Stop";
    document.getElementById("user-date").disabled  = true;
    document.getElementById("user-date").style.cursor = "not-allowed";
    user_start.onclick = stop_timer; 
    countdown_timer();
}

function stop_timer() {
    if (key)
    {       
        user_start.value = "Start";
        document.getElementById("user-date").disabled  = false;
        document.getElementById("user-date").style.cursor = "default";
        user_start.onclick = start_timer;
        clearInterval(key);
        key = null;
     
    }
}
// const gap = user_tmp_date - user_date;
// console.log("user_tmp_date: " + user_tmp_date.getMilliseconds());
//  console.log("user_date: " + user_date.getMilliseconds());
//if (user_tmp_date > user_date) {
//    gap = user_tmp_date - user_date;
//} else {
//    gap = user_date - user_tmp_date;
//    console.log("user_tmp_date: " + user_tmp_date);
//    console.log("user_date: " + user_date);
//}
//console.log(gap);
//console.log(user_date);
// const y = Math.floor(gap / (1000 * 60 * 60 * 24 * 30 * 12));//(gap / 1000 / 60 / 60 / 24 / 30)% 12);
//const m = Math.floor(gap / (1000 * 60 * 60 * 24 * 30) % 12);//(gap / 1000 / 60 / 60 / 24) % 30);
// console.log("y: " + y);
// console.log("m: " + m);
//console.log("d: " + d);
//console.log("h: " + h);
//console.log("i: " + i);
//console.log("s: " + s);
//document.getElementById("user-values-date").innerHTML = user_tmp_date;
//document.getElementById("user-values-timestamp").innerHTML = user_tmp_date.getDate();
//document.getElementById("user-values-time").innerHTML = user_tmp_date;
// year.innerHTML
//mon




