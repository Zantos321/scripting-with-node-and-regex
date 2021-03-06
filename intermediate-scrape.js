const fs = require("fs");
const { getComponents, getName, getDesc, trim, getInputs } = require("./regex");

const sourceFile = String(
   fs.readFileSync("./html-pages/intermediate-functions.html")
);

const components = getComponents(sourceFile);

const componentObjs = components.map((component) => {
   console.log(component);
   return {
      name: getName(component)[0],
      desc: trim(getDesc(component)[0]),
      inputs: getInputs(component).length,
      type: "intermediate", // We are scraping only the basic.html
      typeNum: 200, // designated for basic type
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

const targetFile = "./json-files/intermediate.json";

fs.writeFileSync(targetFile, JSON.stringify(orderedObjs));
