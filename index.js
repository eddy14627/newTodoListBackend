import dotenv from "dotenv";
import express from "express";
import todoRouter from "./Router/todoRouter.js";
import homeRouter from "./Router/homeRouter.js";
import mongoose from "mongoose";
import cors from "cors";
import { data } from "./data.js";
import taskModel from "./models/task.js";

dotenv.config();

const app = express();
app.use(express.json());

app.use(cors());

app.use("/date", todoRouter);
app.use("/months", todoRouter);
app.use("/years", todoRouter);
app.use("/dateRange", todoRouter);
app.use("/delete", todoRouter);
app.use("/countTask", todoRouter);

app.use("/", homeRouter);

mongoose.set("strictQuery", true);
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("server is running on port 3001");
    });
    // taskModel.insertMany(data);
  })
  .catch((error) => {
    console.log(error);
  });
