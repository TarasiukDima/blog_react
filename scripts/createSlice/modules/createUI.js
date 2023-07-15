const fs = require("fs/promises");
const resolveRoot = require("../helpers/resolveRoot");
const firstCharUpperCase = require("../helpers/firstCharUpperCase");
const componentTemplate = require("../templates/componentTemplate");
const storyTemplate = require("../templates/storyTemplate");
const styleTemplate = require("../templates/styleTemplate");

module.exports = async (startPath, layer, sliceName) => {
  const resolveUIPath = (...segments) => resolveRoot(startPath, "ui", ...segments);

  const createUIDir = async () => {
    try {
      await fs.mkdir(resolveUIPath());
    } catch (e) {
      console.log("Не удалось создать UI директорию");
    }
  };

  const createComponent = async () => {
    try {
      const componentName = firstCharUpperCase(sliceName);
      // await fs.mkdir(resolveUIPath(componentName));
      await fs.writeFile(
        resolveUIPath(`${componentName}.tsx`),
        componentTemplate(componentName),
      );
      await fs.writeFile(
        resolveUIPath(`${componentName}.stories.tsx`),
        storyTemplate(layer, componentName),
      );
      await fs.writeFile(
        resolveUIPath(`${componentName}.module.scss`),
        styleTemplate(componentName),
      );
    } catch (e) {
      console.log("Не удалось создать компонент");
    }
  };

  await createUIDir();
  await createComponent();
};
