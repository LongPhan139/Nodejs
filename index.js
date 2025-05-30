const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

const userRoutes = require("./routes/userRoutes");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use("/", userRoutes);

app.listen(port, () => {
    console.log(`App running at http://localhost:${port}`);
});
