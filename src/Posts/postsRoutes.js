const express = require("express");
const {
  randomNumberGenerator,
  someAsyncFunction,
} = require("./postsFunctions");

const routes = express.Router();

routes.get("/", (request, response) => {
  response.json(`Received a request on ${request.originalUrl}`);
});

routes.get("/randomNumber", async (request, response) => {
  let asyncResult = await someAsyncFunction();

  //response.send(randomNumberGenerator().toString());
  response.send(`<h1> ${randomNumberGenerator()}</h1>`);
});

// Set up route params with the colon before the name.
routes.get("/:postID", (request, response) => {
  response.json(
    `Received a GET request for a post with ID of ${request.params.postID}`
  );
});
// Use Postman or another HTTP tool to visit a POST route.
routes.post("/:postID", (request, response) => {
  let submittedData = request.body;
  console.log(JSON.stringify(submittedData));

  let submittedName = request.body.name.toUpperCase();
  submittedName;

  // for form urlencoded submission
  //let submittedPokemon = JSON.parse(request.body.favouritePokemon).name;

  // for raw json submission
  let submittedPokemon = request.body.favouritePokemon.name;

  response.json(`Received fave pokemon of ${submittedPokemon}`);

  // Cleanly build a response OBJ
  //   let jsonResponse = {
  //     message: `Received a POST request for a post with ID of ${request.params.postID}`,
  //     receivedBody: request.body,
  //   };
});

module.exports = routes;
