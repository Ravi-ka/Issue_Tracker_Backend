import { IssueModel } from "./issueSchema.js";

export const postLoadCreateNewIssueRepo = async (data) => {
  return await IssueModel(data).save();
};

export const getIssues = async (id) => {
  const data = await IssueModel.find({ projectID: id });
  return data;
};
