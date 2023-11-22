if(localStorage.getItem('todo')==undefined){
  localStorage.setItem('todo', JSON.stringify([{title:'Eat Chicken', completed:false},{title:'Buy a book', completed:false}]));
}

// 타이틀 입력란 title input
const titleInput = document.querySelector('#titleInput');
// input button
const inputButton = document.querySelector('#InputButton');
// input button imaget
const inputButtonImg = document.querySelector('.plus-button');

// 인풋값 바뀔 때 plus button 활성화
titleInput.addEventListener('input', (e)=>{
  if(e.target.value != ''){
    inputButtonImg.style.opacity = '1';
    inputButton.disabled = false;
  }else if(e.target.value == ''){
    inputButtonImg.style.opacity = '0';
    inputButton.disabled = true;
  }
});

inputButton.addEventListener('click', (e)=>{
  let inputValue = titleInput.value;
  let todo = JSON.parse(localStorage.getItem('todo'));
  todo.push({title:inputValue, completed: false});
  localStorage.setItem('todo', JSON.stringify(todo));
  
})










// // todo list element
// const listContainer = document.querySelector(".todo-list");
// const listInput = document.getElementById("listInput");
// const listInputButton = document.getElementById("listInputButton");
// const inputMessage = document.querySelector(".input-message");

// let todoList = [];
// let todoId = 0;

// // TODO 인풋 값
// let listInputValue;


// // Add버튼 이벤트리스너
// listInputButton.addEventListener("click", (e) => {
//   addTodo();
//   generateTodo();
// });

// // todoList 객체배열 수 만큼 반복해서 li태그 만드는 함수
// function generateTodo(){
//   listContainer.innerHTML = ``;
//   todoList.forEach((item)=>{
//     listContainer.innerHTML += `
//       <li id="todo-${item.id}">${item.todo} <button class="todo-delete-btn" id="todo-${item.id}-btn">delete</button></li>
//     `;
//     let deleteButtons = document.getElementsByClassName
//     // document.querySelector(`#todo-${item.id}-btn`).addEventListener('click', function(e){
//     //   document.querySelector(`#todo-${item.id}`).remove();
//     //   let dupIndex = todoList.findIndex((todoObj)=>{
//     //     return todoObj.id === item.id;
//     //   });
//     //   todoList.splice(dupIndex,1);
//     //   console.log(todoList);
//     // })
//   })
// }

// // Todo Add버튼 클릭시 이벤트 함수
// function addTodo(){
//   //현재 input값을 변수에 저장
//   listInputValue = listInput.value;
//   // input 값과 priority값을 add입력 전으로 돌림
//   listInput.value = '';

//   // 작성한 todo의 제목이 기존의 값과 동일한지 체크
//   let isDuplicated = todoList.find((todoObj)=>{
//     return todoObj.todo === listInputValue;
//   })
//   // todo 제목이 기존에 존재한다면 메세지 출력 
//   if (isDuplicated !=undefined){
//     inputMessage.innerText = `It's already exist!`;
//     return;
//   }
//   inputMessage.innerText = '';

//   // Input태그에 아무것도 적지 않았을 때
//   if (listInputValue == "") {
//     inputMessage.innerText = "Enter To Do";
//     return;
//   }
//   inputMessage.innerText = "";

//   // 만들어진 todo 객체 변수에 저장
//   let todo = { id:todoId , todo: listInputValue};
//   // todoID값 1증가    
//   todoId+=1;
  
//   // todo 객체 todoList 배열에 추가
//   todoList.push(todo);
//   console.log(todoList);
// }



