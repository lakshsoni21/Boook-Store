import { Book } from "../../model/model.js";
import axios from "axios";

import dotenv from "dotenv";
dotenv.config();

const GOOGLE_BOOKS_API = process.env.GOOGLE_BOOKS_API;
const api_key = process.env.api_key;

const fetchBookData = async (title, author) => {
  const response = await fetch(
    `https://www.googleapis.com/books/v1/volumes?q=intitle:${title}+inauthor:${author}&key=${GOOGLE_BOOKS_API}`
  );
  const jsonData = await response.json();
  return jsonData?.items;
};

const isbnImage = async (isbn) => {
  const response = await fetch(
    `https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`
  );
  const jsonData = await response.json();
  return jsonData?.items[0]?.volumeInfo?.imageLinks?.thumbnail;
};

const authorInfo = async (author) => {
  const data = {
    model: "Meta-Llama-3-8B-Instruct",
    messages: [
      {
        role: "user",
        content: `Give me a short history of ${author} author and its top books`,
      },
    ],
  };

  const config = {
    method: "post",
    url: "https://api.awanllm.com/v1/chat/completions",
    headers: {
      Authorization: `Bearer ${api_key}`,
      "Content-Type": "application/json",
    },
    data: data,
  };

  const authorData = await axios(config);
  const jsonData = await authorData.data;
  return jsonData?.choices[0]?.message?.content;
};

const UpdateBook = async (req, res) => {
  try {
    if (!req.body.title || !req.body.author) {
      return res.status(400).send({
        message: "Send all required fields: title, author, publishYear",
      });
    }

    const id = req.params.id;
    const title = req.body.title;
    const author = req.body.author;
    let isbn = req.body.isbn;

    const data = await fetchBookData(title, author);
    const description = data[0]?.volumeInfo?.description;
    let imageURL = "";

    if (isbn) {
      imageURL = await isbnImage(isbn);
    } else {
      isbn = "";
      imageURL = data[0]?.volumeInfo?.imageLinks?.thumbnail;
    }

    const authorData = await authorInfo(author);

    const dataObj = {
      title: title,
      author: author,
      isbn: isbn,
      description: description,
      imageURL: imageURL,
      authorDescription: authorData,
    };

    const updatedObj = await Book.findByIdAndUpdate(id, dataObj);

    if (!updatedObj) {
      return res.status(404).json({
        message: "Book not found",
      });
    }

    return res.status(200).send({
      message: "Book Updated Successfully",
    });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export default UpdateBook;
