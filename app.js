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

app.route("/api/v1/extensions").get(getAllExtensions);

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}...`);
});
