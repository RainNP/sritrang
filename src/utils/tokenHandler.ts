import jwt from "jsonwebtoken";

type Payload = {
  id: string;
};

export const generateToken = (payload: Payload, remember: boolean) => {
  const secret = process.env.JWT_SECRET as string;
  return jwt.sign(payload, secret, {
    expiresIn: remember ? "30d" : "12h",
  });
};

export const verifyToken = (token: string) => {
  return jwt.verify(token, process.env.JWT_SECRET as string) as Payload;
};
