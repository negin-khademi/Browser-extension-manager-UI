const fs = require("fs");
const express = require("express");

const app = express();

app.use(express.json());

// Read extensions data
const extensions = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/extensions.json`, "utf-8")
);

// Handlers
const getAllExtensions = (req, res) => {
  res.status(200).json({
    status: "success",
    results: extensions.length,
    message: {
      extensions,
    },
  });
};

const removeExtension = (req, res) => {
  const id = parseInt(req.params.id);

  let extensions = extensions;

  if (isNaN(id) || id < 0 || id >= extensions.length) {
    return res.status(404).json({
      status: "fail",
      message: "Extension not found",
    });
  }

  const removed = extensions.splice(id, 1);

  fs.writeFile(
    `${__dirname}/dev-data/extensions.json`,
    JSON.stringify(extensions),
    (err) => {
      res.status(200).json({
        status: "success",
        message: "Extension removed",
        removed,
      });
    }
  );
};

app.route("/api/v1/extensions").get(getAllExtensions);

app.route("/api/v1/extensions/:id").get(getAllExtensions);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}...`);
});
