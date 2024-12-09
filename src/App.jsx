import { useState } from 'react';
import { Outlet } from 'react-router';
import './App.css';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header></header>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </>
  )
};

export default App;
