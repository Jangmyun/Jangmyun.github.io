let pixelContainer = document.querySelector(".pixel-container");
let clearBtn = document.getElementById('clear-btn');
let colorInput = document.getElementById('color-input');
let paintBtn = document.getElementById('paint-btn');
let eraseBtn = document.getElementById('erase-btn');
let pixelResolution = document.getElementById('resolution-range');
let resolutionValue = document.getElementById('resolution-value');

// color input 바뀔때마다 바뀐 값 저장
let pixelColor = 'white';
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

let draw = false;
let erase = false;

// pixel 생성 함수 
function newPixels(resol) {
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
}

//생성된 pixel 에 이벤트리스너 적용
function pixelEventListener(){
    let pixels = document.querySelectorAll('.pixel');
    pixels.forEach(function(pixel){
        pixel.addEventListener(events[deviceType].down, function(e){
            draw = true;
        });
    });
}



// //pixel 생성 - range input값이 변경될 때마다
// pixelResolution.addEventListener('change', function(e){
//     let count = 0;
//     let resolution = e.target.value;
//     // input값 변경되면 기존 픽셀 컨테이너 안에 있던 픽셀 다 없애기
//     pixelContainer.innerHTML = "";
//     //range input 옆에 값 변경되도록
//     resolutionValue.innerText = e.target.value;
    
//     for(let i=0; i<resolution; i++){
//         for(let j=0; j<resolution; j++){
//             let pixel = document.createElement("div");
//             pixel.classList.add('pixel');
//             pixel.setAttribute('id', `pixel-${count++}`);
//             pixel.style.paddingBottom = `${100/resolution}%`;
//             pixel.style.width = `${100/resolution}%`;
//             pixel.style.backgroundColor = 'white';

//             // 마우스 누르거나 터치 시작한 시점
//             pixel.addEventListener(events[touchDevise].down, function(e){
//                 draw = true;

//                 if(erase) {
//                     pixel.style.backgroundColor='white';
//                 }else {
//                     pixel.style.background = colorInput.value;
//                 }
//             });
//             // 마우스 움직이거나 터치한 상태로 움직일 때
//             pixel.addEventListener(events[touchDevise].move, function(e){
//                 let pixelId = document.elementsFromPoint(
//                     isTouchDevise() ? e.clientX : e.touches[0].clientX,
//                     isTouchDevise() ? e.clientY : e.touches[0].clientY
//                 ).id;
//                 checker(elementId);
//             });
//             // 마우스 클릭 떼거나 터치 끝나는 시점
//             pixel.addEventListener(events[touchDevise].up, function(e){
//                 draw = false;
//             });
//             pixelContainer.innerHTML+= pixel.outerHTML;
//             console.log
//         }
//     }
// });

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
