import { useState } from "react";
import {
  Bell,
  Lock,
  Eye,
  EyeOff,
  Save,
  Loader2,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { Link } from "react-router-dom";

const API_BASE_URL =
  "https://nextgen-backend-81fc.onrender.com/api";

function UserSettings() {
  const [emailNotifications, setEmailNotifications] =
    useState(true);

  const [currentPassword, setCurrentPassword] =
    useState("");

  const [newPassword, setNewPassword] =
    useState("");

  const [confirmPassword, setConfirmPassword] =
    useState("");

  const [showCurrentPassword, setShowCurrentPassword] =
    useState(false);

  const [showNewPassword, setShowNewPassword] =
    useState(false);

  const [showConfirmPassword, setShowConfirmPassword] =
    useState(false);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // ==========================================
  // CHANGE PASSWORD
  // ==========================================

  const handleChangePassword = async (e) => {
    e.preventDefault();

    setError("");
    setSuccess("");

    if (!currentPassword) {
      setError("Please enter your current password.");
      return;
    }

    if (!newPassword) {
      setError("Please enter your new password.");
      return;
    }

    if (newPassword.length < 6) {
      setError(
        "New password must be at least 6 characters."
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
      setError("New passwords do not match.");
      return;
    }

    try {
      setLoading(true);

      const token = localStorage.getItem("userToken");

      if (!token) {
        setError(
          "Your session has expired. Please login again."
        );
        return;
      }

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

      setSuccess(
        "Password changed successfully."
      );

      setCurrentPassword("");
      setNewPassword("");
      setConfirmPassword("");
    } catch (error) {
      console.error(
        "Change Password Error:",
        error
      );

      setError(
        error.message ||
          "Failed to change password."
      );
    } finally {
      setLoading(false);
    }
  };

  // ==========================================
  // PASSWORD INPUT
  // ==========================================

  const PasswordInput = ({
    label,
    value,
    onChange,
    showPassword,
    setShowPassword,
    placeholder,
  }) => {
    return (
      <div>
        <label className="mb-2 block text-sm font-semibold text-[#000080]">
          {label}
        </label>

        <div className="relative">
          <Lock className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#6D8196]" />

          <input
            type={showPassword ? "text" : "password"}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            disabled={loading}
            className="w-full rounded-xl border border-[#6D8196]/20 bg-[#FFFAFA] py-3 pl-12 pr-12 text-sm outline-none transition focus:border-[#000080] disabled:cursor-not-allowed disabled:opacity-60"
          />

          <button
            type="button"
            onClick={() =>
              setShowPassword(!showPassword)
            }
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-lg p-1 text-[#6D8196] hover:bg-[#ADD8E6]/20"
          >
            {showPassword ? (
              <EyeOff className="h-5 w-5" />
            ) : (
              <Eye className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>
    );
  };

  // ==========================================
  // PAGE
  // ==========================================

  return (
    <div className="min-h-screen bg-[#FFFAFA] p-4 sm:p-6 lg:p-8">
      <div className="mx-auto max-w-4xl">

        {/* HEADER */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-[#000080] sm:text-3xl">
            Settings
          </h1>

          <p className="mt-1 text-sm text-[#6D8196]">
            Manage your account preferences and security.
          </p>
        </div>

        {/* EMAIL NOTIFICATIONS */}
        <div className="mb-6 rounded-2xl border border-[#ADD8E6]/50 bg-white p-6 shadow-sm">

          <div className="flex items-start gap-4">

            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#ADD8E6]/30">
              <Bell className="h-5 w-5 text-[#000080]" />
            </div>

            <div className="flex-1">
              <h2 className="font-bold text-[#000080]">
                Email Notifications
              </h2>

              <p className="mt-1 text-sm text-[#6D8196]">
                Receive updates and important account
                notifications by email.
              </p>

              <div className="mt-5 flex items-center justify-between rounded-xl border border-[#ADD8E6]/40 bg-[#FFFAFA] p-4">

                <div>
                  <p className="text-sm font-semibold text-gray-800">
                    Email notifications
                  </p>

                  <p className="mt-1 text-xs text-[#6D8196]">
                    {emailNotifications
                      ? "Notifications are enabled."
                      : "Notifications are disabled."}
                  </p>
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
                  aria-label="Toggle email notifications"
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

          </div>
        </div>

        {/* CHANGE PASSWORD */}
        <div className="rounded-2xl border border-[#ADD8E6]/50 bg-white p-6 shadow-sm">

          <div className="flex items-start gap-4">

            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#ADD8E6]/30">
              <Lock className="h-5 w-5 text-[#000080]" />
            </div>

            <div className="flex-1">

              <h2 className="font-bold text-[#000080]">
                Change Password
              </h2>

              <p className="mt-1 text-sm text-[#6D8196]">
                Keep your account secure by using a
                strong password.
              </p>

            </div>

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

          <form
            onSubmit={handleChangePassword}
            className="mt-6 space-y-5"
          >

            <PasswordInput
              label="Current Password"
              value={currentPassword}
              onChange={(e) =>
                setCurrentPassword(e.target.value)
              }
              showPassword={
                showCurrentPassword
              }
              setShowPassword={
                setShowCurrentPassword
              }
              placeholder="Enter current password"
            />

            <PasswordInput
              label="New Password"
              value={newPassword}
              onChange={(e) =>
                setNewPassword(e.target.value)
              }
              showPassword={showNewPassword}
              setShowPassword={
                setShowNewPassword
              }
              placeholder="Enter new password"
            />

            <PasswordInput
              label="Confirm New Password"
              value={confirmPassword}
              onChange={(e) =>
                setConfirmPassword(
                  e.target.value
                )
              }
              showPassword={
                showConfirmPassword
              }
              setShowPassword={
                setShowConfirmPassword
              }
              placeholder="Confirm new password"
            />

            <div className="flex flex-col gap-3 border-t border-[#ADD8E6]/30 pt-5 sm:flex-row sm:items-center sm:justify-between">

              <Link
                to="/forgot"
                className="text-sm font-semibold text-[#000080] hover:underline"
              >
                Forgot Password?
              </Link>

              <button
                type="submit"
                disabled={loading}
                className="flex items-center justify-center gap-2 rounded-xl bg-[#000080] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#000060] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Updating...
                  </>
                ) : (
                  <>
                    <Save className="h-4 w-4" />
                    Change Password
                  </>
                )}
              </button>

            </div>

          </form>
        </div>

      </div>
    </div>
  );
}

export default UserSettings;