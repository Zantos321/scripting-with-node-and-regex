const fs = require("fs");
const { getComponents, getName, getDesc, trim, getInputs } = require("./regex");

const sourceFile = String(
   fs.readFileSync("./html-pages/algorithm-functions.html")
);

const components = getComponents(sourceFile);

const componentObjs = components.map((component) => {
   console.log(component);
   return {
      name: getName(component)[0],
      desc: trim(getDesc(component)[0]),
      inputs: getInputs(component).length,
      type: "algorithm", // We are scraping only the basic.html
      typeNum: 400, // designated for basic type
      isFavorite: false, // default
   };
});

const reversedObjs = componentObjs.reverse();

const orderedObjs = [];
for (let i = 0; i < reversedObjs.length; i++) {
   const obj = reversedObjs[i];
   obj.order = obj.typeNum + i;
   orderedObjs.push(obj);
}

console.log(componentObjs);

const targetFile = "./json-files/algorithm.json";

fs.writeFileSync(targetFile, JSON.stringify(orderedObjs));
