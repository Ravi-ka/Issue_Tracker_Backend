import { createNewModel } from "./createNewProjectSchema.js";
export const loadHomePageRepo = async () => {
  return await createNewModel.find();
};

export const postCreateNewViewRepo = async (data) => {
  return await createNewModel(data).save();
};

export const loadProjectDetailPageRepo = async (id) => {
  return await createNewModel.findOne({ _id: id });
};
