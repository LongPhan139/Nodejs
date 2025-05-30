const users = []; // Dùng mảng tạm thời thay vì DB

exports.getLogin = (req, res) => {
    res.render("login", { error: null });
};

exports.postLogin = (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        req.session.user = user;
        res.redirect("/");
    } else {
        res.render("login", { error: "Sai tên đăng nhập hoặc mật khẩu" });
    }
};

exports.getRegister = (req, res) => {
    res.render("register", { error: null });
};

exports.postRegister = (req, res) => {
    const { username, password } = req.body;
    if (users.find(u => u.username === username)) {
        res.render("register", { error: "Tên người dùng đã tồn tại" });
    } else {
        users.push({ username, password });
        res.redirect("/users/login");
    }
};

exports.logout = (req, res) => {
    req.session.destroy();
    res.redirect("/");
};