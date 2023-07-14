const createSharedTemplate = require("./modules/createSharedTemplate");
const createTemplate = require("./modules/createTemplate");

const createTemplateFiles = () => {
  const layer = process.argv[2];
  const sliceName = process.argv[3];

  const layers = ["features", "entities", "pages", "shared"];

  if (!layer || !layers.includes(layer)) {
    throw new Error(`Укажите слой ${layers.join(" или ")}`);
  }

  if (!sliceName) {
    throw new Error("Укажите название слайса");
  }

  if (layer === "shared") {
    createSharedTemplate(sliceName);
    return;
  }

  createTemplate(layer, sliceName);
};

createTemplateFiles();
