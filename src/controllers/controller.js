import {
  getIssues,
  postLoadCreateNewIssueRepo,
} from "../models/Issue/issueRepository.js";
import {
  loadHomePageRepo,
  loadProjectDetailPageRepo,
  postCreateNewViewRepo,
} from "../models/repository.js";

export const loadHomePage = async (req, res, next) => {
  try {
    const pageContent = await loadHomePageRepo();
    return res.render("homepage", { content: pageContent });
  } catch (error) {
    console.log(error);
  }
};

export const loadCreateNewView = async (req, res, next) => {
  try {
    return res.render("createNew");
  } catch (error) {
    console.log(error);
  }
};

export const postCreateNewView = async (req, res, next) => {
  try {
    const { projectName, projectDescription, projectAuthor } = req.body;
    await postCreateNewViewRepo(req.body);
    return res.redirect("/");
  } catch (error) {
    console.log(error);
  }
};

export const loadProjectDetailPage = async (req, res, next) => {
  try {
    const id = req.params.id;
    const pageContent = await loadProjectDetailPageRepo(id);
    const newIssues = await getIssues(id);
    res.render("projectDetailPage", {
      content: pageContent,
      Issues: newIssues,
    });
  } catch (error) {
    console.log(error);
  }
};

export const loadCreateNewIssue = async (req, res, next) => {
  try {
    const id = req.params.id;
    res.render("createNewIssue", { userID: id });
  } catch (error) {
    console.log(error);
  }
};

export const postLoadCreateNewIssue = async (req, res) => {
  try {
    const id = req.params.id;
    const { title, description, labels, author } = req.body;
    const newData = { ...req.body, projectID: id };
    const pageContent = await loadProjectDetailPageRepo(id);
    await postLoadCreateNewIssueRepo(newData);
    const newIssue = await getIssues(id);
    res.status(201).render("projectDetailPage", {
      content: pageContent,
      Issues: newIssue,
    });
  } catch (error) {
    console.log(error);
  }
};
