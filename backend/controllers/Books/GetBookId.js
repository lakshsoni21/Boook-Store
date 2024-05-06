import { Book } from "../../model/model.js";

const GetBookId = async (req, res) => {
  try {
    const id = req.params.id;
    const book = await Book.findById(id);
    return res.status(200).json(book);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export default GetBookId;
