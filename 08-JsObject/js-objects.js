// JavaScript source code

/*let obj1 = new Object();
//let menu = {};
//menu.width = 300;
//menu.height = 200;
//console.log(menu);
//delete menu.height;
//console.log(menu);
//menu.items = 3;
//console.log(menu);
//for (let i in menu) {
//    console.log(i);
//}
//console.log(`Menu:key ${Object.keys(menu)}`);
//Object.keys(menu).forEach((key) => (document.write(menu[key] + ` <br>`)));

//let obj = {
//    name: "name", colors: {
//        first: "black", second: "white"
//    },
//    color: ["red", "green", "blue"],
//    hello: function () { document.write(`Hello`); }
//};
//obj.hello();
//document.write("<br>" + obj);
//document.write(obj.color.filter(function (elem) { return elem.lenght > 5; }));
//let arr = obj.color.map(function (elem) { return elem });

//document.write("<br>" + arr);*/

let user = {
    login: 'client',
    password: '123',
    role: 'guest'
};
console.log(user);
document.write(user.login);
document.write('<hr>');
//let { login, password, role } = user;
//document.write("<br>");
//document.write(login + "<br>" + password + '<br>' + role);
let { login, ...rest } = user;
document.write(login + "<br>" + rest);
console.log(rest);
let fib = [1, 2, 3, 5, 8, 13, 21, 34];
let { a, b, c } = fib;
document.write('<div class="sequence">');
document.write(`<div>${a}</div>`);
document.write(`<div>${b}</div>`);
document.write(`<div>${c}</div>`);
document.write('</div >');
