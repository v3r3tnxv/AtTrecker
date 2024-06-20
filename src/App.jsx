import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import NotFoundPage from "./pages/NotFound";
import LoginPage from "./pages/Login";
import HomePage from "./pages/Home";

import ResetPasswordPage from "./pages/ResetPassword";
import RecoveryPasswordPage from "./pages/RecoveryPassword";
import SingleSubjectPage from "./pages/SingleSubject";
import SubjectsPage from "./pages/Subjects";

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path='/' element={<Navigate to='/login' />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/home' element={<HomePage />} />
        <Route path='/password-recovery' element={<RecoveryPasswordPage />} />
        <Route path='/password-reset' element={<ResetPasswordPage />} />
        <Route path='/subjects' element={<SubjectsPage />} />
        <Route path='single-subject' element={<SingleSubjectPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
