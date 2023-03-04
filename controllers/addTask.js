import taskModel from "../models/task.js";

export const addTask = async (req, res) => {
  try {
    const { taskId, date, task, day, month, year, link, picturePath } =
      req.body;
    console.log(req.body);
    const newTask = await taskModel({
      taskId,
      date,
      day,
      month,
      year,
      link,
      picturePath,
      task,
    });
    await newTask.save();
    const allTask = await taskModel.find();
    res.status(200).json(allTask);
  } catch (error) {
    res.status(409).json({ error: error.message });
  }
};
