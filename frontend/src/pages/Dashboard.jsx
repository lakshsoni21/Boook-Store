import React, { useEffect, useState } from "react";
import axios from "axios";
import { Shimmer } from "../components/Shimmer";
import { Link, useNavigate } from "react-router-dom";

// Icons
import { MdOutlineAddBox } from "react-icons/md";

import Card from "../components/Card";
import Table from "../components/Table";

const Dashboard = () => {
  // Books will be here in form of json
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showTable, setShowTable] = useState(false);
  const [inputText, setInputText] = useState("");
  const [booksToShow, setBooksToShow] = useState([]);
  const [search, setSearch] = useState(false);

  function HandleTable() {
    setShowTable(true);
  }

  function HandleCard() {
    setShowTable(false);
  }

  function handleSearch() {
    const inputTextLower = inputText.toLowerCase();
    const data = books.filter((book) =>
      book.title.toLowerCase().includes(inputTextLower)
    );
    setBooksToShow(data);
    setSearch(true);
  }

  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  if (!token) {
    navigate("/login");
  }

  useEffect(() => {
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    setLoading(true);
    axios
      .get("https://boook-store-4lip.onrender.com/users/books", config)
      .then((response) => {
        setBooks(response.data.data.books);
        setBooksToShow(response.data.data.books);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        navigate("/");
      });
  }, []);

  const handleLogOut = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <div className="p-4 mobile:px-2 mobile:w-auto">
      <div className="flex justify-center gap-2">
        <div>
          <button
            className="py-2 px-3 rounded-md bg-btn text-white font-bold hover:underline mobile:text-sm"
            onClick={() => {
              HandleTable();
            }}
          >
            Table
          </button>
        </div>
        <div>
          <button
            className="py-2 px-3 rounded-md bg-btn text-white font-bold hover:underline mobile:text-sm"
            onClick={() => {
              HandleCard();
            }}
          >
            Cards
          </button>
        </div>
        <div>
          <button
            className="py-2 px-3 rounded-md bg-btn text-white font-bold hover:underline mobile:text-sm"
            onClick={() => {
              handleLogOut();
            }}
          >
            Log Out
          </button>
        </div>
      </div>
      <div className="flex justify-between items-center pr-5 mobile:pr-7">
        <Link to={"/users/dashboard"}>
          <h1 className="text-3xl my-2 mobile:text-xl mobile:font-semibold">
            {showTable ? "Book List" : "Card Lists"}
          </h1>
        </Link>

        <Link to={"/users/books/create"}>
          <MdOutlineAddBox className="text-sky-800 text-4xl" />
        </Link>
      </div>

      <div className="flex justify-center p-4 gap-3 mb-4 items-center">
        <div>
          <input
            type="text"
            className="border-2 border-black h-[38px] rounded-md p-2"
            value={inputText}
            onChange={(e) => {
              setInputText(e.target.value);
            }}
          />
        </div>
        <div>
          <button
            className="bg-btn text-white font-bold py-2 px-3 rounded-md hover:underline"
            onClick={() => {
              handleSearch();
            }}
          >
            Search
          </button>
        </div>
      </div>

      {loading ? (
        <Shimmer />
      ) : booksToShow.length == 0 && !search ? (
        <div>
          <h1 className="text-xl font-semibold text-center">
            {" "}
            Seems like bookshelf is empty!
          </h1>
        </div>
      ) : booksToShow.length == 0 && search ? (
        <h1 className="text-lg text-center font-semibold">
          The book you are searching does not exist
        </h1>
      ) : showTable ? (
        <Table books={booksToShow} />
      ) : (
        <Card books={booksToShow} />
      )}
    </div>
  );
};

export default Dashboard;
