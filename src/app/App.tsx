import React, { Suspense } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { classNames } from "shared/lib/classNames";
import { useTheme } from "app/providers/ThemeProvider";
import { AboutPage } from "pages/AboutPage";
import { MainPage } from "pages/MainPage";
import "./styles/index.scss";

export const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div
      className={classNames(
        "app",
        { hover: true, active: true, selected: false },
        [theme]
      )}
    >
      <button onClick={toggleTheme}>TOGGLE</button>
      <div>
        <Link to="/">Главная</Link>
        <Link to="/about">О нас</Link>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/about" element={<AboutPage/>} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
