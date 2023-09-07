let pixelContainer = document.querySelector(".pixel-container");
let clearBtn = document.getElementById('clear-btn');
let colorInput = document.getElementById('color-input');
let paintBtn = document.getElementById('paint-btn');
let eraseBtn = document.getElementById('erase-btn');
let pixelResolution = document.getElementById('resolution-range');
let resolutionValue = document.getElementById('resolution-value');

// 이벤트 객체 - deviceType에 따라 다른 이벤트 적용 (마우스, 터치)
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
let deviceType = '';
function isTouchDevice(){   //터치 디바이스 체크하는 함수
    if(window.ontouchstart !== undefined) {
        deviceType = 'touch';
        console.log(deviceType);
        return true;
    }else if( !(window.ontouchstart !== undefined)){
        deviceType = 'mouse';
        console.log(deviceType);
        return false;
    }
}
isTouchDevice();

// color input 바뀔때마다 바뀐 값 저장
let pixelColor = '#000';
colorInput.addEventListener('change', function(e){
    pixelColor = e.target.value;
});

// grid resolution 바뀔때마다 바뀐 값 저장
let resolution =24;
pixelResolution.addEventListener('change', function(e){
    resolution = e.target.value;
    resolutionValue.innerText = resolution;
    newPixels(resolution);
});
//초기 픽셀값 초기화
resolutionValue.innerText = resolution;
newPixels(resolution);

// 마우스 클릭한 채로 드래그하면 그려지고 지워지도록 boolean 값
let draw = false;
let erase = false;

eraseBtn.addEventListener('onclick', function(e){
    erase = true;
    console.log(erase);
});
clearBtn.addEventListener('onclick', function(e){
    newPixels(resolution);
});


// pixel 생성 함수 
function newPixels(resol) {
    // 1씩 증가하며 픽셀마다 고유의 id값을 가지도록 함
    let idCounter = 0;
    pixelContainer.innerHTML = "";
    for(let i=0; i<resol; i++){
        for(let j=0; j<resol; j++){
            pixelContainer.innerHTML += `
            <div class="pixel" id="pixel-${idCounter}" style="width: ${100/resol}%; padding-bottom: ${100/resol}%"></div>
            `
            idCounter ++ ; 
        }
    }
    pixelEventListener();
}

//생성된 pixel 에 이벤트리스너 적용
function pixelEventListener(){
    let pixels = document.querySelectorAll('.pixel');
    pixels.forEach(function(pixel){
        // 마우스를 누르거나 화면을 터치하면 draw = true 
        pixel.addEventListener(events[deviceType].down, function(e){
            draw = true;
        });
        // 마우스를 움직이거나 터치한채로 움직이면 그려지도록
        pixel.addEventListener('mouseover', function(e){
            if( draw && !erase){
                e.target.style.backgroundColor = pixelColor;
            }else if( draw && erase){
                e.target.style.backgroundColor = '#FFF';
            }
        });
        pixel.addEventListener(events[deviceType].up , function(e){
            draw = false;
        });
    });
}
pixelEventListener();


function checker(elementId){
    let pixels = document.querySelectorAll(".pixel");

    pixels.forEach(function(pixel){
        if(pixel.id == elementId) {
            if(draw && !erase){
                pixel.style.backgroundColor = colorInput.value;
            }
        }
    })
}
