import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

// ================= COMPONENTS =================

import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Courses from "./Components/Courses";
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

// ================= USER DASHBOARD =================

import UserLayout from "./Components/UserLayout";
import UserDashboard from "./pages/UserDashboard";
import UserProfile from "./pages/UserProfile";
import UserCourses from "./pages/UserCourses";
import UserEnquiries from "./pages/UserEnquiries";
import UserSettings from "./pages/UserSettings";
import ForgotPassword from "./pages/ForgotPassword";
// ================= PAGES =================

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

      {/* ================= SECOND PROJECT ================= */}

      <SecondHero />
      <Features />
      <Curriculum />
      <LearningJourney />
    </>
  );
}

// ================= APP LAYOUT =================

function AppLayout() {
  const location = useLocation();

  // User dashboard ke saare pages par
  // normal Navbar aur Footer hide rahenge.
  const isUserDashboard =
    location.pathname.startsWith("/user/");

  return (
    <>
      {/* ================= NAVBAR ================= */}

      {!isUserDashboard && <Navbar />}

      {/* ================= ROUTES ================= */}

      <Routes>

        {/* ================= AUTH ROUTES ================= */}

        <Route
          path="/signup"
          element={<Signup />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/forgot"
          element={<Forgot />}
        />

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


        {/* ================= USER DASHBOARD ================= */}

        <Route element={<UserLayout />}>

          <Route
            path="/user/dashboard"
            element={<UserDashboard />}
          />
          <Route
            path="/user/profile"
            element={<UserProfile />}
          />

  <Route
    path="/user/courses"
    element={<UserCourses />}
  />
    <Route
    path="/user/enquiries"
    element={<UserEnquiries />}
  />
    <Route
    path="/user/settings"
    element={<UserSettings />}
  />
  <Route
  path="/user/forgot-password"
  element={<ForgotPassword />}
/>

        </Route>


        {/* ================= HOME ================= */}

        <Route
          path="/"
          element={<Home />}
        />


        {/* ================= ABOUT ================= */}

        <Route
          path="/about"
          element={<About />}
        />


        {/* ================= INSTRUCTORS ================= */}

        <Route
          path="/instructors"
          element={<Instructors />}
        />


        {/* ================= COURSES ================= */}

        <Route
          path="/courses/web-development"
          element={<WebDevelopment />}
        />

        <Route
          path="/courses/frontend-development"
          element={<FrontendDevelopment />}
        />

        <Route
          path="/courses/backend-development"
          element={<BackendDevelopment />}
        />

        <Route
          path="/courses/full-stack"
          element={<FullStackDevelopment />}
        />

        <Route
          path="/courses/python"
          element={<PythonDevelopment />}
        />

        <Route
          path="/courses/java"
          element={<JavaDevelopment />}
        />

        <Route
          path="/courses/data-science"
          element={<DataScienceDevelopment />}
        />

        <Route
          path="/courses/ui-ux-design"
          element={<UIUXDesign />}
        />

        <Route
          path="/courses/ai-development"
          element={<AIDevelopment />}
        />


        {/* ================= CATEGORIES ================= */}

        <Route
          path="/categories/programming"
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
          path="/categories/marketing"
          element={<MarketingHero />}
        />


        {/* ================= CONTACT ================= */}

        <Route
          path="/contact"
          element={<Contact />}
        />


        {/* ================= FALLBACK ================= */}

        <Route
          path="*"
          element={<Welcome />}
        />

      </Routes>

      {/* ================= FOOTER ================= */}

      {!isUserDashboard && <SecondFooter />}
    </>
  );
}

// ================= APP =================

function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
}

export default App;