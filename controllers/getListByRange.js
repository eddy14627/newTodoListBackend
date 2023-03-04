import taskModel from "../models/task.js";

export const getListByRange = async (req, res) => {
  try {
    const { numDay1, monthIndex1, year1, numDay2, monthIndex2, year2 } =
      req.body;
    const month1 = monthIndex1 + 1;
    const month2 = monthIndex2 + 1;
    const listData = await taskModel.find({
      day: { $gte: numDay1, $lte: numDay2 },
      month: { $gte: month1, $lte: month2 },
      year: { $gte: year1, $lte: year2 },
    });
    console.log(listData, "listss");
    res.status(200).json(listData);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};
