import React, { Suspense } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { classNames } from "shared/lib/classNames";
import { useTheme } from "app/providers/ThemeProvider";
import { AboutPage } from "pages/AboutPage";
import { MainPage } from "pages/MainPage";
import "./styles/index.scss";
import { AppRouter } from "./providers/router";
import { Navbar } from "widgets/Navbar";

export const App = () => {
  const { theme } = useTheme();

  return (
    <div
      className={classNames(
        "app",
        { hover: true, active: true, selected: false },
        [theme]
      )}
    >
      <Navbar/>
      <AppRouter />
    </div>
  );
};

export default App;
