let userList = [
    { userUniqueId: "1", userName: "Long123", userEmail: "Long@gmail.com", userAge: "20" },
    { userUniqueId: "2", userName: "Huy123", userEmail: "Huy@gmail.com", userAge: "20" },
    { userUniqueId: "3", userName: "Luong123", userEmail: "Luong@gmail.com", userAge: "20" }
];

exports.getAll = () => userList;

exports.add = (user) => {
    userList.push(user);
};

exports.remove = (id) => {
    userList = userList.filter(u => u.userUniqueId !== id);
};

exports.update = (data) => {
    const user = userList.find(u => u.userUniqueId === data.userUniqueId);
    if (user) {
        user.userName = data.userName || user.userName;
        user.userEmail = data.userEmail || user.userEmail;
        user.userAge = data.userAge || user.userAge;
    }
};
