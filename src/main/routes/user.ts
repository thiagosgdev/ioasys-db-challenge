import { Router } from "express";
import { UserController } from "../../presentation/user-controller";

const user = new UserController();

const router = Router();

router.post("/users", user.insertUser);
router.get("/users", user.getUsers);
router.get("/users/login", user.login);

export { router }