import { unlink } from "fs";
import db from "./index";

require("../models/user");
require("../models/event");
require("../models/comment");
require("../models/eventuser");

deleteDatabase();

db.sync();

async function deleteDatabase() {
  try {
    unlink("src/connection/database.sqlite", () => {
      console.log("delete database in progress");
    });
    console.log("database successfully deleted");
  } catch (error) {
    console.error("there was an error:");
  }
}
