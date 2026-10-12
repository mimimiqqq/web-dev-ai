// 1~100 사이 랜덤 숫자 하나 만들기
let computer = Math.floor(Math.random() * 100) + 1;
computer = 50;
console.log(typeof computer);

let count = 0;
while (true) {
  count++;
  const input = Number(prompt("1~100사이의 숫자 맞추기"));

  // computer의 랜덤값을 맞추기 위해서 내가 입력한 숫자와 비교해서
  // 지금 내가 입력한 숫자가 큰지, 작은지, 맞췄는지 비교

  if (input === "" || isNaN(input)) {
    alert("제대로 입력해주세요");
  }

  if (computer === input) {
    alert(`${count}번만에 맞추셨습니다!`);
    break;
  } else if (computer >= input) {
    alert("해당 숫자보다 작습니다");
  } else if (computer <= input) {
    alert("해당 숫자보다 큽니다");
  }
  //정답을 맞추면 시도 횟수와 함께 종료 메시지를 출력
  // (정답입니다! 몇 번 만에 맞추셨습니다)

  // const input2 = Number(prompt("정답입니다.   번만에 맞추셨습니다!"));
}
