import express from "express";
import { addTask } from "../controllers/addTask.js";
import { getHomeList } from "../controllers/getHomeList.js";

const homeRouter = express.Router();

homeRouter.post("/", addTask);
homeRouter.get("/", getHomeList);
// homeRouter.delete("/", deleteTask);

export default homeRouter;
