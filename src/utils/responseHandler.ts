import { Response } from "express";

export enum HttpStatus {
  OK = 200,
  CREATED = 201,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  CONFLICT = 409,
  INTERNAL_SERVER_ERROR = 500,
}

export interface ApiResponse<T = any> {
  success: boolean;
  message?: string;
  data?: T;
  error?: string | any;
}

export function sendResponse<T>(
  res: Response,
  statusCode: HttpStatus,
  payload: ApiResponse<T>
) {
  return res.status(statusCode).json(payload);
}
