// Require the prompt-sync module
const prompt = require("prompt-sync")();
// Require the open module
const open = require("open");

// Function to convert the original URL to the desired format
function convertURL(originalURL) {
  let match = originalURL.match(/\/thumbs(\/[\w/]+)\.mp4\//);
  if (match) {
    let uniqueID = match[1];
    let newURL = "https://media.theync.com/videos" + uniqueID + ".mp4";
    return newURL;
  } else {
    return "Invalid URL format";
  }
}

// Prompt the user to enter the original URL
const originalURL = prompt("Enter the original URL: ");

// Call the convertURL function with the user's input
const convertedURL = convertURL(originalURL);
console.log("Converted URL:", convertedURL);

// Open the converted URL in a browser
open(convertedURL)
  .then(() => {
    console.log("Opened in browser");
  })
  .catch((error) => {
    console.error("Failed to open in browser:", error);
  });

console.log("hello");
