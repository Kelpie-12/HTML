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



//let current_time = new Date();
//let date_and_time = document.getElementById("date-and-time");
//date_and_time.innerHTML = `getDate():\t${current_time.getDate()};<br>`;
//date_and_time.append(`getTime():\t${current_time.getTime()};`);
//date_and_time.append(`getDay():\t${(new Date(2025, 02, 16)).toLocaleString("default", { weekday: "long" })};`);

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


const out = document.querySelector('.result_date');
document.querySelector('#date_user').onclick = get_date;
document.querySelector('#decimal').onclick = convert_binary;
function get_date() {
    let today_date = new Date(),
        user_date = new Date(document.getElementById('input_num').value),
        date = Math.floor((today_date.getTime() - user_date.getTime()) / 1000);

    let tmp = 0, tmpL = date;


    /*
    years = Math.floor(t / (1000 * 60 * 60 * 24 * 30 * 12)),
    months = Math.floor(t / (1000 * 60 * 60 * 24 * 30) % 12),
    days = Math.floor(t / (1000 * 60 * 60 * 24) % 30),
    hours = Math.floor((t / (1000 * 60 * 60)) % 24),
    minutes = Math.floor((t / (1000 * 60)) % 60),
    seconds = Math.floor((t / 1000) % 60); 
    */
    //tmp = Math.floor(tmpL / (30 * 12 * 24 * 60 * 60));
    //tmpL -= tmp * (30 * 12 * 24 * 60 * 60);
    //console.log(tmpL);
    //if (tmp < 10) {
    //    tmp = '0' + tmp;
    //}
    //document.querySelector('#years span').innerHTML = tmp;



    tmp = Math.floor(tmpL / (12 * 24 * 60 * 60));
    tmpL -= tmp * (12 * 24 * 60 * 60);
    if (tmp < 10) {
        tmp = '0' + tmp;
    }
    document.querySelector('#months span').innerHTML = tmp;

    tmp = Math.floor(tmpL / (24 * 60 * 60));
    tmpL -= tmp * (24 * 60 * 60);
    if (tmp < 10) {
        tmp = '0' + tmp;
    }
    document.querySelector('#days span').innerHTML = tmp;

    tmp = Math.floor(tmpL / (60 * 60));
    tmpL -= tmp * (60 * 60);
    if (tmp < 10) {
        tmp = '0' + tmp;
    }
    document.querySelector('#hours span').innerHTML = tmp;

    tmp = Math.floor((tmpL / 60) % 60);
    tmpL -= tmp * 60;
    if (tmp < 10) {
        tmp = '0' + tmp;
    }
    document.querySelector('#minutes span').innerHTML = tmp;

    if (tmpL < 10) {
        tmpL = '0' + tmpL;
    }
    document.querySelector('#seconds span').innerHTML = tmpL;

    setInterval(get_date, 1000);
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