import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineDelete } from "react-icons/md";

const CardComp = ({book}) => {
  return (
    <div className="card flex flex-col rounded-lg border-2 border-black p-2 w-[300px]">
            <div className="w-full h-full">
              <img
                src={book.imageURL}
                className="h-[20rem] w-full rounded-md"
              />
            </div>
            <div className="p-2">
              <h1>Title - {book.title}</h1>
              <h1>Author - {book.author}</h1>
              <h1>ISBN no - {book.isbn}</h1>
            </div>
            <div className="flex justify-center gap-x-4 mobile:gap-x-5">
              <Link to={`/users/books/details/${book._id}`}>
                <BsInfoCircle className="text-2xl text-green-800 mobile:text-xl" />
              </Link>
              <Link to={`/users/books/edit/${book._id}`}>
                <AiOutlineEdit className="text-2xl text-yellow-600 mobile:text-xl" />
              </Link>
              <Link to={`/users/books/delete/${book._id}`}>
                <MdOutlineDelete className="text-2xl text-red-600 mobile:text-xl" />
              </Link>
            </div>
          </div>
  )
}

const Card = ({ books }) => {
  return (
    <div className="cards flex flex-wrap gap-10 justify-center">
      {books.map((book) => {
          return <CardComp book={book} key={book._id}/>
      })}
    </div>
  );
};

export default Card;
