import monaToGO, { mergeGO } from "../dist";

const monaDump = require("./monaDump.json");
const goDump = require("./goDump.json");

const converted = monaToGO(monaDump, 12, 4);
const goDatabase = mergeGO(converted, goDump)

console.log(goDatabase);

