let button = document.getElementById('no');

const x = 400;
const y = 300;


let height = window.innerHeight - 50;
let width = window.innerWidth - 50;


let height2 = (y-window.innerHeight - 50)/2;
let width2 = (x-window.innerWidth - 50)/2;

button.addEventListener('mouseover', function(){
    button.style.position = "absolute";
    button.style.top = Math.random() * height2 + "px";
    button.style.left = Math.random() * width2 + "px";
})