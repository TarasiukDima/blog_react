const fs = require("fs/promises");
const resolveRoot = require("../helpers/resolveRoot");
const createUI = require("./createUI");
const createPublicApi = require("./createPublicApi");

module.exports = async (sliceName) => {
  const sharedLayerFOlderName = "shared";
  const startPath = resolveRoot("..", "src", sharedLayerFOlderName, "ui", sliceName);

  try {
    await fs.mkdir(startPath);
  } catch (e) {
    console.log(`не удалось создать директорию для слайса ${sliceName}`);
    return;
  }

  await createUI(startPath, sharedLayerFOlderName, sliceName);
  await createPublicApi(startPath, sliceName);
};
