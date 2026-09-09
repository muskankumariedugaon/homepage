import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaFacebookF, FaGithub } from "react-icons/fa";

import ShellPages from "../Components/ShellPages";
import MyCard from "../Components/MyCard";
import BackPages from "../Components/BackPages";
import MyTitle from "../Components/MyTitle";
import MyField from "../Components/MyField";
import PrimaryButtons from "../Components/PrimaryButtons";
import Divider from "../Components/Divider";
import SocialIcon from "../Components/SocialIcon";

const API_BASE_URL =
  "https://nextgen-backend-81fc.onrender.com/api";

function Signup() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const [agreed, setAgreed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSignup = async () => {
    setError("");

    if (!name.trim() || !email.trim() || !mobile.trim() || !password || !confirm) {
      setError("All required fields are required.");
      return;
    }

    if (!agreed) {
      setError("Please agree with the privacy policy.");
      return;
    }

    if (password !== confirm) {
      setError("Passwords do not match.");
      return;
    }

    if (mobile.length !== 10) {
      setError("Please enter a valid 10-digit mobile number.");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch(`${API_BASE_URL}/auth/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          mobile: mobile.trim(),
          password,
          confirmPassword: confirm,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || "Signup failed.");
        return;
      }

      // OTP verification ke liye email save
      localStorage.setItem("signupEmail", email.trim());

      // Verification page
      navigate("/verification");
    } catch (error) {
      console.error("Signup Error:", error);
      setError("Unable to connect to server. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <ShellPages>
      <MyCard>
        <BackPages />

        <MyTitle
          title="Create Account"
          subtitle="Sign up to continue"
        />

        {/* Full Name */}
        <MyField
          label="Full Name"
          placeholder="Enter full name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        {/* Email */}
        <MyField
          label="Email Address"
          placeholder="Enter email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* Mobile */}
        <MyField
          label="Mobile Number"
          placeholder="Enter mobile number"
          value={mobile}
          onChange={(e) =>
            setMobile(e.target.value.replace(/\D/g, "").slice(0, 10))
          }
        />

        {/* Password */}
        <MyField
          label="Password"
          placeholder="Create password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          showPassword={showPassword}
          setShowPassword={setShowPassword}
        />

        {/* Confirm Password */}
        <MyField
          label="Confirm Password"
          placeholder="Re-enter password"
          type="password"
          value={confirm}
          onChange={(e) => setConfirm(e.target.value)}
          showPassword={showConfirm}
          setShowPassword={setShowConfirm}
        />

        {/* Privacy Policy */}
        <label className="flex items-center gap-1.5 text-[8px] mb-2">
          <input
            type="checkbox"
            checked={agreed}
            onChange={(e) => setAgreed(e.target.checked)}
            className="accent-[#080B78] w-3 h-3"
          />

          I agree with privacy policy
        </label>

        {/* Error */}
        {error && (
          <p className="text-red-500 text-[9px] mb-3">
            {error}
          </p>
        )}

        {/* Signup */}
        <PrimaryButtons
          onClick={handleSignup}
          disabled={loading}
        >
          {loading ? "Creating account..." : "Sign up"}
        </PrimaryButtons>

        <Divider text="or sign up with" />

        <div className="grid grid-cols-3 gap-5">
          <SocialIcon>G</SocialIcon>

          <SocialIcon>
            <FaGithub size={17} />
          </SocialIcon>

          <SocialIcon>
            <FaFacebookF
              size={17}
              className="text-[#1877F2]"
            />
          </SocialIcon>
        </div>

        <p className="text-center text-[9px] mt-5">
          Already have a account?{" "}
          <Link
            className="font-bold text-[#080B78]"
            to="/login"
          >
            Login
          </Link>
        </p>
      </MyCard>
    </ShellPages>
  );
}

export default Signup;