
import { User } from "../../model/userSchema.js";
import bcrypt from "bcryptjs";

import jwt from "jsonwebtoken";

import dotenv from "dotenv";
dotenv.config();

const SECRET_KEY = process.env.SECRET_KEY;
console.log(SECRET_KEY);

const Login = async (req, res) => {
  try {
    const username = req.body.username;
    const password = req.body.password;

    if (!username || !password) {
      return res.status(400).send({
        message: "Please Send all the required fields",
      });
    }

    const user = await User.find({
      username: username,
    });

    if (user.length == 0) {
      return res
        .status(401)
        .json({ message: "Username does not exist, Invalid credentials" });
    }

    const hashedPassword = user[0].password;
    const isMatch = await bcrypt.compare(password, hashedPassword);

    if (isMatch) {
      const obj = {
        id: user[0]._id,
      };
      const token = jwt.sign(obj, SECRET_KEY, { expiresIn: "1h" });
      return res
        .status(200)
        .json({ message: "Login Successfull", token: token });
    }

    return res
      .status(401)
      .json({ message: "Login Failed, Incorrect Password" });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export default Login;
