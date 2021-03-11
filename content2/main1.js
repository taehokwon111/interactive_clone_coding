
let ghost;
const audio = new Audio('/audio/gidam.mp3');
let scrollTop
let h1;
let x = 0;
let y = 0;
let mx = 0;
let my = 0;
let speed = 0.009;
window.onload = function () {
    ghost = document.getElementsByClassName("ghost_img")[0];

    ghost.addEventListener("mouseover", T_MouseFunc, false);
// window.addEventListener("mousemove", T_MouseFuncs, false);

function T_MouseFunc() {
    audio.play();
    }

}


function start_next() {
    location.href="/content3/content.html"

}