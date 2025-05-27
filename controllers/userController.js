const users = require('../models/userModel');

exports.getAllUsers = (req, res) => {
    res.render("home", { data: users.getAll() });
};

exports.addUser = (req, res) => {
    users.add(req.body);
    res.redirect('/');
};

exports.deleteUser = (req, res) => {
    users.remove(req.body.userUniqueId);
    res.redirect('/');
};

exports.updateUser = (req, res) => {
    users.update(req.body);
    res.redirect('/');
};
