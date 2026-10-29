import { pool } from "../db.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// insertUser

export const insertUser = async ({ email, password, name, phone }) => {
  // db 접속해서 users라는 테이블에 데이터 추가를 위해.(회원가입이라는게)
  // insert into users (email, password, name, phone)
  // values( 'test@google.com', '1234', '테스트', '010-1111-1111')
  // 비밀번호는 그대로 저장하지 않고 암호화(해시)해서 저장
  const hashedPassword = await bcrypt.hash(password, 10);
  await pool.query(
    `insert into users (email, password, name, phone)
         values($1, $2, $3, $4)`,
    [email, hashedPassword, name, phone],
  );
};

export const login = async ({ email, password }) => {
  //1. db 조회는 이메일로만 (비번은 암호화돼 있어서 sql로 비교 불가)
  const { rows } = await pool.query(`select * from users where email = $1`, [
    email,
  ]);
  const user = rows[0];

  //2. 이메일이 없으면 undefined
  if (!user) return undefined;

  //3. 입력한 비번과 db에 저장된 암호화된 비번 비교
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return undefined;

  //4. 출입증(토큰) 발급
  const token = jwt.sign(
    { id: user.id, email: user.email },
    process.env.JWT_SECRET,
    { expiresIn: "1h" },
  );

  return { id: user.id, email: user.email, token };
};
