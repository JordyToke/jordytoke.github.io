import { useState, useEffect } from "react";
import { Outlet } from "react-router";
import "./App.css";
import NavBar from "./components/NavBar.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <header>
        <h1>Jordy Toke</h1>
        <NavBar />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <small>
          <span>&copy; Jordy Toke 2025</span>
        </small>
      </footer>
    </>
  );
}

export default App;
