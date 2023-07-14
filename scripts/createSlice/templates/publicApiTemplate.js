const firstCharUpperCase = require("../helpers/firstCharUpperCase");

module.exports = (sliceName) => {
  const componentName = firstCharUpperCase(sliceName);
  const schemaName = `${componentName}Schema`;

  return `export { ${componentName} } from "./ui/${componentName}/${componentName}";
  export { I${firstCharUpperCase(schemaName)} } from "./model/types/${schemaName}";`;
};
