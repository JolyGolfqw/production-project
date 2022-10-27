import React, { Suspense } from "react";
import { Counter } from "./components/Counter";
import './index.scss'
import {Routes, Route, Link} from 'react-router-dom'
import MainPage from "./pages/MainPage/MainPage";
import AboutPage from "./pages/AboutPage/AboutPage";
import { MainPageAsync } from "./pages/MainPage/MainPage.async";
import { AboutPageAsync } from "./pages/AboutPage/AboutPage.async";

export const App = () => {
  return (
    <div className="app">
        <div>

        <Link to='/'>Главная</Link>
        <Link to='/about'>О нас</Link>
        </div>
      <Counter />
      <Suspense fallback={<div>Loading...</div>}>

        <Routes>
            <Route path="/" element={<MainPageAsync/>}/>
            <Route path="/about" element={<AboutPageAsync/>}/>
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
