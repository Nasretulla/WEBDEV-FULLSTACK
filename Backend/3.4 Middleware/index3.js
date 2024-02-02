import express from "express";

const app = express();
const port = 3000;

//Custom function
function logger(req, res, next) {
  console.log("Request method " + req.method);
  console.log("URL is " + req.url);
  next();
}

app.use(logger);

app.get("/", (req, res) => {
  res.send("Hello again");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
