import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("express 시작!!!!!!!!!!!!!");
});

app.listen(4000, () => {
  console.log("서버실행중:http://localhost:4000");
});

/* 브라우저(react) --HTTP요청 --> EXpress 서버 --pg --> Supabase DB
                    <--HTTP 응답 (JSON) ---
HTTP
-브라우저와 서버가 주고받는 약속
-요청 하나에 응답 하나
-요청 =  메서드 + 주소 +(필요하면 본문)
-응답=상태코드+본문(JSON - JavaScript 의 배열과 객체 형태)

http://localhost:4000/api/cars?q=소포티지
-http://프로토콜. 어떤 약속으로 말할지(http:HTTP+암호화)
-localhost 호스트 . 어느 컴터에 요청할지
-localhost는 "지금 쓰고 잇는 이컴터 자신"(IP로는 127.0.0.1)
-4000 포트. 이컴퓨터 안의 어느 프로그램 문으로 들어갈지
-api/cars 경로. 서버 안에서 어떤 자원을 달라고 할지
-?q=스포티지 쿼리스트링. 덧붙이는 조건
                    
api
-프로그램끼리 대화하는 창구
-화면(react)이 요청해주는 주소들의 모음

REST API
-API를 만드는 대표규칙
-주소는 "무엇"을 가리키는지 : /api/cars(차 목록), /api/cars/1
-메서드는 무엇을 할지:GET방식으로 가지고 옴.  DELETE방식으로 지움. POST방식으로 새로 만듦. PUT방식으로 바꿈
-RESTful :규칙을 잘 지킬 때 쓰는 말

CRUD와 메서드
         SQL        HTTP메서드
Create  insert      POST
Read    select      GET
Update  update      PUT -전체/PATCH-부분
Delete  delete      DELETE

상태코드
200 201 등 2로시작하는애들. 
->성공
400 요청잘못됨 401 인증문제 404 없음
->클라이언트 오류
500 503 등 5로시작하는애들
->서버 오류
*/
