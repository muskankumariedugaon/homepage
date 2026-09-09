import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import ShellPages from "../Components/ShellPages";
import MyCard from "../Components/MyCard";
import BackPages from "../Components/BackPages";
import MyTitle from "../Components/MyTitle";
import MyField from "../Components/MyField";
import PrimaryButton from "../Components/PrimaryButtons";
import Divider from "../Components/Divider";
import SocialButtons from "../Components/SocialButtons";

function Login() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const API_BASE_URL =
    "https://nextgen-backend-81fc.onrender.com/api";

  const handleLogin = async (e) => {
    e.preventDefault();

    setError("");

    if (!email.trim()) {
      setError("Please enter your email address.");
      return;
    }

    if (!password) {
      setError("Please enter your password.");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch(`${API_BASE_URL}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email.trim(),
          password,
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(
          data.message || "Invalid email or password."
        );
      }

      localStorage.setItem("userToken", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      if (data.user?.role === "admin") {
        navigate("/admin/dashboard");
      } else {
        navigate("/user/dashboard");
      }
    } catch (error) {
      console.error("Login Error:", error);

      setError(
        error.message ||
          "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <ShellPages>
      <MyCard>
        <BackPages to="/login" />

        <MyTitle
          title="Login Account"
          subtitle="Welcome Back!"
        />

        <form onSubmit={handleLogin}>
          <MyField
            label="Email Address"
            placeholder="Enter email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            action={
              <button
                type="button"
                className="text-[9px] font-bold text-[#080B78]"
              >
                Mobile Number?
              </button>
            }
          />

          <MyField
            label="Password"
            placeholder="Enter password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            showPassword={showPassword}
            setShowPassword={setShowPassword}
          />

          <div className="flex items-center justify-between mb-4 text-[8px]">
            <label className="flex items-center gap-1.5">
              <input
                type="checkbox"
                className="accent-[#080B78] w-3 h-3"
              />
              Keep me logged in
            </label>

            <Link
              to="/user/forgot-password"
              className="font-bold text-[#080B78]"
            >
              Forgot Password?
            </Link>
          </div>

          {error && (
            <div className="mb-4 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-[9px] font-medium text-red-600">
              {error}
            </div>
          )}

          <PrimaryButton type="submit" disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </PrimaryButton>
        </form>

        <Divider text="or sign in with" />

        <SocialButtons />

        <p className="text-center text-[9px] mt-4">
          Don't have an account?{" "}
          <Link
            className="font-bold text-[#080B78]"
            to="/signup"
          >
            Sign Up
          </Link>
        </p>
      </MyCard>
    </ShellPages>
  );
}

export default Login;