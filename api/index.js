import express from "express";
import cors from "cors";
import connectDB from "./src/db/index.js";
import userRouter from "./src/routes/User.routes.js";
const app = express();
const port = 5000;

app.use(express.json());
app.use(cors());
app.use("/api/user", userRouter);
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
