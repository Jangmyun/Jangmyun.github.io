const inputNodes = document.querySelectorAll(".mbtiInput");
const objKeys = ["best", "good", "soso", "notbad", "bad"];
const friendlinessObj = {
  best: ["best", 5],
  good: ["good", 4],
  soso: ["soso", 3],
  notbad: ["notbad", 2],
  bad: ["bad", 1],
};
let mbtiInputs = ["    ", "    "];

const resultBox = document.querySelector(".result");
const resultDescription = document.querySelector(".resultDescription");

Array.prototype.forEach.call(inputNodes, function (item, index) {
  console.log(item);
  item.addEventListener("input", (e) => {
    mbtiInputs[index] = item.value;
    console.log(mbtiInputs[index]);
    let result = mbtiChecker(mbtiInputs[0], mbtiInputs[1]);
    if (result != undefined && result !=null) {
      const resultArr = friendlinessObj[result];
      resultBox.innerHTML = resultArr[0];
      
      if( resultArr[1] == 0){
        resultDescription.innerHTML = "💔";
      } else{
        resultDescription.innerHTML = Array(resultArr[1]+1).join("❤️");
      }
    }
  });
});

let data;

fetch("./mbtiData.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (myJSON) {
    console.log(JSON.stringify(myJSON));
    data = myJSON;
  });

const mbtiObjArr = data;
console.log("\n");
console.log(mbtiObjArr);

function mbtiChecker(first, second) {
  let output;
  let firstMBTI;
  let firstMBTIObj;

  for (const mbtiObj of data) {
    if (mbtiObj["mbti"] == first) {
      firstMBTI = mbtiObj["mbti"];
      firstMBTIObj = mbtiObj;
    }
  }
  console.log(firstMBTI);

  for (const key of objKeys) {
    for (let i = 0; i < firstMBTIObj[key].length; i++) {
      if (firstMBTIObj[key][i] == second && second != undefined) {
        output = key;
      }
    }
  }
  console.log(output);
  return output;
}
