const express = require("express");
const session = require("express-session");
const bodyParser = require("body-parser");
const path = require("path");
const PORT = 3000;
const app = express();
const userRoutes = require("./routes/userRoutes");

app.use(express.urlencoded({ extended: true }));

app.use(session({
    secret: "your-secret-key",
    resave: false,
    saveUninitialized: true
}));

app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use("/users", userRoutes);


// Mảng sản phẩm giống trong file EJS
const products = [
    {
        image: "sp1.webp",
        name: "Giày chạy bộ Nike",
        description: "Thiết kế hiện đại, thoáng khí, phù hợp thể thao.",
        price: 1200000
    },
    {
        image: "sp2.webp",
        name: "Áo Ba Lỗ Nam Under Armour Curry Sleeveless",
        description: "Chất liệu cotton pha siêu mềm mại, thoải mái, nhanh khô.",
        price: 2500000
    },
    {
        image: "sp3.webp",
        name: "Quần Ngắn Nam Under Armour Meridian Woven",
        description: "Chất liệu siêu nhẹ, co giãn linh hoạt và thoáng khí.",
        price: 1850000
    },
    {
        image: "sp4.webp",
        name: "Túi Thể Thao Nike Premium - Xanh Dương",
        description: "Chất liệu bền bỉ, nhiều ngăn tiện lợi.",
        price: 895000
    },
    {
        image: "sp5.webp",
        name: "Quần Dài Thể Thao Nam Under Armour Unstoppable Vented Taper",
        description: "Co giãn, bền bỉ, thoáng khí, linh hoạt tối đa.",
        price: 2999000
    },
    {
        image: "sp6.webp",
        name: "Đồ Bơi Một Mảnh Nữ Speedo Hero 5.0 - Xanh Navy",
        description: "Vải xoắn cao cấp, co giãn cao, họa tiết độc đáo.",
        price: 1650000
    }
];

app.get("/", (req, res) => {
    res.render("home", {
        products: products,
        user: req.session.user || null
    });
});

app.get("/", (req, res) => {
    res.render("home", { user: req.session.user });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
