const fs = require("fs/promises");
const resolveRoot = require("../helpers/resolveRoot");
const createModel = require("./createModel");
const createUI = require("./createUI");
const createPublicApi = require("./createPublicApi");

module.exports = async (layer, sliceName) => {
  const startPath = resolveRoot("..", "src", layer, sliceName);

  try {
    await fs.mkdir(startPath);
  } catch (e) {
    console.log(`не удалось создать директорию для слайса ${sliceName}`);
    return;
  }

  await createModel(startPath, sliceName);
  await createUI(startPath, layer, sliceName);
  await createPublicApi(startPath, sliceName);
};
