import { Router } from "express";
import { authProtect } from "../middlewares/auth.middleware";
import { UsersController } from "../controllers/users.controller";
import { UsersService } from "../services/users.service";
import { PrismaService } from "../utils/db";

const prismaService = new PrismaService();
const userService = new UsersService(prismaService);
const usersController = new UsersController(userService);

const router = Router();

router.get("/me", authProtect(), (req, res) => {
  usersController.getUserById(req, res);
});

export default router;
