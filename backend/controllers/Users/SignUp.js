import { User } from "../../model/userSchema.js";
import bcrypt from "bcryptjs";

const hashPassword = async (password) => {
  const salt = await bcrypt.genSalt(10); // Generate a random salt with a cost factor of 10
  return await bcrypt.hash(password, salt); // Hash the password with the salt
};

const SignUp = async (req, res) => {
  try {
    if (!req.body.name || !req.body.username || !req.body.password) {
      return res.status(400).send({
        message: "Please Send all the required fields",
      });
    }

    const name = req.body.name;
    const username = req.body.username;
    const password = req.body.password;

    const id = await User.exists({ username: username });
    if (id) {
      return res.status(409).send({
        message: "Usernmae already exist",
      });
    }

    const hashedPassword = await hashPassword(password);

    const dataObj = {
      name: name,
      username: username,
      password: hashedPassword,
    };

    const newUser = await User.create(dataObj);

    return res.status(201).send("Success");
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export default SignUp;
