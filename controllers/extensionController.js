// Handlers
module.exports.getAllExtensions = (req, res) => {
  res.status(200).json({
    status: "success",
    results: extensions.length,
    message: {
      extensions,
    },
  });
};

module.exports.deleteExtension = (req, res) => {
  const id = +req.params.id;

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

module.exports.updateExtensionStatus = (req, res) => {
  const id = +req.params.id;
  const { status } = req.body;

  if (isNaN(id) || id < 0 || id >= extensions.length) {
    return res.status(404).json({
      status: "fail",
      message: "Extension not found",
    });
  }

  extensions[id].isActive = status;

  fs.writeFile(
    `${__dirname}/dev-data/extensions.json`,
    JSON.stringify(extensions),
    (err) => {
      res.status(200).json({
        status: "success",
        message: "Extension status updated",
        extension: extensions[id],
      });
    }
  );
};
