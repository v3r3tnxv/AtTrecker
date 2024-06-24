// client/App.jsx

import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";

import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";

import NotFoundPage from "./pages/NotFound";
import HomePage from "./pages/Home";

import LoginPage from "./pages/authentication/Login";
import ResetPasswordPage from "./pages/authentication/ResetPassword";
import RecoveryPasswordPage from "./pages/authentication/RecoveryPassword";
import RegistrationPage from "./pages/authentication/Registration";

import AttendanceManagement from "./pages/managements/Attendance";
import GroupsManagement from "./pages/managements/Groups";
import LessonsManagments from "./pages/managements/Lessons";
import StatusesManagement from "./pages/managements/Statuses";
import StudentsManagement from "./pages/managements/Students";
import SubgroupsManagement from "./pages/managements/Subgroups";
import SubjectsManagement from "./pages/managements/Subjects";
import TeachersManagement from "./pages/managements/Teachers";
import UsersManagement from "./pages/managements/Users";

// import SubjectsPage from "./pages/Subjects";
import SingleSubjectPage from "./pages/SingleSubject";
import AttendanceReportPage from "./pages/AttendanceReport";
import UserProfilePage from "./pages/UserProfile";

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/attendance-report" element={<AttendanceReportPage />} />
        <Route path="/user-profile" element={<UserProfilePage />} />
        <Route path="/registration" element={<RegistrationPage />} />
        <Route path="/password-recovery" element={<RecoveryPasswordPage />} />
        <Route path="/password-reset" element={<ResetPasswordPage />} />
        {/* <Route path="/subjects" element={<SubjectsPage />} /> */}
        <Route path="/single-subject" element={<SingleSubjectPage />} />
        <Route path="/students-management" element={<StudentsManagement />} />
        <Route path="/statuses-management" element={<StatusesManagement />} />
        <Route path="/attendance-management" element={<AttendanceManagement />} />
        <Route path="/groups-management" element={<GroupsManagement />} />
        <Route path="/lessons-management" element={<LessonsManagments />} />
        <Route path="/subgroups-management" element={<SubgroupsManagement />} />
        <Route path="/subjects-management" element={<SubjectsManagement />} />
        <Route path="/teachers-management" element={<TeachersManagement />} />
        <Route path="/users-management" element={<UsersManagement />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
