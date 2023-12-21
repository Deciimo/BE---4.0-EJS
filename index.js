import express from "express";
import ejs from "ejs";
import dirname from "path";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
    const today = new Date();
    const day = today.getDay();

    let type = "a weekday";
    let adv = "It's time to workhard";

    if (day === 0 || day === 6) {
    type = "the weekend";
    adv = "It's time to have fun";
}
    res.render("index.ejs", {
    dayType: type,
    advice: adv,
  });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}.`)
});
