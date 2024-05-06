import React, { useState } from "react";
import BackButton from "../components/BackButton";
import { useNavigate, useParams } from "react-router-dom";
import Spinner from "../components/Spinner";
import axios from "axios";

const DeleteBooks = () => {
  const [loading, setLoading] = useState(false);

  const { id } = useParams();
  const navigate = useNavigate();

  const handleDelete = () => {

    setLoading(true);

    axios.delete(`http://localhost:5555/books/${id}`)
    .then(() => {
      alert("Book Deleted Successfully");
      setLoading(false);
      navigate('/users/dashboard');
    })
    .catch((error) => {
      console.log(error);
      alert("Error Occured, Check the console")
    })
  };

  return (
    <>
      {loading ? (
        <div className="flex justify-center items-center">
          <Spinner />
        </div>
      ) : (
        <>
          <div className="p-4">
            <BackButton />
            <h1 className="text-3xl mt-2 font-semibold">Delete Book</h1>
          </div>
          <div className="flex justify-center">
            <div className="border-2 border-sky-600 p-5">
              <h1 className="text-2xl font-semibold">
                Are you sure you want to delete this book
              </h1>
              <button
                className="bg-red-600 rounded-md w-full p-2 mt-4 text-white hover:bg-red-700 hover:shadow-md hover:shadow-gray-400"
                onClick={() => {
                  handleDelete();
                }}
              >
                Yes, Delete it
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default DeleteBooks;
