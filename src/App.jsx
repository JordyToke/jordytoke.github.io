import { useState, useEffect, useTransition, Suspense } from "react";
import { Outlet } from "react-router";
import Header from "./components/Header";
import Footer from "./components/Footer";
import styles from "./animation.module.css";

function App() {

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
