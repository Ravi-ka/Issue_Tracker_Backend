import mongoose from "mongoose";

export const IssueSchema = mongoose.Schema({
  title: String,
  description: String,
  labels: String,
  author: String,
  projectID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "New-Project",
  },
});

export const IssueModel = mongoose.model("Issues", IssueSchema);
