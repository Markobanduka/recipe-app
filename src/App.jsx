import React from "react";
import Sidebar from "./components/Sidebar";
import HomePage from "./components/pages/HomePage";
import { Route, Routes } from "react-router-dom";
import FavoritesPage from "./components/pages/FavoritesPage";

const App = () => {
  return (
    <div className="flex">
      <Sidebar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
      </Routes>
    </div>
  );
};

export default App;
