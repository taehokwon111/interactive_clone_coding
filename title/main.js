
let title;
let x = 0;
let y = 0;
let mx = 0;
let my = 0;
let speed = 0.009;
window.onload = function () {
title = document.getElementsByClassName("title")[0];

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

    title.style.transform = "translate("+-(mx/10)+"px, "+-(my/10)+"px)";
    window.requestAnimationFrame(loop);
}

function start_next() {
    location.href="/content1/content.html"

}
