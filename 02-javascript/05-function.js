//alert("!!!"); //알림창

//1. 매개변수 x, 리턴값 x
function sayHello() {
  console.log("안녕하세요");
}

sayHello(); //함수 호출을 한다.
sayHello();

//2. 매개변수(parameter) 는 있고, 리턴값은 x
//기본값이 없으면 undefined
function greet(name = "게스트") {
  console.log(`${name}님, 안녕하세요.`);
}

greet("나혜진");
greet("나혜진");
greet();

//3. 매개변수 x, 리턴값o  (x값은 없고 결과y는 있는)
//return : 함수 호출 결과를 리턴하던가, 함수를 종료하던가..
function getNumber() {
  return 1049;
}

console.log(getNumber());

//4.매개변수도 있고, 리턴값도 있고
function add(a, b) {
  return a + b;
}
console.log(add(10, 20));
console.log(add(30, 20));

//변수의 유효범위(Scope)
const num1 = 100; //전역변수 전체적으로 다 쓸수있는 변수.내부든 외부든.
function sample1() {
  const num1 = 200; //중괄호 안에서만 쓰게 되면 지역변수. 안에서만 써야함.->지역scope
  //
  console.log(`sample 내부 : ${num1}`); //200
}
sample1();
console.log(`sample1 외부 : ${num1}`); //100

//선언적 함수(Function Declaration)
//호이스팅 : 선언 이전에 호출 가능
function multiply(a, b) {
  return a * b;
}
console.log(multiply(3, 4));

//익명 함수(Function Expression)
//함수 이름이 없음

const subtract = function (a, b) {
  return a - b;
};
console.log(subtract(5, 8));

//화살표 함수(Arrow Function)
//function 대신 화살표(=>) 사용
const divide = (a, b) => {
  return a / b;
};
console.log(divide(12, 3));

//콜백 함수
function callfunc(callback) {
  console.log("함수 호출 전~");
  callback();
  console.log("함수 호출 후!");
}
function call() {
  console.log("안녕하세요~ 콜백 함수 호출!");
}

callfunc(call);

// 배열 관련 콜백 함수들
const numbers = [1, 2, 3, 4, 5];
//forEach - 배열의 각 요소 마다 콜백 실행
numbers.forEach((value, index, array) => {
  console.log(value, index, array);
});
//map  -각 요소를 콜백으로 변형해서 "새 배열"을 만들어 변환
const doubled = numbers.map((num) => {
  return num * 2;
});
console.log(doubled);

//filter - 콜백이 true를 반환하는 요소만 걸러내서 "새로운 배열" 생성(조건을 통한.)

const even = numbers.filter((value) => {
  return value % 2 === 0;
});
console.log(even);

//reduce - 배열의 각 값들을 누적하여 하나의 값으로 변환
//accumulator - 누적된 값, value, index, array
const sum = numbers.reduce((acc, value) => {
  return acc + value;
}, 0); //acc를 0으로 초기값 설정했다고 보면됨.

console.log(sum);
