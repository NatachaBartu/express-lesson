const express = require("express");

//Initialize Express as an instance named "app".
const app = express();

const PORT = process.env.PORT || 3000;
const HOST = "0.0.0.0";

app.use(express.urlencoded({ extended: true }));

// We can receive JSON data from POST/ PUT/ PATCH/ etc requests
app.get("/", (request, response) => {
  response.json();
  //   Same as above but for form data
});

app.listen(PORT, HOST, () => {
  console.log("Server is running");
});
