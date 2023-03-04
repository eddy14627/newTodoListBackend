import taskModel from "../models/task.js";

export const getListByMonth = async (req, res) => {
  try {
    const { month } = req.params;
    console.log(month, "getlistByMonth");

    const listData = await taskModel.find({ month: month });
    console.log(listData, "listss");
    res.status(200).json(listData);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};
