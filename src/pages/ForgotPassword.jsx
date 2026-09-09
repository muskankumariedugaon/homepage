import { useState } from "react";
import {
  Mail,
  KeyRound,
  Lock,
  Eye,
  EyeOff,
  CheckCircle,
  AlertCircle,
  Loader2,
} from "lucide-react";

const API_BASE_URL =
  "https://nextgen-backend-81fc.onrender.com/api";

function ForgotPassword() {
  const [step, setStep] = useState(1);

  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");

  const [newPassword, setNewPassword] =
    useState("");

  const [confirmPassword, setConfirmPassword] =
    useState("");

  const [showPassword, setShowPassword] =
    useState(false);

  const [showConfirmPassword, setShowConfirmPassword] =
    useState(false);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // ==========================================
  // SEND OTP
  // ==========================================

  const handleSendOtp = async (e) => {
    e.preventDefault();

    setError("");
    setSuccess("");

    if (!email.trim()) {
      setError("Please enter your email address.");
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

      if (!response.ok || !data.success) {
        throw new Error(
          data.message ||
            "Failed to send OTP."
        );
      }

      setSuccess(
        "OTP has been sent to your email."
      );

      setStep(2);
    } catch (error) {
      console.error(
        "Forgot Password Error:",
        error
      );

      setError(
        error.message ||
          "Unable to send OTP."
      );
    } finally {
      setLoading(false);
    }
  };

  // ==========================================
  // VERIFY OTP
  // ==========================================

  const handleVerifyOtp = async (e) => {
    e.preventDefault();

    setError("");
    setSuccess("");

    if (!otp.trim()) {
      setError("Please enter the OTP.");
      return;
    }

    if (!/^[0-9]{6}$/.test(otp)) {
      setError("Please enter a valid 6-digit OTP.");
      return;
    }

    /*
      Backend reset-password endpoint verifies
      the OTP while resetting the password.
      So OTP ko temporarily next step ke liye
      store kar rahe hain.
    */

    setStep(3);
  };

  // ==========================================
  // RESET PASSWORD
  // ==========================================

  const handleResetPassword = async (e) => {
    e.preventDefault();

    setError("");
    setSuccess("");

    if (!newPassword) {
      setError("Please enter a new password.");
      return;
    }

    if (newPassword.length < 6) {
      setError(
        "Password must be at least 6 characters."
      );
      return;
    }

    if (!confirmPassword) {
      setError(
        "Please confirm your new password."
      );
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

      if (!response.ok || !data.success) {
        throw new Error(
          data.message ||
            "Failed to reset password."
        );
      }

      setSuccess(
        "Password reset successfully."
      );

      setStep(4);
    } catch (error) {
      console.error(
        "Reset Password Error:",
        error
      );

      setError(
        error.message ||
          "Unable to reset password."
      );
    } finally {
      setLoading(false);
    }
  };

  // ==========================================
  // PAGE
  // ==========================================

  return (
    <div className="min-h-screen bg-[#FFFAFA] p-4 sm:p-6 lg:p-8">
      <div className="mx-auto flex min-h-[calc(100vh-64px)] max-w-xl items-center justify-center">

        <div className="w-full rounded-2xl border border-[#ADD8E6]/50 bg-white p-6 shadow-sm sm:p-8">

          {/* ICON */}
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#ADD8E6]/30">
            {step === 1 && (
              <Mail className="h-7 w-7 text-[#000080]" />
            )}

            {step === 2 && (
              <KeyRound className="h-7 w-7 text-[#000080]" />
            )}

            {step === 3 && (
              <Lock className="h-7 w-7 text-[#000080]" />
            )}

            {step === 4 && (
              <CheckCircle className="h-7 w-7 text-green-600" />
            )}
          </div>

          {/* TITLE */}
          <div className="mt-5 text-center">

            <h1 className="text-2xl font-bold text-[#000080]">
              {step === 1 &&
                "Forgot Password"}

              {step === 2 &&
                "Verify OTP"}

              {step === 3 &&
                "Create New Password"}

              {step === 4 &&
                "Password Changed"}
            </h1>

            <p className="mt-2 text-sm text-[#6D8196]">
              {step === 1 &&
                "Enter your registered email address."}

              {step === 2 &&
                "Enter the 6-digit OTP sent to your email."}

              {step === 3 &&
                "Create a new password for your account."}

              {step === 4 &&
                "Your password has been changed successfully."}
            </p>

          </div>

          {/* ERROR */}
          {error && (
            <div className="mt-5 flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-600">
              <AlertCircle className="mt-0.5 h-5 w-5 shrink-0" />
              <span>{error}</span>
            </div>
          )}

          {/* SUCCESS */}
          {success && (
            <div className="mt-5 flex items-start gap-3 rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm font-medium text-green-600">
              <CheckCircle className="mt-0.5 h-5 w-5 shrink-0" />
              <span>{success}</span>
            </div>
          )}

          {/* ================= STEP 1 ================= */}

          {step === 1 && (
            <form
              onSubmit={handleSendOtp}
              className="mt-6 space-y-5"
            >

              <div>
                <label className="mb-2 block text-sm font-semibold text-[#000080]">
                  Email Address
                </label>

                <div className="relative">

                  <Mail className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#6D8196]" />

                  <input
                    type="email"
                    value={email}
                    onChange={(e) =>
                      setEmail(e.target.value)
                    }
                    placeholder="Enter your email"
                    disabled={loading}
                    className="w-full rounded-xl border border-[#6D8196]/20 bg-[#FFFAFA] py-3 pl-12 pr-4 text-sm outline-none transition focus:border-[#000080] disabled:opacity-60"
                  />

                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#000080] py-3 text-sm font-semibold text-white transition hover:bg-[#000060] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Sending OTP...
                  </>
                ) : (
                  "Send OTP"
                )}
              </button>

            </form>
          )}

          {/* ================= STEP 2 ================= */}

          {step === 2 && (
            <form
              onSubmit={handleVerifyOtp}
              className="mt-6 space-y-5"
            >

              <div>
                <label className="mb-2 block text-sm font-semibold text-[#000080]">
                  Verification OTP
                </label>

                <div className="relative">

                  <KeyRound className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#6D8196]" />

                  <input
                    type="text"
                    value={otp}
                    onChange={(e) =>
                      setOtp(
                        e.target.value
                          .replace(/\D/g, "")
                          .slice(0, 6)
                      )
                    }
                    placeholder="Enter 6-digit OTP"
                    inputMode="numeric"
                    maxLength={6}
                    disabled={loading}
                    className="w-full rounded-xl border border-[#6D8196]/20 bg-[#FFFAFA] py-3 pl-12 pr-4 text-sm tracking-[0.35em] outline-none transition focus:border-[#000080] disabled:opacity-60"
                  />

                </div>

                <p className="mt-2 text-xs text-[#6D8196]">
                  OTP sent to {email}
                </p>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#000080] py-3 text-sm font-semibold text-white transition hover:bg-[#000060] disabled:opacity-60"
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
                className="w-full text-sm font-semibold text-[#000080] hover:underline"
              >
                Change Email
              </button>

            </form>
          )}

          {/* ================= STEP 3 ================= */}

          {step === 3 && (
            <form
              onSubmit={handleResetPassword}
              className="mt-6 space-y-5"
            >

              {/* New Password */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-[#000080]">
                  New Password
                </label>

                <div className="relative">

                  <Lock className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#6D8196]" />

                  <input
                    type={
                      showPassword
                        ? "text"
                        : "password"
                    }
                    value={newPassword}
                    onChange={(e) =>
                      setNewPassword(
                        e.target.value
                      )
                    }
                    placeholder="Enter new password"
                    disabled={loading}
                    className="w-full rounded-xl border border-[#6D8196]/20 bg-[#FFFAFA] py-3 pl-12 pr-12 text-sm outline-none transition focus:border-[#000080] disabled:opacity-60"
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowPassword(
                        !showPassword
                      )
                    }
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-[#6D8196]"
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5" />
                    ) : (
                      <Eye className="h-5 w-5" />
                    )}
                  </button>

                </div>
              </div>

              {/* Confirm Password */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-[#000080]">
                  Confirm Password
                </label>

                <div className="relative">

                  <Lock className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#6D8196]" />

                  <input
                    type={
                      showConfirmPassword
                        ? "text"
                        : "password"
                    }
                    value={confirmPassword}
                    onChange={(e) =>
                      setConfirmPassword(
                        e.target.value
                      )
                    }
                    placeholder="Confirm new password"
                    disabled={loading}
                    className="w-full rounded-xl border border-[#6D8196]/20 bg-[#FFFAFA] py-3 pl-12 pr-12 text-sm outline-none transition focus:border-[#000080] disabled:opacity-60"
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowConfirmPassword(
                        !showConfirmPassword
                      )
                    }
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-[#6D8196]"
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="h-5 w-5" />
                    ) : (
                      <Eye className="h-5 w-5" />
                    )}
                  </button>

                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#000080] py-3 text-sm font-semibold text-white transition hover:bg-[#000060] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Updating...
                  </>
                ) : (
                  "Reset Password"
                )}
              </button>

            </form>
          )}

          {/* ================= STEP 4 ================= */}

          {step === 4 && (
            <div className="mt-6 text-center">

              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-50">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>

              <p className="mt-4 text-sm text-[#6D8196]">
                You can now login with your new password.
              </p>

              <button
                type="button"
                onClick={() => {
                  window.location.href =
                    "/login";
                }}
                className="mt-6 w-full rounded-xl bg-[#000080] py-3 text-sm font-semibold text-white transition hover:bg-[#000060]"
              >
                Go to Login
              </button>

            </div>
          )}

        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;