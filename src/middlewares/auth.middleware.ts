import { Request, Response, NextFunction, RequestHandler } from "express";
import { HttpStatus, sendResponse } from "../utils/responseHandler";
import { UsersService } from "../services/users.service";
import { PrismaService } from "../utils/db";

const prismaService = new PrismaService();

const userService = new UsersService(prismaService);

declare global {
  namespace Express {
    interface Request {
      user: { id: string };
    }
  }
}

export const authProtect = (): RequestHandler => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const token = req.cookies?.token;
    if (!token) {
      return sendResponse(res, HttpStatus.UNAUTHORIZED, {
        success: false,
        message: "Unauthorized",
      });
    }

    try {
      // verify token here
      // const payload = verifyToken(token);

      // Mock payload for demonstration
      const payload = { id: "user-id-from-token" };

      // Fetch user from database
      const user = await userService.getUserById(payload.id);

      if (!user) {
        return sendResponse(res, HttpStatus.UNAUTHORIZED, {
          success: false,
          message: "Unauthorized",
        });
      }

      req.user = { id: payload.id };
      next();
    } catch (error) {
      return sendResponse(res, HttpStatus.UNAUTHORIZED, {
        success: false,
        message: "Unauthorized",
      });
    }
  };
};
