import { ZodObject } from "zod";
import { Request, Response, NextFunction } from "express";
import { sendResponse, HttpStatus } from "../utils/responseHandler";

export const validate =
  (schema: ZodObject<any>) =>
  (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse({
        body: req.body,
        query: req.query,
        params: req.params,
      });
      next();
    } catch (error: any) {
      console.log("Validation error:", error);
      return sendResponse(res, HttpStatus.BAD_REQUEST, {
        success: false,
        message: "Validation error",
        error: error.issues,
      });
    }
  };
