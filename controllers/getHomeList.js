import taskModel from "../models/task.js";

export const getHomeList = async (req, res) => {
  try {
    const data = await taskModel.find();
    res.status(200).json(data);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};
