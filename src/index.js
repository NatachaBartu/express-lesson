const express = require("express");

//Initialize Express as an instance named "app".
const app = express();

app.get("/", (request, response) => {
  response.send("Hello World");
});
// // Separate these out in case we wanna use Docker or something to wrap the app.
// const PORT = 3000;
// const HOST = "0.0.0.0";

// // Best settings for setting up Express as an API server to receive and process JSON & form data.
app.listen(3000, () => {
  console.log("Server is running");
});
