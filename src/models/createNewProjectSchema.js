import mongoose from "mongoose";

export const createNewSchema = mongoose.Schema({
  projectName: String,
  projectDescription: String,
  projectAuthor: String,
  issueID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Issues",
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

export const createNewModel = mongoose.model("New-Project", createNewSchema);
