const firstCharUpperCase = require("../helpers/firstCharUpperCase");

module.exports = (sliceName) => {
  const componentName = firstCharUpperCase(sliceName);
  const schemaName = `${componentName}Schema`;

  return `export type { I${firstCharUpperCase(schemaName)} } from "./model/types/${sliceName}Schema";
export { ${componentName} } from "./ui/${componentName}";
  `;
};
