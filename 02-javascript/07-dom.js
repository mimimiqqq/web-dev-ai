//HTML이랑 DOM차이가 뭐에요?
//문서 객체 가져오기
console.log(document.body);

//태그로 가져오기
console.log(document.getElementsByTagName("h1"));

//class로 가져오기
console.log(document.getElementsByClassName("testClass"));

//name으로 가져오기
console.log(document.getElementsByName("testName"));

//id로 가져오기
console.log(document.getElementById("testId"));

//querySelector(선택자)  1개
//querySelectorAll(선택자)  여러개 (배열)
//->이 두가지만 아셔도 괜찮아요!
console.log(document.querySelector("#testId2"));
console.log(document.querySelectorAll("div"));

//문서 객체 조작하기
// textContent와 innerHTML의 차이는?

const divs = document.querySelectorAll("div");
divs[0].textContent = "<span>안녕하세요</span>";
divs[1].innerHTML = "<span>안녕하세요</span>";

//텍스트 출력
const result1 = document.querySelector("#result1");
function printText() {
  console.log(result1);
  result1.textContent = "안녕하세요";
}

//input 값 출력

const printInputValue = function () {
  console.log(customer.value);
  result2.textContent = customer.value;
};

const divTetst = document.querySelector("#colorBox");
const changeColor = () => {
  divTetst.style.backgroundColor = "yellow";
};

//classList
const div2 = document.querySelector("#testId2");
div2.classList.add("active"); //클래스 추가

console.log(div2.classList.contains("active")); //해당 클래스명을 가지고 있니/?
div2.classList.remove("active"); //클래스 삭제
console.log(div2.classList.contains("active")); //false
div2.classList.toggle("active"); //있으면 삭제, 없으면 추가

//클래스 토글
function toggleClass() {
  const resultDiv = document.getElementById("result4");
}

//문서 객체 추가 / 삭제
const testId3 = document.querySelector("#tesrId3");
const p = document.createElement("p"); //p태그 생성
p.textContent = "텍스트 추가"; //<p>텍스트추가<p>
testId3.appendChild(p);
const pTarget = document.querySelector("#testId3 p");
pTarget.remove();
