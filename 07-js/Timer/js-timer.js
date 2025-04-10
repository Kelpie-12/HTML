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
var music = new Audio("/music/sound.mp3");
var tmp = -1;
/*console.log("user_date: " + user_date);*/
//const user_tmp_date = new Date();
function countdown_timer() {
    const today = Date.now();
   // console.log("today: " + today);
    //  const gap =  newY-today ;
    let gap = -1;
   
    gap = Math.abs(Math.trunc(user_date - today)) / 1000;
    tmp = gap > 0 ? gap : -gap;
    let y = Math.trunc(tmp / (60 * 60 * 24 * 30 * 12));
    tmp -= y * (60 * 60 * 24 * 30 * 12);

    let m = Math.trunc(tmp / (60 * 60 * 24 * 30));
    tmp -= m * (60 * 60 * 24 * 30);

    let d = Math.trunc(tmp / 86400);
    tmp -= d * 86400;

    let h = Math.trunc(tmp / 3600);
    tmp -= h * 3600;

    let i = Math.trunc(tmp / 60);
    tmp -= i * 60;


    let s = Math.trunc(tmp);
    if (i==0&s==0) {
        music.play();
        stop_timer();
        return;
    }

    //const d = Math.floor(gap / 1000 / 60 / 60 / 24);//(gap / (1000 / 60 / 60 / 24) % 28);
    //const h = Math.floor((gap / 1000 / 60 / 60) % 24);//(gap / ((1000 * 60 * 60)) % 24);
    //const i = Math.floor((gap / 1000 / 60) % 60);//(gap / ((1000 * 60)) % 60);
    //const s = Math.floor((gap / 1000) % 60);//(gap / (1000) % 60);
    if (y > 0) {

        if (document.querySelector("#year") == null) {
            document.querySelector(".countdown_timer").append(create_block_time("year", y));
        } else {
            document.querySelector("#year").innerHTML = y < 10 ? "0" + y : y;
        }
    } else {
        delete_block_time("y");
    }

    if (m > 0) {
        if (document.querySelector("#month") == null) {
            document.querySelector(".countdown_timer").append(create_block_time("month", m));
        } else {
            document.querySelector("#month").innerHTML = m < 10 ? "0" + m : m;
        }
    } else {
        delete_block_time("m");
    }


    if (d > 0) {
        if (document.querySelector("#day") == null) {
            document.querySelector(".countdown_timer").append(create_block_time("day", d));
        } else {
            document.querySelector("#day").innerHTML = d < 10 ? "0" + d : d;
        }
    } else {
        delete_block_time("d");
    }
    if (h > 0) {

        if (document.querySelector("#hour") == null) {
            document.querySelector(".countdown_timer").append(create_block_time("hour", h));
        } else {
            document.querySelector("#hour").innerHTML = h < 10 ? "0" + h : h;
        }
    } else {
        delete_block_time("h");
    }
    if (i > 0) {
        if (document.querySelector("#min") == null) {
            document.querySelector(".countdown_timer").append(create_block_time("min", i));
        } else {
            document.querySelector("#min").innerHTML = i < 10 ? "0" + i : i;
        }
    } else {
        delete_block_time("m");
    }
    if (s > 0) {
        if (document.querySelector("#sec") == null) {
            document.querySelector(".countdown_timer").append(create_block_time("sec", s));
        }
        else {
            document.querySelector("#sec").innerHTML = s < 10 ? "0" + s : s;
        }
    } else {
        delete_block_time("s");
    }
    key = setTimeout(countdown_timer, 1000);


}
function delete_block_time(name) {
    if (document.querySelector(`#${name}`) != null) {
        // document.querySelector(".countdown_timer").removeChild(document.querySelector(`#${name}`).remove());
        document.querySelector(`#${name}`).remove();

    }
}
function create_block_time(name, number) {
    let tmp_div = document.createElement("div");
    let tmp_h2 = document.createElement("h2");
    let tmp_p = document.createElement("p");
    tmp_div.id = name[0];
    tmp_div.className = "timer";
    tmp_h2.id = name;
    tmp_h2.innerHTML = number < 10 ? "0" + number : number;
    tmp_p.innerHTML = `${name}`;
    tmp_div.append(tmp_h2);
    tmp_div.append(tmp_p);

    return tmp_div;
}
function start_timer() {
    user_date = new Date(document.getElementById("user-date").value);
    user_start.value = "Stop";
    document.getElementById("user-date").disabled = true;
    document.getElementById("user-date").style.cursor = "not-allowed";
    user_start.onclick = stop_timer;
    countdown_timer();
}

function stop_timer() {
    if (key) {
        user_start.value = "Start";
        document.getElementById("user-date").disabled = false;
        document.getElementById("user-date").style.cursor = "default";
        user_start.onclick = start_timer;
        clearTimeout(key);
        //   clearInterval(key);
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




