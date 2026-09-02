import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Courses from "./Components/Courses";
import Instructors from "./pages/Instructors";
import WebDevelopment from "./pages/WebDevelopment";
import About from "./pages/About";
import TopCompanies from "./Components/TopCompanies";
import WhyChoose from "./Components/WhyChoose";
import SecondHero from "./SecondComponents/Hero";
import Features from "./SecondComponents/Features";
import Curriculum from "./SecondComponents/Curriculum";
import LearningJourney from "./SecondComponents/LearningJourney";
import SecondFooter from "./SecondComponents/Footer";


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
      <SecondFooter />
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



      </Routes>

    </BrowserRouter>
  );
}

export default App;