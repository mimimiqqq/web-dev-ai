//라우터가 하는일은 어떤 주소 + 메서드 ->컨드롤러로 연결
import { Router } from "express";
import * as user from "../controllers/users.js";

const router = Router();

// signup
router.post("/signup", user.signup);

//login
router.post("/login", user.login);

export default router;
