let pixelContainer = document.querySelector(".pixel-container");
let clearBtn = document.getElementById('clear-btn');
let colorInput = document.getElementById('color-input');
let paintBtn = document.getElementById('paint-btn');
let eraseBtn = document.getElementById('erase-btn');
let pixelResolution = document.getElementById('resolution-range');
let resolutionValue = document.getElementById('resolution-value');

//초기 픽셀값 초기화
resolutionValue.innerText = pixelResolution.value;

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
    let count = 0;
    let resolution = e.target.value;
    // input값 변경되면 기존 픽셀 컨테이너 안에 있던 픽셀 다 없애기
    pixelContainer.innerHTML = "";
    //range input 옆에 값 변경되도록
    resolutionValue.innerText = e.target.value;
    
    for(let i=0; i<resolution; i++){
        for(let j=0; j<resolution; j++){
            let pixel = document.createElement("div");
            pixel.classList('pixel');
            pixel.setAttribute('id', `pixel-${count++}`);

            // 마우스 누르거나 터치 시작한 시점
            pixel.addEventListener(events[deviceType].down, function(e){
                draw = true;

                if(erase) {
                    pixel.style.backgroundColor='white';
                }else {
                    pixel.style.background = colorInput.value;
                }
            });

        }
    }

    
});

