import { Book } from "../../model/model.js";

const DeleteBook = async (req, res) => {
  try {
    const id = req.params.id;

    const deletedObj = await Book.findByIdAndDelete(id);

    if (!deletedObj) {
      return res.status(404).json({
        message: "Book not found",
      });
    }

    return res.status(200).send({
      message: "Book deleted Successfully",
    });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export default DeleteBook;
