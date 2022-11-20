const fs= require("fs");
let text = fs.readFileSync("delel.txt","utf-8");

text=text.replace("doremon","doremon2")
console.log("The content of the file is ");
console.log(text);

console.log("creating a new file....");
fs.writeFileSync("new.txt",text)