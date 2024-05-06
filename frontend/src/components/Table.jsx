import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineDelete } from "react-icons/md";

const TableRow = ({ book, index }) => {
  return (
    <tr key={book.__id} className="h-8 mobile:h-fit">
      <td className="border border-slate-700 rounded-md text-center">
        {index + 1}
      </td>
      <td className="border border-slate-700 rounded-md text-center">
        {book.title}
      </td>
      <td className="border border-slate-700 rounded-md text-center">
        {book.author}
      </td>
      <td className="border border-slate-700 rounded-md text-center">
        {book.isbn ? book.isbn : "NULL"}
      </td>
      <td className="border border-slate-700 rounded-md text-center">
        <div className="flex justify-center gap-x-4 mobile:gap-x-1">
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
      </td>
    </tr>
  );
};

const Table = ({ books }) => {
  return (
    <table className="w-full border-separate border-spacing-2 mobile:border-collapse mobile:text-sm">
      <thead>
        <tr>
          <th className="border border-slate-600 rounded-md">No</th>
          <th className="border border-slate-600 rounded-md">Title</th>
          <th className="border border-slate-600 rounded-md max-md:hidden">
            Author
          </th>
          <th className="border border-slate-600 rounded-md max-md:hidden">
            ISBN
          </th>
          <th className="border border-slate-600 rounded-md max-md:hidden">
            Operations
          </th>
        </tr>
      </thead>
      <tbody>
        {books.map((book, index) => {
          return <TableRow book={book} key={book._id} index={index} />;
        })}
      </tbody>
    </table>
  );
};

export default Table;
