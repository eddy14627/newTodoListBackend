import taskModel from "../models/task.js";

export const getListByYear = async (req, res) => {
  try {
    const { year } = req.params;
    console.log(year, "inside getlistByYear");
    const listData = await taskModel.find({ year: year });
    res.status(200).json(listData);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};
