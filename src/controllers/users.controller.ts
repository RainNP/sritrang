import { UsersService } from "../services/users.service";
import { HttpStatus, sendResponse } from "../utils/responseHandler";
import { Request, Response } from "express";

export class UsersController {
  constructor(private userService: UsersService) {}

  async getUserById(req: Request, res: Response) {
    const userId = req.user?.id;

    try {
      const user = await this.userService.getUserById(userId);
      if (!user) {
        return sendResponse(res, HttpStatus.NOT_FOUND, {
          success: false,
          message: "User not found",
        });
      }
      return sendResponse(res, HttpStatus.OK, {
        success: true,
        data: user,
      });
    } catch (error) {
      console.error("Error fetching user:", error);
      return sendResponse(res, HttpStatus.INTERNAL_SERVER_ERROR, {
        success: false,
        message: "An error occurred while fetching the user",
        error: error instanceof Error ? error.message : error,
      });
    }
  }
}
