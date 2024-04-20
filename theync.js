const open = require("open"); //for opening a browser window
// Importing the http module
const http = require("http");
const PORT = 3000;
const server = http.createServer((req, res) => {
  // Handling requests
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello, Soumya!\n");
});

// Start the server
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

const readline = require("readline");
// Create readline interface to read input from the terminal
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

/* alternate readline interface
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
*/

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

// Function to prompt the user for input and display the converted URL
function main() {
  rl.question(
    "Enter the original URL to convert (or type 'exit' to end): ",
    (originalURL) => {
      if (originalURL.toLowerCase() === "exit") {
        // If user types 'exit', close the readline interface and exit the script
        rl.close();
        return;
      }
      //Take user's input
      let convertedURL = convertURL(originalURL);
      console.log("Converted URL:", convertedURL);

      // Open the converted URL in a browser
      open(convertedURL)
        .then(() => {
          console.log("Opened in browser");
          // Ask for the next URL
          main();
        })
        .catch((error) => {
          console.error("Failed to open in browser:", error);
          // Ask for the next URL
          main();
        });
    }
  );
}

// Call the main function
main();
