import "reflect-metadata";
import express from "express";
import cors from "cors";
import CookieParser from "cookie-parser";

import userRouter from "./routers/users.router";

const app = express();
const host = process.env.HOST ?? "localhost";
const port = process.env.PORT ? Number(process.env.PORT) : 3000;

const isProd = process.env.NODE_ENV === "production";
const webOriginUrls = [process.env.WEB_ORIGIN_URL] as string[];

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// assume use cookie for authentication
app.use(CookieParser());
app.use(cors({ origin: isProd ? webOriginUrls : true, credentials: true }));

app.get("/", (req, res) => {
  return res.status(200).json("Hello From Express API");
});

app.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});

app.use("/users", userRouter);
