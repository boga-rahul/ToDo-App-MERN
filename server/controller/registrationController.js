const User = require("../model/User");
const bcrypt = require("bcrypt");

const registerUser = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res
      .status(400)
      .json({ message: "Username and password are required" });
  }

  const duplicate = await User.findOne({ username: username }).exec();

  if (duplicate) {
    return res.sendStatus(400);
  } else {
    try {
      // encrypt the password
      const hashedPwd = await bcrypt.hash(password, 10);

      // store the new user
      const result = await User.create({
        username: username,
        password: hashedPwd,
      });

      console.log(result);
      res.status(201).json({ success: `New user ${username} created!` });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
};

module.exports = {
  registerUser,
};
