module.exports = {
   getComponents(file) {
      let getComponentsRegex = /(?<=<!--\sstart\scolumn\s-->).*?(?=<!--\send\scolumn\s-->)/gs;
      return file.match(getComponentsRegex);
      // regex 101: https://regex101.com/r/JJ7u6x/1
   },
   getName(component) {
      let getNameRegex = /(?<=<b>).*?(?=<\/b>)/gs;
      return component.match(getNameRegex);
      // regex 101: https://regex101.com/r/XV0D3x/2
   },
   getDesc(component) {
      let getDescRegex = /(?<=<\/b>\s-\s).*?(?=<\/p>)/gs;
      return component.match(getDescRegex);
      // regex 101 : https://regex101.com/r/1W3W9i/2
   },
   getInputs(component) {
      let getInputsRegex = /<input.*?\/>/gs;
      let nonCorrectedArray = component.match(getInputsRegex);
      if (nonCorrectedArray == null) {
         // replaced anything that gives a null answer to and empty array
         return [];
      }
      return component.match(getInputsRegex);
      // regex 101: https://regex101.com/r/F4al65/2
   },
   trim(str) {
      let carriageReturnNewLineRegex = /\n+\r+/g;
      let spaceRegex = /\s+/g;
      let whiteSpaceRegex = /^\s+|\s+$/g;
      return str
         .replace(carriageReturnNewLineRegex, " ")
         .replace(spaceRegex, " ")
         .replace(whiteSpaceRegex, "");
      // "use the string .replace() method and regex to first replace carriage returns and new lines with a space, then replace 2 or more spaces with 1 space, then remove spaces from beginning and end"
   },
};
