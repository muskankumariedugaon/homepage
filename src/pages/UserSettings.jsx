import { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff, Lock, Mail, ShieldCheck } from "lucide-react";

function UserSettings() {
  const [emailNotifications, setEmailNotifications] = useState(true);

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [otp, setOtp] = useState("");

  const [showCurrentPassword, setShowCurrentPassword] =
    useState(false);

  const [showNewPassword, setShowNewPassword] =
    useState(false);

  const [showConfirmPassword, setShowConfirmPassword] =
    useState(false);

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const API_BASE_URL =
    "https://nextgen-backend-81fc.onrender.com/api";

  const handleChangePassword = async (e) => {
    e.preventDefault();

    setMessage("");
    setError("");

    if (
      !currentPassword ||
      !newPassword ||
      !confirmPassword ||
      !otp
    ) {
      setError("Please fill all fields.");
      return;
    }

    if (otp !== "123456") {
      setError("Invalid OTP.");
      return;
    }

    if (newPassword.length < 6) {
      setError(
        "New password must be at least 6 characters."
      );
      return;
    }

    if (newPassword !== confirmPassword) {
      setError(
        "New password and confirm password do not match."
      );
      return;
    }

    const token = localStorage.getItem("userToken");

    if (!token) {
      setError(
        "Your session has expired. Please login again."
      );
      return;
    }

    try {
      setLoading(true);

      const response = await fetch(
        `${API_BASE_URL}/auth/change-password`,
        {
          method: "PUT",

          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },

          body: JSON.stringify({
            currentPassword,
            newPassword,
            confirmPassword,
            otp,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(
          data.message ||
            "Failed to change password."
        );
      }

      setMessage(
        "Password changed successfully. A confirmation email has been sent."
      );

      setCurrentPassword("");
      setNewPassword("");
      setConfirmPassword("");
      setOtp("");
    } catch (error) {
      console.error(
        "Change Password Error:",
        error
      );

      setError(
        error.message ||
          "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const PasswordField = ({
    label,
    value,
    onChange,
    show,
    setShow,
    placeholder,
  }) => {
    return (
      <div>
        <label className="mb-1.5 block text-xs font-semibold text-[#000080]">
          {label}
        </label>

        <div className="relative">
          <input
            type={show ? "text" : "password"}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className="w-full rounded-xl border border-[#ADD8E6] bg-white px-4 py-3 pr-11 text-sm outline-none transition focus:border-[#000080]"
          />

          <button
            type="button"
            onClick={() => setShow(!show)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-[#6D8196]"
          >
            {show ? (
              <EyeOff size={18} />
            ) : (
              <Eye size={18} />
            )}
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#FFFAFA] px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">

        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-[#000080]">
            Settings
          </h1>

          <p className="mt-1 text-sm text-[#6D8196]">
            Manage your account settings and security.
          </p>
        </div>

        {/* Email Notifications */}
        <div className="mb-6 rounded-2xl border border-[#ADD8E6] bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between gap-4">

            <div className="flex items-center gap-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#ADD8E6]/30 text-[#000080]">
                <Mail size={20} />
              </div>

              <div>
                <h2 className="font-semibold text-gray-800">
                  Email Notifications
                </h2>

                <p className="mt-1 text-xs text-[#6D8196]">
                  Receive important account notifications
                  by email.
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() =>
                setEmailNotifications(
                  !emailNotifications
                )
              }
              className={`relative h-6 w-11 rounded-full transition ${
                emailNotifications
                  ? "bg-[#000080]"
                  : "bg-gray-300"
              }`}
            >
              <span
                className={`absolute top-1 h-4 w-4 rounded-full bg-white transition ${
                  emailNotifications
                    ? "left-6"
                    : "left-1"
                }`}
              />
            </button>
          </div>
        </div>

        {/* Security */}
        <div className="rounded-2xl border border-[#ADD8E6] bg-white p-5 shadow-sm sm:p-6">

          <div className="mb-6 flex items-center gap-4">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#ADD8E6]/30 text-[#000080]">
              <ShieldCheck size={20} />
            </div>

            <div>
              <h2 className="font-semibold text-gray-800">
                Change Password
              </h2>

              <p className="mt-1 text-xs text-[#6D8196]">
                Update your password to keep your account
                secure.
              </p>
            </div>
          </div>

          <form
            onSubmit={handleChangePassword}
            className="space-y-5"
          >
            <PasswordField
              label="Current Password"
              value={currentPassword}
              onChange={(e) =>
                setCurrentPassword(e.target.value)
              }
              show={showCurrentPassword}
              setShow={setShowCurrentPassword}
              placeholder="Enter current password"
            />

            <PasswordField
              label="New Password"
              value={newPassword}
              onChange={(e) =>
                setNewPassword(e.target.value)
              }
              show={showNewPassword}
              setShow={setShowNewPassword}
              placeholder="Enter new password"
            />

            <PasswordField
              label="Confirm New Password"
              value={confirmPassword}
              onChange={(e) =>
                setConfirmPassword(e.target.value)
              }
              show={showConfirmPassword}
              setShow={setShowConfirmPassword}
              placeholder="Confirm new password"
            />

            {/* Fixed OTP */}
            <div>
              <label className="mb-1.5 block text-xs font-semibold text-[#000080]">
                Verification OTP
              </label>

              <input
                type="text"
                inputMode="numeric"
                maxLength={6}
                value={otp}
                onChange={(e) =>
                  setOtp(
                    e.target.value
                      .replace(/\D/g, "")
                      .slice(0, 6)
                  )
                }
                placeholder="Enter 6-digit OTP"
                className="w-full rounded-xl border border-[#ADD8E6] bg-white px-4 py-3 text-sm outline-none transition focus:border-[#000080]"
              />

              <p className="mt-2 text-xs text-[#6D8196]">
                Enter the verification OTP to confirm
                the password change.
              </p>
            </div>

            {error && (
              <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
                {error}
              </div>
            )}

            {message && (
              <div className="rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-600">
                {message}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#000080] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#080B78] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
            >
              <Lock size={17} />

              {loading
                ? "Updating..."
                : "Change Password"}
            </button>
          </form>

          {/* Forgot Password */}
          <div className="mt-6 border-t border-[#ADD8E6]/50 pt-5">
            <p className="text-sm text-[#6D8196]">
              Forgot your password?
            </p>

            <Link
              to="/user/forgot-password"
              className="mt-1 inline-block text-sm font-semibold text-[#000080] hover:underline"
            >
              Reset Password
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}

export default UserSettings;
