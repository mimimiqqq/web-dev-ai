/*사람{
    //특징들 => 변수로 표현한다.  
    이름, 나이, 사는곳 

    //행동들 => 함수로 표현(기능)
    // 일어난다, 밥먹는다, 씻는다, 옷입는다, 나간다. 등의 특징. 
    
    
    //  = 객체를 만든다(객체화 시킨다)
    }
    */
//변수끼리 서로 관련이 있다는게 보이지 않는다..
const name = "성시원";
const age = 10;
const add = "서울";

//펄슨에럴 ) 배열은 서로 관련이 있다는게 보인다.
// 하지만 각 값들이 뭘 의미하는지는모름. 이름이 이름인지 지역이 이름인지.
const personArr = ["성시원", 10, "서울"];

//객체
const person = {
  //변수 (키 : 값)으로 정해져잇음
  name: "성시원",
  age: 10,
  addr: "서울",
  //함수 ()
  hello() {
    //this : 객체 (본인)자체를 뜻함
    console.log(`안녕하세요, ${this.name}입니다.`);
  },
};

console.log(person);
console.log(person.name);
person.hello();

//빈 객체와 속성/ 함수 추가
const person1 = {}; //new Objecu();거의 안씀
person1.name = "홍순법";
person1["age"] = 9;
person1.hello = function () {
  console.log(`나는 ${this.name}이고, 나이는 ${this.age}살이야`);
};
person1.hello();

const person2 = {
  name: "나혜진",
  hello: function () {
    console.log(`익명 함수 : ${this.name}`);
  }, //익명(function)함수(hello(){})는 축약해서 쓸수 있다
};

const person3 = {
  name: "김미래",
  //객체 함수로 화살표 함수 비권장..
  hello: () => {
    console.log(this); //전역 객체인 window
    console.log(`화살표 함수 : ${this.name}`);
  },
};

person2.hello();
person3.hello();

//window.alert("알림!");

//객체 구조분해할당
const { name: name1, age: age1 } = person1;
console.log(name1, age1);

//생성사 함수, 클래스 -> 변수와 함수는 소문자, 클래스는 대문자!
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.hello = function () {
    console.log(`안녕? ${this.name}야, 나이는 ${this.age}살이야`);
  };
}

const p1 = new Person("김진아", 5);
p1.hello();

// 함수 형식 보다는 클래스 형식을 더 사용!
class Person2 {
  //객체 생성시 호출.
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  hello() {
    console.log(`안녕? ${this.name}야, 나이는 ${this.age}살이야`);
  }
}
const p2 = new Person2("김소연", 2);
p2.hello();

//내장 객체(자바가 제공하는 친구들)
// set  -중복되는애들 삭제시켜줌
const arr = [1, 2, 2, 3, 3, 4, 4, 4, 5];
console.log(arr);
const unique = new Set(arr);
console.log(unique);
console.log([...unique]); // 다시 배열로 바꿔가지고 사용..

//Math - 계산용.(수학적인것들)
console.log(Math.max(5, 7, -1, -8)); //max 알아서 최대값 알려줌.
console.log(Math.min(5, 7, -1, -8)); //min 알아서 최소값 알려줌.
console.log(Math.round(2.897)); //3  반올림
console.log(Math.floor(2.897)); //2  끝자리버림
console.log(Math.ceil(2.897)); //3  걍올림.
console.log(Math.random()); //0부터 1까지의 랜덤숫자 불러옴.(소수점포함)

// 1 ~ 10까지의 랜덤 숫자
/// 0 <= Math.ramdom() < 1
// * 10
// 0  <=Math.ramdom() * 10 < 10
//Math.floor()소수점 제거할게~
console.log(Math.floor(Math.random() * 10)); //0~9
//+1
//1 <= Math.ramdom() *10 + 1 < 11

console.log(Math.floor(Math.random() * 10 + 1)); //1~10

//5 ~ 15까지의 랜덤숫자
//5 <= Math < 16
console.log(Math.floor(Math.random() * 11) + 5);

//Date 객체
const now = new Date();
console.log(now);
//getMonth : 0 ~ 11월
console.log(`${now.getFullYear()}년
${now.getMonth() + 1}월
${now.getDate()}일`);

// const date = new Date(2027, 1, 28, 14, 20, 0);
const date = new Date("2027-01-28T14:20:00");
console.log(date.toLocaleDateString("ko-KR"));

// Timer
//1000=1초
//일정 시간 후 1회 실행
setTimeout(() => {
  console.log("3초 후 실행!");
}, 3000);

//일정 시간마다 반복실행
//let sec = 0;
//setInterval(() => {
//  console.log(`${++sec}초!`);

// if (sec === 2) {
//   clearInterVal(timer);
// }
//}, 1000);

//JSON (JavaScript Object Notation)
//서버에서 클라이언트로 JSON 객체로 통신  (localStorage)
//객체 -> 문자열로 바꾸고
const jsonStr = JSON.stringify(person);
console.log(jsonStr);
//문자열을 다시 -> 객체로

const jsonObj = JSON.parse(jsonStr);
console.log(typeof jsonObj); //object
