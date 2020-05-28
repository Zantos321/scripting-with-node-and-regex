const fs = require("fs");

const basicSource = JSON.parse(fs.readFileSync("./json-files/basic.json"));
const intermediateSource = JSON.parse(
   fs.readFileSync("./json-files/intermediate.json")
);
const functionalSource = JSON.parse(
   fs.readFileSync("./json-files/functional.json")
);
const algorithmSource = JSON.parse(
   fs.readFileSync("./json-files/algorithm.json")
);
const regexSource = JSON.parse(fs.readFileSync("./json-files/regex.json"));

let distSource = basicSource.concat(
   intermediateSource,
   functionalSource,
   algorithmSource,
   regexSource
);

const targetFile = "./dist/dist.json";
fs.writeFileSync(targetFile, JSON.stringify(distSource));

console.log(distSource);
