const express = require("express");
const allItems = require("./items");

const app = express();

const port = process.env.PORT || 8080;

app.use(express.static("dist"));

app.get("/api/items", (req, res) => {
  const itemName = req.query.name?.trim();

  let regExp;
  const items = itemName
    ? ((regExp = new RegExp(itemName, "i")),
      allItems.filter((item) => item.name.search(regExp) > -1))
    : allItems;
  res.send({ items });
});

app.listen(port, () => console.log(`Listening on port ${port}!`));
