import { useState } from 'react';
import { Outlet } from 'react-router';
import './App.css';
import NavBar from './components/NavBar.jsx';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <h1>My React Webfolio</h1>
        <NavBar />
      </header>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </>
  )
};

export default App;
