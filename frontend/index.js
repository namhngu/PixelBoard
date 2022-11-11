const WHITE = '#000000';
const size = 30;
const gameScreen = document.getElementById('gameScreen');
const colorInput = document.getElementById('colorInput');
const gameSize = 600;
const canva = document.getElementById('canvas');

const socket = io("http://localhost:3000", {
    withCredentials: true,
    extraHeaders: {
      "my-custom-header": "abcd"
    }
});

//socket.on('init', handleInit);

let canvas, ctx;
var x;
var y;
var paints;

function init() {
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');
    screenBounds = canva.getBoundingClientRect();

    canvas.width = canvas.height = gameSize;
    ctx.fillStyle = WHITE;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    document.addEventListener('mousedown', mousedown);
    paints = 5;
}

function mousedown(e) {
    screenBounds = canva.getBoundingClientRect();
    x = Math.floor((e.clientX - screenBounds.left)/size);
    y = Math.floor((e.clientY - screenBounds.top)/size);
    color = colorInput.value;
    if (paints > 0  && 0 <= x && x <= (gameSize/size) && 0 <= y && y <= (gameSize/size) && isColor(color)){
        console.log(color);
        paintPixel(x,y, color);
        paints--;
    } else {
        console.log("Wrong color");
    }
}

init();

function paintPixel(x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x * size, y * size, size, size);
}

function isColor(color){
    var s = new Option().style;
    s.color = color;
    return s.color !== '';
}

function handleInit(msg) {
    console.log(msg);
}