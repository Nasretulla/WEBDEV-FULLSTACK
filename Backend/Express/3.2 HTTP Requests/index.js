import express from "express";
const app = express();

const port = 3000;

app.get("/", (request, response) => {
  response.send("<h1>Homepage</h1>");
});

app.get("/about", (request, response) => {
  response.send("<h1>About Me</h1><p>My name is Nasretulla</p>");
});

app.get("/contact", (request, response) => {
  response.send("<h1>Contact</h1> <p>My email is: someone@google.com</p>");
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
