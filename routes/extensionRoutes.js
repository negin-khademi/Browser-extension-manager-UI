const express = require("express");
const extensionController = require("../controllers/extensionController");

const router = express.Router();

// Read extensions data
const extensions = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/extensions.json`, "utf-8")
);

router.route("/").get(extensionController.getAllExtensions);

router
  .route("/:id")
  .delete(extensionController.deleteExtension)
  .patch(extensionController.updateExtensionStatus);
