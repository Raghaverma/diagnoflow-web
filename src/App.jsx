import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

// Main pages
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import NotFound from "./pages/NotFound.jsx";

// Dashboard layout and subpages
import DashboardLayout from "./pages/dashboard/DashboardLayout.jsx";
import Dashboard from "./pages/dashboard/Dashboard.jsx"; // ✅ Correct import
import StartDiagnosis from "./pages/dashboard/StartDiagnosis.jsx";
import Flashcards from "./pages/dashboard/Flashcards.jsx";
import CaseBank from "./pages/dashboard/CaseBank.jsx";
import Progress from "./pages/dashboard/Progress.jsx";
import Profile from "./pages/dashboard/Profile.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        {/* Main routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Dashboard layout with nested routes */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="start-diagnosis" element={<StartDiagnosis />} />
          <Route path="flashcards" element={<Flashcards />} />
          <Route path="case-bank" element={<CaseBank />} />
          <Route path="progress" element={<Progress />} />
          <Route path="profile" element={<Profile />} />
        </Route>

        {/* 404 Fallback */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
