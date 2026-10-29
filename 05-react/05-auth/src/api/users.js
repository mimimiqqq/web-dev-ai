import axios from "axios";

// 회원가입
// POST http://localhost:4000/api/users/signup -> req.body
// data : { email, password, name, phone }
export const signup = async (data) => {
  const res = await axios.post("http://localhost:4000/api/users/signup", data);
  return res.data;
};

// 로그인
// POST  http://localhost:4000/api/users/login -> req.body
// data : { email, password }
export const login = async (data) => {
  //서버가 json에 값을 담았으니.->지금 res라는 변수에 가져온거임.
  const res = await axios.post("http://localhost:4000/api/users/login", data);
  return res.data; //json값이 data에 들어있음!!!!!
};
