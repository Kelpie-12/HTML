// JavaScript source code

var i = 0;
function increnent() {
    i++;
    let display = document.getElementById("display");
    display.innerHTML = `<h2>${i}</h2>`;
    // document.writeln(i);
}
function show_text() {
    let text = document.getElementById("text").value;
    let display_text = document.getElementById("display_text");
    display_text.innerHTML = text;
}
//  let image = document.getElementById("image");
//  let file = document.getElementById("file");
//  file.innerHTML = image.value;

//function set_image() {
//    let f = file.files[0];
//    if (f) {
//        image.src = URL.createObjectURL(f);
//        localStorage.setItem('myImage', image.src);
//    }
//}
//image.scr = localStorage.getItem('myImage');

//console.log(document.body);
//   let dom = document.getElementById("dom");
let dom = document.querySelector("#dom");
if (dom) {
    //  dom.append("append()");
    // dom.prepend("prepend()");
    const a = document.createElement("span");
    //let b = document.querySelector("#display");
    let s = document.getElementById('display');
    //dom.replaceWith(b);

    dom.style.cssText += "background-color:red;";
    console.log(dom.innerHTML);
}

//console.log(dom);
//dom.innerHTML = "<h2>InnerHTML</h2>";
// dom.outerHTML = "<h2>OuterHTML</h2>";

function switch_button() {
    let btn = document.getElementById('switch');
    let img = btn.src.split('/').at(-1);

    if (img === 'noch.png') {
        btn.src = "img/sun.png";
        btn.style.transform = ' translateX(40px)';
        document.querySelector('.btn_light').style.backgroundColor = "#000";
    }
    else {
        btn.src = "img/noch.png";
        btn.style.transform = ' translateX(-1px)';
        document.querySelector('.btn_light').style.backgroundColor = "#e6f540";
    }
    document.body.style.backgroundColor = img === 'sun.png' ? `white` : `#333`;
    document.body.style.color = img === 'sun.png' ? `#333` : `white`;
    document.body.style.transition = img === 'sun.png' ? `#333` : `white`;
}



let current_time = new Date();
let date_and_time = document.getElementById("date-and-time");
date_and_time.innerHTML = `getDate():\t${current_time.getDate()};<br>`;
date_and_time.append(`getTime():\t${current_time.getTime()};`);
date_and_time.append(`getDay():\t${(new Date(2025, 03 - 1, 16)).toLocaleString("default", { weekday: "long" })};`);

//const WEEK = [""]

function tick_timer() {
    let current_time = new Date();
    if (document.getElementById("show-date").checked) {
        let yyyy = current_time.getFullYear();
        let MM = checkNumber(current_time.getMonth() + 1);
        let dd = checkNumber(current_time.getDate());
        let date_string = `${yyyy}.${MM}.${dd}`;
        document.getElementById("date").innerHTML = date_string;
    }
    else {
        document.getElementById("date").innerHTML = "";
    }

    document.getElementById("weekday").innerHTML =
        document.getElementById("show-weekday").checked ? current_time.toLocaleString("default", { weekday: "long" }) : "";

    let hh = checkNumber(current_time.getHours());
    let mm = checkNumber(current_time.getMinutes());
    let ss = checkNumber(current_time.getSeconds());

    let time_string = `${hh}:${mm}:${ss}`;
    document.getElementById("time").innerHTML = time_string;
    setTimeout(tick_timer, 1000);	//setTimeout(function_pointer, milliseconds) - âûçûâàåò óêàçàííóþ ôóíêöèþ ÷åðåç óêàçàííûé ïðîìåæóòîê âðåìåíè.
}

function checkNumber(i) {
    return i < 10 ? "0" + i : i;
}

function start_timer() {
    //  let user_date_input = document.getElementById("user-date");
    // let user_time_input = document.getElementById("user-time");
    let user_datetime_local = document.getElementById("user-datetime-local");

    let start_timer_button = document.getElementById("start-timer");

    //let user_date = user_date_input.valueAsDate;
    //let user_time = user_time_input.valueAsDate;

    //document.getElementById("user-values-date").innerHTML = user_date;
    //document.getElementById("user-values-time").innerHTML = user_time;
    document.getElementById("user-datetime-local-values").innerHTML = user_datetime_local.value;
    //document.getElementById("user-datetime-local-timestamp").innerHTML = new Date(user_datetime_local.value);
    document.getElementById("user-datetime-local-timestamp").innerHTML = user_datetime_local.valueAsNumber;

    if (start_timer_button.value === "Start" && user_datetime_local.value !== "") {
        start_timer_button.value = "Stop";
        user_datetime_local.disabled = true;
        countdown_timer();
    }
    else {
        start_timer_button.value = "Start";
        user_datetime_local.disabled = false;
    }
}

function countdown_timer() {
    const SECONDS_IN_MINUTE = 60;
    const SECONDS_IN_HOUR = 3600;
    const SECONDS_IN_DAY = 86400;
    const SECONDS_IN_WEEK = 86400 * 7;
    const DAYS_IN_MONTH = 365 / 12;
    const SECONDS_IN_MONTH = DAYS_IN_MONTH * SECONDS_IN_DAY;
    const SECONDS_IN_YEAR = SECONDS_IN_DAY * 365 + SECONDS_IN_HOUR * 6;

    let user_datetime = +new Date(document.getElementById("user-datetime-local").value);
    let current_time = +new Date();
    let timezone_offset = new Date().getTimezoneOffset() / 60;
    //current_time += (timezone_offset * 3600000);
    //	console.log(`${current_time} ------ ${timezone_offset * 3600000}`);

    //document.getElementById("current-timezone").innerHTML = `Current timezone: ${timezone_offset}`
 //   document.getElementById("user-timezone").innerHTML = `User timezone: ${document.getElementById("user-datetime-local").valueAsDate}`
    current_time = Math.trunc(current_time / 1000);
    user_datetime = Math.trunc(user_datetime / 1000);
    document.getElementById("current-timestamp").innerHTML = current_time;
    let timestamp = user_datetime - current_time;
    let time_of_day = timestamp % SECONDS_IN_DAY;

  

    let years = Math.trunc(timestamp / SECONDS_IN_YEAR);
    let display = document.getElementById("display");
    if (years != 0) {
        timestamp = Math.trunc(timestamp % (years * SECONDS_IN_YEAR));
        let years_unit = document.getElementById("years_unit");
        if (years == null)
            display.prepend(createTimeBlock("years", years));
    }
    else removeTimeBlock("years");


    let months = Math.trunc(timestamp / SECONDS_IN_MONTH);
    if (months > 0) {
        timestamp = Math.trunc(timestamp % (months * SECONDS_IN_MONTH));
        let months_unit = document.getElementById("months_unit");
        if (months_unit == null) {
            let years_unit = document.getElementById("years_unit");
            display.prepend(createTimeBlock("months", months));
            //if(years_unit == null)display.app
        }
    } else removeTimeBlock("months");

    let weeks = Math.trunc(timestamp / SECONDS_IN_WEEK);
    if (weeks > 0) {
        timestamp = Math.trunc(timestamp % (weeks * SECONDS_IN_WEEK));
    }

    let days = Math.trunc(timestamp / SECONDS_IN_DAY);
    if (days > 0) {
        timestamp = Math.trunc(timestamp % (days * SECONDS_IN_DAY));
    }

    let hours = Math.trunc(time_of_day / SECONDS_IN_HOUR);
    if (hours > 0) {
        time_of_day = Math.trunc(time_of_day % (hours * SECONDS_IN_HOUR));
    }

    let minutes = Math.trunc(time_of_day / SECONDS_IN_MINUTE);
    if (minutes > 0) {
        time_of_day = Math.trunc(time_of_day % (minutes * SECONDS_IN_MINUTE));
    }

    let seconds = Math.trunc(time_of_day);

    let debug_display = document.getElementById("display");
    console.log(debug_display.children.length);

    document.getElementById("hours_unit").innerHTML = hours;
    document.getElementById("minutes_unit").innerHTML = minutes;
    document.getElementById("seconds_unit").innerHTML = seconds;

    document.getElementById("time-units").innerHTML =
        `${years} years, ${months} monthes, ${weeks} weeks, ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;

    if (document.getElementById("start-timer").value === 'Stop')
        setTimeout(countdown_timer, 1000);
}

function createTimeBlock(name, value) {
    let time_block = document.createElement("div");
    time_block.className = "time_block";

    let unit = document.createElement("div");
    unit.id = `${name}_unit`;
    unit.className = "time_unit";
    unit.innerHTML = checkNumber(value);

    let marker = document.createElement("div");
    marker.id = `${name}_marker`;
    marker.className = "time_marker";
    marker.innerHTML = name;

    time_block.append(unit);
    time_block.append(marker);

    return time_block;
}

function removeTimeBlock(name) {
    let unit = document.getElementById(`${name}_unit`);
    if (unit != null) {
        let block = unit.parentElement;
        let display = block.parentElement;
        display.removeChild(block);
    }
}

function convert_binary() {
    let num = document.getElementById('input_num_desimal').value;
    if (/^[01]+$/gm.test(num)) {
        document.getElementById('result-decimal').innerHTML = parseInt(num, 2);
    } else {
        document.getElementById('result-decimal').innerHTML = "Incorect input";
    }
    //console.log(num);

}