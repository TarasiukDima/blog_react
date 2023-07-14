const fs = require("fs/promises");
const resolveRoot = require("../helpers/resolveRoot");
const publicApiTemplate = require("../templates/publicApiTemplate");

module.exports = async (startPath, sliceName) => {
  try {
    await fs.writeFile(
      resolveRoot(startPath, "index.ts"),
      publicApiTemplate(sliceName)
    );
  } catch (e) {
    console.log("Не удалось создать PUBLIC API");
  }
};
