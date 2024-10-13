import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="bg-blue-500 flex justify-between h-12 items-center text-white font-bold ">
      <Link to="/">
        <h1 className="text-2xl">BLOGS</h1>
      </Link>
      <Link to="/add">
        <button>Add Post+</button>
      </Link>
    </div>
  );
}
