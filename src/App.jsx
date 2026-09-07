import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Courses from "./Components/Courses";
import Instructors from "./pages/Instructors";
import WebDevelopment from "./pages/WebDevelopment";
import FrontendDevelopment from "./pages/FrontendDevelopment";
import BackendDevelopment from "./pages/BackendDevelopment";
import FullStackDevelopment from "./pages/FullStackDevelopment";
import PythonDevelopment from "./pages/PythonDevelopment";
import JavaDevelopment from "./pages/JavaDevelopment";
import DataScienceDevelopment from "./pages/DataScienceDevelopment";
import UIUXDesign from "./pages/UIUXDesign";
import AIDevelopment from "./pages/AIDevelopment";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import About from "./pages/About";
import TopCompanies from "./Components/TopCompanies";
import WhyChoose from "./Components/WhyChoose";
import SecondHero from "./SecondComponents/Hero";
import Features from "./SecondComponents/Features";
import Curriculum from "./SecondComponents/Curriculum";
import LearningJourney from "./SecondComponents/LearningJourney";
import SecondFooter from "./SecondComponents/Footer";
import CyberSecurity from "./Components/CyberSecurity";
import ProgramerHero from "./Components/ProgramerHero";
import GraphicHero from "./Components/GraphicHero";
import MarketingHero from "./Components/MarketingHero";
import Welcome from "./pages/Welcome";
import Signup from "./pages/Signup";
import Forgot from "./pages/Forgot";
import Verification from "./pages/Verification";
import NewPassword from "./pages/NewPassword";
import PasswordChanged from "./pages/PasswordChanged";
import AccountCreated from "./pages/AccountCreated";
// ================= HOME PAGE =================

function Home() {
  return (
    <>
      {/* ================= FIRST PROJECT ================= */}
      <Hero />
      <Courses />
      <TopCompanies />
      <WhyChoose />

      {/* ================= SECOND PROJECT =================
          First project yahan khatam hota hai.
          Iske turant baad second project start hota hai.
      ==================================================== */}
      <SecondHero />
      <Features />
      <Curriculum />
      <LearningJourney />
    </>
  );
}

// ================= APP =================

function App() {
  return (
    <BrowserRouter>

      {/* ================= NAVBAR ================= */}

      <Navbar />

      {/* ================= ROUTES ================= */}

      <Routes>

        {/* <Route path="/" element={<Welcome />} /> */}
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
                <Route path="/forgot" element={<Forgot />} />
                <Route
                  path="/verification"
                  element={<Verification />}
                />
                <Route
                  path="/new-password"
                  element={<NewPassword />}
                />
                <Route
                  path="/password-changed"
                  element={<PasswordChanged />}
                />
                <Route
                  path="/account-created"
                  element={<AccountCreated />}
                />
                <Route path="*" element={<Welcome />} />

        {/* HOME */}
        <Route
          path="/"
          element={<Home />}
        />

        {/* ABOUT */}
        <Route
          path="/about"
          element={<About />}
        />

        {/* INSTRUCTORS */}
        <Route
          path="/instructors"
          element={<Instructors />}
        />

        {/* WEB DEVELOPMENT */}
        <Route
          path="/courses/web-development"
          element={<WebDevelopment />}
        />
        <Route
          path="/courses/frontend-development"
          element={<FrontendDevelopment />}
        />


        {/* BACKEND DEVELOPMENT */}
        <Route
          path="/courses/backend-development"
          element={<BackendDevelopment />}
        />


        {/* FULL STACK DEVELOPMENT */}
        <Route
          path="/courses/full-stack"
          element={<FullStackDevelopment />}
        />
        {/* PYTHON DEVELOPMENT */}
        <Route
          path="/courses/python"
          element={<PythonDevelopment />}
        />


        {/* JAVA DEVELOPMENT */}
        <Route
          path="/courses/java"
          element={<JavaDevelopment />}
        />


        {/* DATA SCIENCE DEVELOPMENT */}
        <Route
          path="/courses/data-science"
          element={<DataScienceDevelopment />}
        />

        {/* UI / UX DESIGN */}
        <Route
          path="/courses/ui-ux-design"
          element={<UIUXDesign />}
        />
        <Route
          path="/courses/ai-development"
          element={<AIDevelopment />}
        />
{/* cyber-security */}
        <Route
          path="categories/programming"
          element={<ProgramerHero />}
        />
     <Route
          path="/categories/cyber-security"
          element={<CyberSecurity />}
        />
        <Route
          path="/categories/design"
          element={<GraphicHero />}
        />
        <Route
          path="categories/marketing"
          element={<MarketingHero/>}
        />
        <Route
          path="/contact"
          element={<Contact />}
        />
<Route
          path="/login"
          element={<Login />  }
        />
      </Routes>
      <SecondFooter />

    </BrowserRouter>
  );
}

export default App;