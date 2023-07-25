import "./App.css";
import Homepage from "./components/Homepage";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Expense from "./pages/Expense";
import Income from "./pages/Income";

function App() {
  return (
    <>
      <BrowserRouter>
        <nav>
          <ul
            style={{ display: "flex", justifyContent: "center" }}
            className="nav_ul"
          >
            <li>
              <Link to="/">Homepage</Link>
            </li>
            <li>
              <Link to="/income">Inocme</Link>
            </li>
            <li>
              <Link to="/expense">Expense</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/income" element={<Income />}></Route>
          <Route path="/expense" element={<Expense />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
