const inputNodes = document.querySelectorAll(".mbtiInput");
const friendliness = ["mbti", "best", "good", "soso", "notbad", "bad"];
let mbtiInputs = ["    ", "    "];

Array.prototype.forEach.call(inputNodes, function (item, index) {
  console.log(item);
  item.addEventListener("input", (e) => {
    mbtiInputs[index] = item.value;
    console.log(mbtiInputs[index]);
  });
});

mbtiObjArr = fetch("./mbtiData.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (myJSON) {
    console.log(JSON.stringify(myJSON));
  });

function mbtiChecker(mbti) {}

// const container = document.querySelector(".container");

// const input0 = document.querySelector(".input0");

// const oppositeMbti = {
//   e: "i",
//   i: "e",
//   s: "n",
//   n: "s",
//   t: "f",
//   f: "t",
//   j: "p",
//   p: "j",
// };

// function makeButton(a) {
//   for (let i = 0; i < a; i++) {
//     container.innerHTML += `
//     <div class="buttonBox" id="bb${i}">
//       <div class="mbti-btn">
//         <button class="ei selectBtn" id="e${i}" >E</button>
//         <button class="ei selectBtn" id="i${i}">I</button>
//       </div>
//       <div class="mbti-btn">
//         <button class="sn selectBtn" id="s${i}">S</button>
//         <button class="sn selectBtn" id="n${i}">N</button>
//       </div>
//       <div class="mbti-btn">
//         <button class="tf selectBtn" id="t${i}">T</button>
//         <button class="tf selectBtn" id="f${i}">F</button>
//       </div>
//       <div class="mbti-btn">
//         <button class="jp selectBtn" id="j${i}">J</button>
//         <button class="jp selectBtn" id="p${i}">P</button>
//       </div>
//   </div>`;
//   }
// }
// function addButtonEvent() {
//   const selectBtn = document.querySelectorAll(".selectBtn");
//   selectBtn.forEach((currentValue, index, listObj) => {});
// }
