import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const API_BASE_URL =
  "https://nextgen-backend-81fc.onrender.com/api";

const ForgotPassword = () => {
  const navigate = useNavigate();

  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // STEP 1 - Send reset request
  const handleEmailSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setSuccess("");

    if (!email.trim()) {
      setError("Please enter your email.");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch(
        `${API_BASE_URL}/auth/forgot-password`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email.trim(),
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || "Something went wrong.");
        return;
      }

      setSuccess(data.message || "OTP request successful.");
      setStep(2);
    } catch (err) {
      setError("Unable to connect to server.");
    } finally {
      setLoading(false);
    }
  };

  // STEP 2 - Verify fixed OTP
  const handleOtpSubmit = (e) => {
    e.preventDefault();

    setError("");
    setSuccess("");

    if (!otp.trim()) {
      setError("Please enter OTP.");
      return;
    }

    if (otp.trim() !== "123456") {
      setError("Invalid OTP.");
      return;
    }

    setSuccess("OTP verified successfully.");
    setStep(3);
  };

  // STEP 3 - Reset password
  const handlePasswordSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setSuccess("");

    if (!newPassword || !confirmPassword) {
      setError("Please fill both password fields.");
      return;
    }

    if (newPassword.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    if (newPassword !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch(
        `${API_BASE_URL}/auth/reset-password`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email.trim(),
            otp: otp.trim(),
            newPassword,
            confirmPassword,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || "Unable to reset password.");
        return;
      }

      setSuccess(
        data.message || "Password reset successfully."
      );

      setTimeout(() => {
        navigate("/login");
      }, 1500);
    } catch (err) {
      setError("Unable to connect to server.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#FFFAFA",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "30px 20px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "480px",
          background: "#FFFFFF",
          borderRadius: "16px",
          padding: "35px",
          boxShadow: "0 8px 30px rgba(0,0,0,0.08)",
        }}
      >
        <h2
          style={{
            color: "#000080",
            textAlign: "center",
            marginBottom: "10px",
          }}
        >
          Forgot Password
        </h2>

        <p
          style={{
            textAlign: "center",
            color: "#6D8196",
            marginBottom: "30px",
          }}
        >
          Reset your account password
        </p>

        {/* STEP INDICATOR */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "30px",
            color: "#6D8196",
            fontSize: "14px",
          }}
        >
          <span
            style={{
              fontWeight: step === 1 ? "700" : "400",
              color: step === 1 ? "#000080" : "#6D8196",
            }}
          >
            1. Email
          </span>

          <span
            style={{
              fontWeight: step === 2 ? "700" : "400",
              color: step === 2 ? "#000080" : "#6D8196",
            }}
          >
            2. OTP
          </span>

          <span
            style={{
              fontWeight: step === 3 ? "700" : "400",
              color: step === 3 ? "#000080" : "#6D8196",
            }}
          >
            3. Password
          </span>
        </div>

        {/* ERROR */}
        {error && (
          <div
            style={{
              background: "#ffeaea",
              color: "#c62828",
              padding: "12px",
              borderRadius: "8px",
              marginBottom: "20px",
              fontSize: "14px",
            }}
          >
            {error}
          </div>
        )}

        {/* SUCCESS */}
        {success && (
          <div
            style={{
              background: "#eaf8ee",
              color: "#218838",
              padding: "12px",
              borderRadius: "8px",
              marginBottom: "20px",
              fontSize: "14px",
            }}
          >
            {success}
          </div>
        )}

        {/* STEP 1 */}
        {step === 1 && (
          <form onSubmit={handleEmailSubmit}>
            <label
              style={{
                display: "block",
                marginBottom: "8px",
                color: "#000080",
                fontWeight: "600",
              }}
            >
              Email Address
            </label>

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your registered email"
              style={{
                width: "100%",
                padding: "13px",
                border: "1px solid #ADD8E6",
                borderRadius: "8px",
                outline: "none",
                marginBottom: "20px",
                boxSizing: "border-box",
              }}
            />

            <button
              type="submit"
              disabled={loading}
              style={{
                width: "100%",
                padding: "13px",
                border: "none",
                borderRadius: "8px",
                background: "#000080",
                color: "#fff",
                fontWeight: "600",
                cursor: "pointer",
              }}
            >
              {loading ? "Please wait..." : "Continue"}
            </button>
          </form>
        )}

        {/* STEP 2 */}
        {step === 2 && (
          <form onSubmit={handleOtpSubmit}>
            <label
              style={{
                display: "block",
                marginBottom: "8px",
                color: "#000080",
                fontWeight: "600",
              }}
            >
              Enter OTP
            </label>

            <input
              type="text"
              value={otp}
              onChange={(e) =>
                setOtp(e.target.value.replace(/\D/g, "").slice(0, 6))
              }
              placeholder="Enter 6-digit OTP"
              maxLength={6}
              style={{
                width: "100%",
                padding: "13px",
                border: "1px solid #ADD8E6",
                borderRadius: "8px",
                outline: "none",
                marginBottom: "20px",
                boxSizing: "border-box",
                letterSpacing: "4px",
                textAlign: "center",
                fontSize: "18px",
              }}
            />

            <button
              type="submit"
              style={{
                width: "100%",
                padding: "13px",
                border: "none",
                borderRadius: "8px",
                background: "#000080",
                color: "#fff",
                fontWeight: "600",
                cursor: "pointer",
              }}
            >
              Verify OTP
            </button>

            <button
              type="button"
              onClick={() => {
                setStep(1);
                setError("");
                setSuccess("");
              }}
              style={{
                width: "100%",
                marginTop: "10px",
                padding: "12px",
                border: "1px solid #ADD8E6",
                borderRadius: "8px",
                background: "#fff",
                color: "#000080",
                cursor: "pointer",
              }}
            >
              Change Email
            </button>
          </form>
        )}

        {/* STEP 3 */}
        {step === 3 && (
          <form onSubmit={handlePasswordSubmit}>
            <label
              style={{
                display: "block",
                marginBottom: "8px",
                color: "#000080",
                fontWeight: "600",
              }}
            >
              New Password
            </label>

            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder="Enter new password"
              style={{
                width: "100%",
                padding: "13px",
                border: "1px solid #ADD8E6",
                borderRadius: "8px",
                outline: "none",
                marginBottom: "18px",
                boxSizing: "border-box",
              }}
            />

            <label
              style={{
                display: "block",
                marginBottom: "8px",
                color: "#000080",
                fontWeight: "600",
              }}
            >
              Confirm Password
            </label>

            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm new password"
              style={{
                width: "100%",
                padding: "13px",
                border: "1px solid #ADD8E6",
                borderRadius: "8px",
                outline: "none",
                marginBottom: "20px",
                boxSizing: "border-box",
              }}
            />

            <button
              type="submit"
              disabled={loading}
              style={{
                width: "100%",
                padding: "13px",
                border: "none",
                borderRadius: "8px",
                background: "#000080",
                color: "#fff",
                fontWeight: "600",
                cursor: "pointer",
              }}
            >
              {loading ? "Resetting..." : "Reset Password"}
            </button>
          </form>
        )}

        <div
          style={{
            textAlign: "center",
            marginTop: "25px",
          }}
        >
          <button
            type="button"
            onClick={() => navigate("/login")}
            style={{
              border: "none",
              background: "transparent",
              color: "#000080",
              cursor: "pointer",
              fontWeight: "600",
            }}
          >
            Back to Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
