const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

const routes = require("./routes");

app.use("/api", routes);
app.use("/auth", routes);

app.listen(3001, () => {
  console.log("listening at 3001....");
});
