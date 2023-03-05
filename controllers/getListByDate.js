import taskModel from "../models/task.js";

export const getListByDate = async (req, res) => {
  try {
    const { numDay, year, month } = req.params;
    const listData = await taskModel.find({
      day: numDay,
      month: month,
      year: year,
    });
    res.status(200).json(listData);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};
