import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, resp) => {
  resp.send("Hello Maailma!");
});

app.get("/about", (req, resp) => {
  resp.send("<h1>About me</h1>");
});

app.get("/contact", (req, resp) => {
  resp.send("<h1>Contact me</h1>");
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
