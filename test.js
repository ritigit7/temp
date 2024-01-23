console.log("this is from test.js file")
const t=fetch("www.google.com").then(console.log("fetch...")).catch(console.log("error"))