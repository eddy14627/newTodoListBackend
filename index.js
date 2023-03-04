import express, { application } from "express";
import todoRouter from "./Router/todoRouter.js";
import homeRouter from "./Router/homeRouter.js";
import mongoose from "mongoose";
import cors from "cors";
import { data } from "./data.js";
import taskModel from "./models/task.js";

const app = express();
app.use(express.json());

app.use(cors({ origin: "http://localhost:3000" }));

app.use("/date", todoRouter);
app.use("/months", todoRouter);
app.use("/years", todoRouter);
app.use("/dateRange", todoRouter);
app.use("/delete", todoRouter);
app.use("/countTask", todoRouter);

app.use("/", homeRouter);

mongoose.set("strictQuery", true);
mongoose
  .connect(
    "mongodb+srv://ad2020:Adarsh100@cluster0.dqomhbh.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    app.listen(3001, () => {
      console.log("server is running on port 3001");
    });
    // taskModel.insertMany(data);
  })
  .catch((error) => {
    console.log(error);
  });
