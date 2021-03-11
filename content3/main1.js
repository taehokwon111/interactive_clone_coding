let count = 0;
let right_eye;
let left_eye;
let x = 0;
let y = 0;
let mx = 0;
let my = 0;
let speed = 0.1;
window.onload = function () {
    right_eye = document.getElementsByClassName("right_e")[0];
    left_eye = document.getElementsByClassName("left_e")[0];
    text1 = document.getElementsByClassName("con-1")[0];

setInterval(() => {
    if (count == 0) {
        text1.style.opacity = 1;
        count = 1;
    }else{
        text1.style.opacity = 0.8;
        count = 0;
    }
}, 500);

window.addEventListener("mousemove", T_MouseFunc, false);

function T_MouseFunc(e) {
    x = (e.clientX - window.innerWidth / 2);
    y = (e.clientY - window.innerHeight / 2);
    
    }
    loop();

}

function loop() {
    mx += (x - mx) * speed;
    my += (y - my) * speed;

    right_eye.style.transform = "translate("+(mx/70)+"px, "+(my/70)+"px)";
    left_eye.style.transform = "translate("+(mx/70)+"px, "+(my/70)+"px)";
    window.requestAnimationFrame(loop);
}

function start_next() {
    location.href="/content1/content.html"

}
