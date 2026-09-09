import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import ShellPages from "../Components/ShellPages";
import MyCard from "../Components/MyCard";
import BackPages from "../Components/BackPages";
import MyTitle from "../Components/MyTitle";
import PrimaryButtons from "../Components/PrimaryButtons";

import verificationImg from "../assets/verification.png";

const API_BASE_URL =
  "https://nextgen-backend-81fc.onrender.com/api";
function Verification() {
  const navigate = useNavigate();

  const [code, setCode] = useState([
    "",
    "",
    "",
    "",
    "",
    "",
  ]);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const refs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];

  // ==========================================
  // OTP INPUT
  // ==========================================
  const updateCode = (index, value) => {
    const digit = value.replace(/\D/g, "").slice(-1);

    const next = [...code];
    next[index] = digit;

    setCode(next);
    setError("");

    if (digit && index < 5) {
      refs[index + 1].current?.focus();
    }
  };

  // ==========================================
  // HANDLE BACKSPACE
  // ==========================================
  const handleKeyDown = (index, e) => {
    if (
      e.key === "Backspace" &&
      !code[index] &&
      index > 0
    ) {
      refs[index - 1].current?.focus();
    }
  };

  // ==========================================
  // VERIFY OTP
  // ==========================================
  const handleVerify = async () => {
    setError("");

    const otp = code.join("");

    // Get signup email
    const email = localStorage.getItem("signupEmail");

    // Check email
    if (!email) {
      setError(
        "Signup email not found. Please signup again."
      );
      return;
    }

    // Check OTP
    if (otp.length !== 6) {
      setError("Please enter the complete 6-digit OTP.");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch(
        `${API_BASE_URL}/auth/verify-otp`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            otp,
          }),
        }
      );

      const data = await response.json();

      // Backend error
      if (!response.ok) {
        setError(
          data.message || "OTP verification failed."
        );
        return;
      }

      // ==========================================
      // SAVE LOGIN INFORMATION
      // ==========================================
      if (data.token) {
        localStorage.setItem(
          "userToken",
          data.token
        );
      }

      if (data.user) {
        localStorage.setItem(
          "user",
          JSON.stringify(data.user)
        );
      }

      // Signup email no longer required
      localStorage.removeItem("signupEmail");

      // ==========================================
      // DIRECT USER DASHBOARD
      // ==========================================
      navigate("/user/dashboard");

    } catch (error) {
      console.error(
        "OTP Verification Error:",
        error
      );

      setError(
        "Unable to connect to server. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  // ==========================================
  // SEND AGAIN
  // ==========================================
  const handleSendAgain = () => {
    setError(
      "Resend OTP will be added next."
    );
  };

  return (
    <ShellPages>
      <MyCard>

        <BackPages to="/signup" />

        <MyTitle
          title="Verification"
          subtitle="Enter the code to continue."
        />

        {/* Verification Image */}
        <div className="flex justify-center">
          <img
            src={verificationImg}
            className="w-full h-[178px] object-contain"
            alt="Verification"
          />
        </div>

        {/* OTP Boxes */}
        <div className="grid grid-cols-6 gap-1.5 mb-3">
          {code.map((value, index) => (
            <input
              key={index}
              ref={refs[index]}
              value={value}
              onChange={(e) =>
                updateCode(
                  index,
                  e.target.value
                )
              }
              onKeyDown={(e) =>
                handleKeyDown(index, e)
              }
              className="h-[39px] rounded-[5px] border border-[#bbb] text-center text-lg outline-none focus:border-[#080B78]"
              maxLength={1}
              inputMode="numeric"
              autoComplete="one-time-code"
            />
          ))}
        </div>

        {/* Error */}
        {error && (
          <p className="text-red-500 text-[9px] mb-3">
            {error}
          </p>
        )}

        {/* Verify Button */}
        <PrimaryButtons
          onClick={handleVerify}
          disabled={loading}
        >
          {loading
            ? "Verifying..."
            : "Verify Code"}
        </PrimaryButtons>

        {/* Resend */}
        <p className="text-[8px] mt-3">
          Don't receive the code?{" "}
          <button
            type="button"
            onClick={handleSendAgain}
            className="font-bold text-[#080B78]"
          >
            Send Again
          </button>
        </p>

      </MyCard>
    </ShellPages>
  );
}

export default Verification;