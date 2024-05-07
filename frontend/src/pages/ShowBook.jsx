import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";

import Markdown from "react-markdown";

const ShowBook = () => {
  const [Book, setBook] = useState({});
  const [Loading, setLoading] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://boook-store-api.vercel.app/books/${id}`)
      .then((response) => {
        setBook(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-4">
      <BackButton />
      <h1 className="mt-5 text-3xl">Details of the Book</h1>
      {Loading ? (
        <Spinner />
      ) : (
        <div className="mt-6 font-semibold">
          <h1 className="text-2xl">
            {Book.title} ({Book.author})
          </h1>
          <hr className="mt-2" />
            <div className="w-fit">
              <div>
                <img src={Book.imageURL} alt="" className="w-auto float-right rounded-md p-2 mobile:hidden"/>
                <p className="p-2">{Book.description}</p>
              </div>
              <hr />
              <div className="p-2">
                <h1 className="text-2xl">About the author ({Book.author})</h1>
                <Markdown>{Book.authorDescription}</Markdown>
              </div>
            </div>
        </div>
      )}
    </div>
  );
};

export default ShowBook;
