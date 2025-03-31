// JavaScript source code
var area = document.getElementById('area');
var cell = document.getElementsByClassName('cell');
var cur_player = document.getElementById("cur_player");


var player = "x";
var stat = {
    'x': 0,
    'o': 0,
    'd': 0
}

var win = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
];

for (let i = 1; i <= 9; i++) {
    area.innerHTML += "<div class='cell' pos=" + i + "></div>";
}

for (let i = 0; i < cell.length; i++) {
    cell[i].addEventListener('click', cell_click, false);
}
function cell_click() {
    let data = [];
    if (!this.innerHTML) {
        this.innerHTML = player;
    } else {
        alert(`Ячейка занята`);
    }
    for (let i in cell) {
        if (cell[i].innerHTML == player) {
            data.push(parseInt(cell[i].getAttribute('pos')));
        }
    }

    console.log(data);

    if (check_win(data)) {
        restart("Win " + player);
        stat[player] += 1;
    } else {
        let draw = true;
        for (let i in cell) {
            if (cell[i].innerHTML == '') draw = false;
        }
        if (draw) {
            stat.d += 1;
            restart("Draw");

        }
    }
    player = player == 'x' ? 'o' : 'x';
    cur_player.innerHTML = player.toUpperCase();
}
function check_win(data) {
    for (let i in win) {
        let w = true;
        for (let j in win[i]) {
            let id = win[i][j];
            let tmp = data.indexOf(id);
            if (tmp == -1) {
                w = false;
            }
        }
        if (w) {
            return true;
        }
    }
    return false;
}
function restart(text) {

    alert(text);
    for (let i = 0; i < cell.length; i++) {
        cell[i].innerHTML = '';
    }
    update_stat();
}
function update_stat() {
    document.getElementById('s_x').innerHTML = stat.x;
    document.getElementById('s_o').innerHTML = stat.o;
    document.getElementById('s_d').innerHTML = stat.d;
}