const fs = require("fs");
const User = require("../../models/user");

const createUser = async function create(req, res) {
  const body = req.body;

  new Promise((resolve, reject) => {
    User.create({
      username,
      password,
      role,
      name,
      phone,
      email,
      gender,
      birthday,
      created_by,
    })
      .then((user) => {
        resolve({ username: user.username, id: user._id });
      })
      .catch((err) => reject(err));
  });
};
