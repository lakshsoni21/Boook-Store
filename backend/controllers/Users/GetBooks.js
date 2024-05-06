import { User } from "../../model/userSchema.js";

const GetBooks = async (req, res) => {
  try {
    const id = req.userID;
    const user = await User.findById(id);
    const books = await user.populate("books");

    return res.status(200).json({ message: "Success", data: books });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export default GetBooks;
