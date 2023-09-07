let pixelContainer = document.querySelector(".pixel-container");
let clearBtn = document.getElementById('clear-btn');
let colorInput = document.getElementById('color-input');
let paintBtn = document.getElementById('paint-btn');
let eraseBtn = document.getElementById('erase-btn');
let pixelResolution = document.getElementById('resolution-range');
let resolutionValue = document.getElementById('resolution-value');

// 이벤트 객체 - 터치 스크린 디바이스에서는 터치로 그릴 수 있도록
let events = {
    mouse:{
        down: "mousedown",
        move: "mousemove",
        up: "mouseup"

    },
    touch:{
        down: "touchstart",
        move: "touchmove",
        up: "touchend"
    }
};

//터치 디바이스인지 여부 체크해야됨
function isTouchDevise(){   //터치 디바이스 체크하는 함수
    return window.ontouchstart !== undefined;
}
let touchDevise = isTouchDevise();

let draw = false;
let erase = false;

//pixel 생성 - range input값이 변경될 때마다
pixelResolution.addEventListener('change', function(e){
    resolutionValue.innerText = e.target.value;
});

