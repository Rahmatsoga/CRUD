import "./App.css";
import AddPost from "./Components/AddPost";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ShowDynamic from "./Components/ShowDynamic";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddPost />} />
          <Route path="/post/:id" element={<ShowDynamic />}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
