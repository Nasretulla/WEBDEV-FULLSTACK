//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming
import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

var userIsAuthorised = false;

app.use(bodyParser.urlencoded({ extended: true }));



function checkPassword(req, resp, next) {
  const pass = req.body["password"];

  if (pass === "ILoveProgramming") {
    userIsAuthorised = true;
  }
  next();
}

app.use(checkPassword);

app.get("/", (req, resp) => {
  resp.sendFile(__dirname + "/public/index.html");
});

app.post("/check", (req, resp) => {
  if (userIsAuthorised) {
    resp.sendFile(__dirname + "/public/secret.html");
  } else {
    resp.sendFile(__dirname + "/public/index.html");
    resp.send("Wrong password");
  }
});

app.listen(port, () => {
  console.log(`The server is running on port ${port}`);
});
