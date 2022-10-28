import React, { Suspense, useState } from "react";
import { Counter } from "./components/Counter";
import { Routes, Route, Link } from "react-router-dom";
import { MainPageAsync } from "./pages/MainPage/MainPage.async";
import { AboutPageAsync } from "./pages/AboutPage/AboutPage.async";
import "./styles/index.scss";
import { useTheme } from "./theme/useTheme";

export const App = () => {

    const {theme, toggleTheme} = useTheme()

  return (
    <div className={`app ${theme}`}>
      <button onClick={toggleTheme}>TOGGLE</button>
      <div>
        <Link to="/">Главная</Link>
        <Link to="/about">О нас</Link>
      </div>
      <Counter />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<MainPageAsync />} />
          <Route path="/about" element={<AboutPageAsync />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
