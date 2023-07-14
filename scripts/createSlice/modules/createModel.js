const fs = require("fs/promises");
const resolveRoot = require("../helpers/resolveRoot");
const reduxSliceTemplate = require("../templates/reduxSliceTemplate");
const schemaTypeTemplate = require("../templates/schemaTypeTemplate");

module.exports = async (startPath, sliceName) => {
  const resolveModelPath = (...segments) => resolveRoot(startPath, "model", ...segments);
  const foldersToCreate = ["", "types", "slices", "selectors", "services"];

  const createModelStructure = async () => {
    try {
      foldersToCreate.forEach(async (oneFolder, ind) => {
        await fs.mkdir(resolveModelPath(oneFolder));
      });
    } catch (e) {
      console.log(`Не удалось создать model сегмент для слайса ${sliceName}`, e);
    }
  };

  const createReduxSlice = async () => {
    try {
      await fs.writeFile(
        resolveModelPath("slices", `${sliceName}Slice.ts`),
        reduxSliceTemplate(sliceName),
      );
    } catch (e) {
      console.log("Не удалось создать редакс слайс", e);
    }
  };

  const createSchemaType = async () => {
    try {
      await fs.writeFile(
        resolveModelPath("types", `${sliceName}Schema.ts`),
        schemaTypeTemplate(sliceName),
      );
    } catch (e) {
      console.log("Не удалось создать тип схемы стейта", e);
    }
  };

  await createModelStructure();
  await createReduxSlice();
  await createSchemaType();
};
