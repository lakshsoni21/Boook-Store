import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-8 text-center">Book Organizer</h1>
      <p className="text-gray-600 text-lg text-center">
        Organize your book collection, track what you've read, and discover new
        favorites.
      </p>
      <div className="flex space-x-4 mt-8 sm:flex-col sm:items-center">
        <Link
          to="/login"
          className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-700"
        >
          Login
        </Link>
        <Link
          to="/signup"
          className="px-4 py-2 text-white bg-green-500 rounded-md hover:bg-green-700"
        >
          Register
        </Link>
      </div>
    </div>
  );
};

export default Home;
