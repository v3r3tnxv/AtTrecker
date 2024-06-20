import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import NotFoundPage from "./pages/NotFoundPage";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path='*' element={<NotFoundPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/home' element={<HomePage />} />
        <Route path='/' element={<Navigate to='/login' />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
