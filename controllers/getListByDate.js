import taskModel from "../models/task.js";

export const getListByDate = async (req, res) => {
  try {
    const { date } = req.params;
    const listData = await taskModel.find({ date: date });
    res.status(200).json(listData);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};
