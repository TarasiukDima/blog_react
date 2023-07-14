const firstCharUpperCase = require("../helpers/firstCharUpperCase");

module.exports = (sliceName) => `export interface I${firstCharUpperCase(sliceName)}Schema {

}`;
