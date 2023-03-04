import taskModel from "../models/task.js";

export const deleteTask = async (req, res) => {
  try {
    const { taskId } = req.params;
    console.log(taskId);
    const deleteTask = await taskModel.deleteOne({ taskId: taskId });
    const remaining = await taskModel.find();
    res.status(200).json(remaining);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};
