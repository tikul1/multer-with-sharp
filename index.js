const express = require("express");
const app = express();
const port = 8090;
app.use(express.json());
app.use("/sharp", require("./routes/picRoute"));

app.listen(port, () => {
  console.log(`app connected to ${port}`);
});
