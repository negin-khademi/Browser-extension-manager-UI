const express = require("express");
const extensionController = require("../controllers/extensionController");

const router = express.Router();

router.param("id", extensionController.checkID);

router.route("/").get(extensionController.getAllExtensions);

router
  .route("/:id")
  .delete(extensionController.deleteExtension)
  .patch(extensionController.updateExtensionStatus);

module.exports = router;
