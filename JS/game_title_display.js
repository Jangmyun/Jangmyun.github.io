var kbImgs = document.querySelectorAll(".kb div");  //커비 이미지박스 노드리스트
var i = 1;
console.log(kbImgs);
//순차적으로 별의 커비 이미지가 보이도록 함
//노드 리스트는 엄밀히 배열이 아니므로 forEach.call 메서드를 사용하면 Array의 메서드를 빌려사용할 수 있다.
Array.prototype.forEach.call(kbImgs, function(kbImg){
    setTimeout(function(){ kbImg.classList.add("visible")} , 300*i);
    //7번째 사진 (별의커비 로고)부터 다른 사진이 뜨는 속도의 2배 느리게 보이도록 함
    if(i >= 7 ) i += 2;        
    else i++;
})