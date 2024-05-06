import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  isbn: {
    type: Number
  },
  imageURL : {
    type: String
  },
  description: {
    type: String,
    required: true,
  },
  authorDescription: {
    type: String,
    required: true,
  }
});

//   Collection name is 'Book' whic contains group of documents
export const Book = mongoose.model("Book", bookSchema);
