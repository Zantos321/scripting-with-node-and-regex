# Scripting with Node.js and Regex

We want to create JSON objects of each "component" from our HTML pages.

Below is an example of a component object.

We want to produce an array of these objects.

```javascript
{
   name: "thirdBasicFunc", // String
   desc: "The third function in my basic utility library.", // String
   inputs: 3, // Number
   type: "basic", // String
   typeNum: 100, // Number
   isFavorite: false, // Boolean
   order: 102 // Number
}
```

Each HTML page has a type of "basic", "intermediate", "functional", "algorithm", or "regex".

These types are associated with a made-up number below.
These numbers will help with ordering our data later.

```javascript
const typeNums = {
   basic: 100,
   intermediate: 200,
   functional: 300,
   algorithm: 400,
   regex: 500,
};
```

The following functions get the relevant data from our HTML page:

`getComponents()`
`getName()`
`getDesc()`
`getInputs()`

## Unique to this track

You will have to make them work with the match() method and some regex! I copy and paste stuff into [Regex101.com](https://regex101.com/) and select "ECMAScript (JavaScript)" on the left-hand side. I've included screenshots with the regex erased in the `screenshots` folder.
