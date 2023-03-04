import mongoose from "mongoose";

const taskSchema = mongoose.Schema(
  {
    taskId: {
      type: String,
      required: true,
    },
    day: {
      type: Number,
    },
    month: {
      type: Number,
    },
    year: {
      type: Number,
    },
    task: {
      type: String,
      required: true,
    },
    picturePath: {
      type: String,
    },
    link: {
      type: String,
    },
  },
  { timestamps: true }
);

const taskModel = mongoose.model("Task", taskSchema);
export default taskModel;
