import React from "react";
import NavBar from "./components/NavBar";
import LandingPage from "./pages/LandingPage";
import Article from "./pages/Article";
import ArticleList from "./pages/ArticleList";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <NavBar name={""} />
      <Routes>
        <Route Component={LandingPage} path="/" />
        <Route Component={Article} path="/article" />
        <Route Component={ArticleList} path="/articlelist" />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
