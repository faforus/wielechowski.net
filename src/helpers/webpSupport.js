import UAParser from "ua-parser-js";

let webpSupported = false;

let parser = new UAParser(navigator.userAgent);
let parserResults = parser.getResult();

const input = parserResults.browser.version;
const firstDotIndex = input.indexOf(".");
const secondDotIndex = input.indexOf(".", firstDotIndex + 1);

let digitsBeforeFirstDot;
let digitsAfterFirstDot;

if (firstDotIndex === -1) {
} else if (secondDotIndex !== -1) {
  digitsBeforeFirstDot = input.substring(0, firstDotIndex);
  digitsAfterFirstDot = input.substring(firstDotIndex + 1, secondDotIndex);
} else {
  digitsBeforeFirstDot = input.substring(0, firstDotIndex);
}
//Chrome
if (
  (parserResults.browser.name.includes("Chrome") &&
    digitsBeforeFirstDot === undefined &&
    input >= 9) ||
  (parserResults.browser.name.includes("Chrome") && digitsBeforeFirstDot >= 9)
) {
  webpSupported = true;
}
//Safari
if (
  (parserResults.browser.name.includes("Safari") &&
    digitsBeforeFirstDot === undefined &&
    input >= 14) ||
  (parserResults.browser.name.includes("Safari") && digitsBeforeFirstDot >= 14)
) {
  webpSupported = true;
}
//Firefox
if (
  (parserResults.browser.name.includes("Firefox") &&
    digitsBeforeFirstDot === undefined &&
    input >= 65) ||
  (parserResults.browser.name.includes("Firefox") && digitsBeforeFirstDot >= 65)
) {
  webpSupported = true;
}
//Opera
if (
  (parserResults.browser.name.includes("Opera") &&
    digitsBeforeFirstDot === undefined &&
    input >= 12) ||
  (parserResults.browser.name.includes("Opera") && digitsBeforeFirstDot >= 12)
) {
  webpSupported = true;
}
// Opera Touch
if (
  (parserResults.browser.name.includes("Opera Touch") &&
    digitsBeforeFirstDot === undefined &&
    input >= 2) ||
  (parserResults.browser.name.includes("Opera Touch") &&
    digitsBeforeFirstDot >= 2) ||
  (parserResults.browser.name.includes("Opera Touch") &&
    digitsBeforeFirstDot === 1 &&
    digitsAfterFirstDot >= 3)
) {
  webpSupported = true;
}
//Microsoft Edge
if (
  (parserResults.browser.name.includes("Edge") &&
    digitsBeforeFirstDot === undefined &&
    input >= 18) ||
  (parserResults.browser.name.includes("Edge") && digitsBeforeFirstDot >= 18)
) {
  webpSupported = true;
}
//Facebook
if (
  (parserResults.browser.name.includes("Facebook") &&
    digitsBeforeFirstDot === undefined &&
    input >= 350) ||
  (parserResults.browser.name.includes("Facebook") &&
    digitsBeforeFirstDot >= 350)
) {
  webpSupported = true;
}

export default webpSupported;
