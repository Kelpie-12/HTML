// JavaScript source code
const check = document.getElementById("btn-check");
const answer = [
   /* { q_1:}*/[true, false, false],
   /* { q_2:}*/[false, true, false],
   /* { q_3:}*/[false, true, false],
   /* { q_4:}*/[false, false, true],
   /* { q_5:}*/[true, false, false]];

function check_answers() {
    let res = 0;
    for (let i = 1; i <= 5; i++) {
        for (let j = 1; j <= 3; j++) {
            let a = document.getElementById(`${i}-${j}`);
            if (a.checked && answer[i - 1][j - 1] == true) {
                console.log(a);
                document.getElementById(`q-${i}-${j}`).style.backgroundColor = "green";
                res += 100;  // user_answer[i - 1][j - 1] = true;
            }
            //if (answers[j].checked && answer[i - 1][j] == true) {
            //    console.log(`123`);
            //}
        }
    }
    check.disabled = true;
    let tmp = document.querySelector('.result');
    tmp.style.visibility = "initial";
    tmp.innerHTML += `${res} - points`;
}
function restart_game() {
    for (let i = 1; i <= 5; i++) {
        for (let j = 1; j <= 3; j++) {
            let s = document.getElementById(`q-${i}-${j}`);
            s.style.backgroundColor = "transparent";
            document.getElementById(`${i}-${j}`).checked=false;
        }
    }
    check.disabled = false;
    let tmp = document.querySelector('.result');
    tmp.style.visibility = "hidden";
}