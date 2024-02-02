import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, resp) => {

    const today = new Date();
    const day = today.getDate();
    // console.log(day);

    let type = "a weekday";
    let adv = "Its time to work hard"


    if(day === 0 || 6){
        let type = "a weekend";
        let adv = "Its time to have some fun"

    }

  resp.render("index.ejs", {
    dayType: " a weekday",
    advice: "Its time to work hard",
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});
