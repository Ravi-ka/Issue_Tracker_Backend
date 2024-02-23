import express from "express";
import dotenv from "dotenv";
import path from "path";
import cookieParser from "cookie-parser";
import expressEjsLayouts from "express-ejs-layouts";

import { connectToDatabase } from "./config/mongooseConnection.js";

const configPath = path.resolve("config", "uat.env");
dotenv.config({ path: configPath });

const server = express();
const port = process.env.PORT;

// Statically exposing the public server
server.use(express.static("public"));
// Cookie-parser
server.use(cookieParser());
server.use(express.urlencoded({ extended: true }));

// Setup view engine
server.set("view engine", "ejs");
server.set("views", path.join(path.resolve(), "src", "views"));
// ejs-layout settings
server.use(expressEjsLayouts);
// Default route
server.get("/", (req, res) => {
  res.render("homepage");
});
server.get("/createNew", (req, res) => {
  res.render("createNew");
});

server.listen(port, (err) => {
  if (err) {
    console.log("Error while starting the server");
  } else {
    console.log(`Server listening on ${port}`);
    connectToDatabase();
  }
});
