const mBtns = document.querySelectorAll(".mBtn-0");
let mb0 = ['E','S','T','J'];
let mb1 = ['E',"S",'T','J'];
console.log(mBtns[0]);

mBtns[0].addEventListener('click', (e)=>{
  if(e.target.innerText == 'a'){
    e.target.innerText = 'A';
  }else if(e.target.innerText == 'A'){
    e.target.innerText = 'a';
  }
})

mBtns.forEach( function(item, index,list){
  item.addEventListener('click', (e)=>{
    if(e.target.innerText == 'a'){
      e.target.innerText = 'A';
    }else if(e.target.innerText == 'A'){
      e.target.innerText = 'a';
    }

    if(e.target.innerText == 'b'){
      e.target.innerText = 'B';
    }else if(e.target.innerText == 'B'){
      e.target.innerText = 'b';
    }

    if(e.target.innerText == 'c'){
      e.target.innerText = 'C';
    }else if(e.target.innerText == 'C'){
      e.target.innerText = 'c';
    }

    if(e.target.innerText == 'd'){
      e.target.innerText = 'D';
    }else if(e.target.innerText == 'D'){
      e.target.innerText = 'd';
    }
  })
})

function sendM0(mAlpha){

}
