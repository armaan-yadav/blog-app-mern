import express from "express";
import cors from "cors";
import connectDB from "./src/db/index.js";
import userRouter from "./src/routes/User.routes.js";
import blogRouter from "./src/routes/Blog.routes.js";
import cookieParser from "cookie-parser";
const app = express();
const port = 5000;

app.use(cors({ credentials: true, origin: "http://localhost:5173" }));
app.use(cookieParser());
app.use(express.json());
app.use("/api/user", userRouter);
app.use("/api/blog", blogRouter);
connectDB
  .then(() => {
    app.on("error", (error) => {
      console.log("Error : ", error);
    });
    app.listen(port, () => {
      console.log("Express App listening at port ", port);
    });
  })
  .catch((e) => {
    console.log("Error while connecting to database ,  ERROR : ", error);
  });
