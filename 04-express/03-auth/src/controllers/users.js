import * as userService from "../services/users.js";
//컨트롤러가 하는 일은 request -> service -> response
//signup :회원가입
export const signup = async (req, res) => {
  await userService.insertUser(req.body);
  res.sendStatus(201);
};

//1. request : 프론트에서 보낸 값을 꺼내서
//2. service :  insertUser에 넘겨 DB 에 저장.
//login
export const login = async (req, res) => {
  const result = await userService.login(req.body);
  // 이메일이 없거나 비번이 틀리면 undefined -> 401
  if (!result) {
    return res
      .status(401)
      .json({ message: "이메일 또는 비밀번호가 올바르지 않습니다." });
  }
  res.status(200).json(result);
};
