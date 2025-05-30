const express = require("express");
const session = require("express-session");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
const port = 3000;

// Routes
const userRoutes = require("./routes/userRoutes");

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(session({
    secret: 'secret-key',
    resave: false,
    saveUninitialized: true
}));

// View Engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Routes
app.use("/users", userRoutes);

// Home Route
app.get("/", (req, res) => {
    res.render("home", { user: req.session.user });
});

// Start server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});