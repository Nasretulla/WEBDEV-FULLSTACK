import express from "express";

const app = express();
const port = 3000;

function logger(resp, req, next) {
  console.log("Request method: ", req.method);
  console.log("Request URL is:", req.url);
  next();
}

app.use(logger);

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
