// Importing the http module
const http = require("http");

// Define the port number
const PORT = 3000;

// Creating the server
const server = http.createServer((req, res) => {
  // Handling requests
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello, Soumya!\n");
});

// Start the server
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
