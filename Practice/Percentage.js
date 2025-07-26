let marksobtained = 358.2;
let totalmarks = 500;
let percentage = (marksobtained / totalmarks) * 100;

console.log( percentage +" %");

let roundedpercentage = Math.round(percentage); // math.round() rounds to the nearest integer
console.log("Rounded Percentage: " + roundedpercentage + " %");