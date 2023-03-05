import express from "express";
import { deleteTask } from "../controllers/deleteTask.js";
import { getCountTask } from "../controllers/getCountTask.js";
import { getListByDate } from "../controllers/getListByDate.js";
import { getListByMonth } from "../controllers/getListByMonth.js";
import { getListByRange } from "../controllers/getListByRange.js";
import { getListByYear } from "../controllers/getListByYear.js";
const todoRouter = express.Router();

todoRouter.get("/:numDay/:month/:year", getListByDate);
todoRouter.get("/month/:month", getListByMonth);
todoRouter.get("/year/:year", getListByYear);
todoRouter.post("/range", getListByRange);
todoRouter.get("/taskId/:taskId", deleteTask);
todoRouter.get("/", getCountTask);

// todoRouter.get("/:dateRange", addTask);

export default todoRouter;
