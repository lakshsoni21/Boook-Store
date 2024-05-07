import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../components/Spinner";

import BackButton from "../components/BackButton";

const EditBooks = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [isbn, setISBN] = useState("");
  const [loading, setLoading] = useState(false);

  const { id } = useParams();

  const handleEditBook = () => {
    const newData = {
      title,
      author,
      isbn,
    };
    setLoading(true);
    axios
      .put(`https://boook-store-api.vercel.app/books/${id}`, newData)
      .then(() => {
        setLoading(false);
        alert("Data Edited Successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://boook-store-api.vercel.app/books/${id}`)
      .then((response) => {
        setTitle(response.data.title);
        setAuthor(response.data.author);
        setISBN(response.data.isbn);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        alert("Error Occured, Please check console")
      });
  }, []);

  return (
    <>
    <div className="h-full w-full flex justify-center items-center gradient-custom">
      <div className="absolute top-5 left-5">
        <BackButton />
      </div>
      <div
        className="flex flex-col w-[38%] h-[75%] laptop:h-auto laptop:w-auto mobile:w-auto mobile:h-auto rounded-2xl p-10 bg-[#292424] shadow-xl shadow-gray-700
    mobile-sm:h-[80%]"
      >
        <div>
          <h1 className="text-2xl font-semibold text-center p-4 text-white">
            Edit Book
          </h1>
          <h1 className="text-xl font-semibold text-center text-gray-400 mobile-sm:text-lg">
            Edit Book title and author's name
          </h1>
        </div>
        {loading ? (
          <div className="flex flex-col items-center">
            <Spinner />
            <h3 className="text-2xl font-semibold text-center text-gray-400">Wait.. Retrieving information about book</h3>
          </div>
        ) : (
          <div className="p-4 flex items-center flex-col gap-7 my-10 mobile-sm:my-6 mobile-sm:gap-6">
            <div className="flex gap-4 w-full h-11 justify-center ">
              <input
                type="text"
                name="title"
                id="title"
                className="border w-full rounded-sm p-3 text-md text-white bg-[#292424] border-white placeholder:text-white"
                placeholder="Book Title"
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
                value={title ? title : ""}
              />
            </div>
            <div className="flex gap-4 w-full justify-center h-11">
              <input
                type="text"
                name="author"
                id="author"
                placeholder="Author's Name"
                className="border border-white w-full rounded-sm p-3 text-md text-white bg-[#292424] placeholder:text-white"
                onChange={(e) => {
                  setAuthor(e.target.value);
                }}
                value={author ? author : ""}
              />
            </div>
            <div className="flex gap-4 w-full justify-center h-11">
              <input
                type="number"
                name="isbn"
                id="isbn"
                placeholder="ISBN no. (Optional)"
                className="border border-white w-full rounded-sm p-3 text-md text-white bg-[#292424] placeholder:text-white"
                onChange={(e) => {
                  setISBN(e.target.value);
                }}
                value={isbn ? isbn : ""}
              />
            </div>
            <div className="my-5">
              <button
                className="py-2 px-10 rounded-md text-center border-2 border-white text-white hover:cursor-pointer"
                onClick={() => {
                  handleEditBook();
                }}
              >
                Edit Book
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  </>
  );
};

export default EditBooks;
