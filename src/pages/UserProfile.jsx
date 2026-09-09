import { useEffect, useState } from "react";
import {
  User,
  Mail,
  Phone,
  ShieldCheck,
  CalendarDays,
  Pencil,
  Loader2,
  X,
  Save,
} from "lucide-react";

const API_BASE_URL =
  "https://nextgen-backend-81fc.onrender.com/api";

function UserProfile() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const [editOpen, setEditOpen] = useState(false);

  const [editForm, setEditForm] = useState({
    name: "",
    mobile: "",
  });

  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // ==========================================
  // FETCH CURRENT USER
  // ==========================================
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem("userToken");

        if (!token) {
          setLoading(false);
          return;
        }

        const response = await fetch(
          `${API_BASE_URL}/auth/me`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const data = await response.json();

        if (response.ok && data.success) {
          setUser(data.user);

          localStorage.setItem(
            "user",
            JSON.stringify(data.user)
          );
        } else {
          const savedUser = localStorage.getItem("user");

          if (savedUser) {
            setUser(JSON.parse(savedUser));
          }
        }
      } catch (error) {
        console.error("Fetch Profile Error:", error);

        const savedUser = localStorage.getItem("user");

        if (savedUser) {
          try {
            setUser(JSON.parse(savedUser));
          } catch (parseError) {
            console.error(
              "User Parse Error:",
              parseError
            );
          }
        }
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  // ==========================================
  // MEMBER SINCE
  // ==========================================
  const getMemberSince = () => {
    if (!user?.created_at) {
      return "—";
    }

    const date = new Date(user.created_at);

    if (Number.isNaN(date.getTime())) {
      return "—";
    }

    return date.toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  // ==========================================
  // OPEN EDIT MODAL
  // ==========================================
  const handleEditOpen = () => {
    setEditForm({
      name: user?.name || "",
      mobile: user?.mobile || "",
    });

    setError("");
    setSuccess("");
    setEditOpen(true);
  };

  // ==========================================
  // CLOSE EDIT MODAL
  // ==========================================
  const handleEditClose = () => {
    if (saving) return;

    setEditOpen(false);
    setError("");
    setSuccess("");
  };

  // ==========================================
  // INPUT CHANGE
  // ==========================================
  const handleEditChange = (e) => {
    const { name, value } = e.target;

    setEditForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // ==========================================
  // UPDATE PROFILE
  // ==========================================
  const handleProfileUpdate = async (e) => {
    e.preventDefault();

    setError("");
    setSuccess("");

    const name = editForm.name.trim();
    const mobile = editForm.mobile.trim();

    if (!name) {
      setError("Please enter your name.");
      return;
    }

    if (name.length < 2) {
      setError(
        "Name must be at least 2 characters."
      );
      return;
    }

    if (!mobile) {
      setError(
        "Please enter your mobile number."
      );
      return;
    }

    if (!/^[0-9]{10}$/.test(mobile)) {
      setError(
        "Please enter a valid 10-digit mobile number."
      );
      return;
    }

    try {
      setSaving(true);

      const token = localStorage.getItem("userToken");

      if (!token) {
        setError(
          "Your session has expired. Please login again."
        );
        return;
      }

      const response = await fetch(
        `${API_BASE_URL}/auth/profile`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            name,
            mobile,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(
          data.message ||
            "Failed to update profile."
        );
      }

      setUser(data.user);

      localStorage.setItem(
        "user",
        JSON.stringify(data.user)
      );

      setSuccess(
        "Profile updated successfully."
      );

      setTimeout(() => {
        setEditOpen(false);
        setSuccess("");
      }, 1000);
    } catch (error) {
      console.error(
        "Update Profile Error:",
        error
      );

      setError(
        error.message ||
          "Failed to update profile."
      );
    } finally {
      setSaving(false);
    }
  };

  // ==========================================
  // LOADING
  // ==========================================
  if (loading) {
    return (
      <div className="flex min-h-[calc(100vh-64px)] items-center justify-center bg-[#FFFAFA]">
        <div className="flex items-center gap-2 text-[#000080]">
          <Loader2 className="h-5 w-5 animate-spin" />

          <span className="font-medium">
            Loading profile...
          </span>
        </div>
      </div>
    );
  }

  // ==========================================
  // PAGE
  // ==========================================
  return (
    <div className="min-h-screen bg-[#FFFAFA] p-4 sm:p-6 lg:p-8">
      <div className="mx-auto max-w-5xl">

        {/* PAGE HEADER */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-[#000080] sm:text-3xl">
            My Profile
          </h1>

          <p className="mt-1 text-sm text-[#6D8196]">
            View and manage your account information.
          </p>
        </div>

        {/* PROFILE CARD */}
        <div className="overflow-hidden rounded-2xl border border-[#ADD8E6]/50 bg-white shadow-sm">

          {/* Profile Banner */}
          <div className="h-28 bg-[#000080] sm:h-36" />

          {/* Profile Content */}
          <div className="px-5 pb-6 sm:px-8">

            {/* Profile Header */}
            <div className="-mt-12 flex flex-col gap-4 sm:-mt-14 sm:flex-row sm:items-end sm:justify-between">

              {/* Avatar + Name */}
              <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-end">

                {/* Avatar */}
                <div className="flex h-24 w-24 items-center justify-center rounded-full border-4 border-white bg-[#ADD8E6] shadow-md sm:h-28 sm:w-28">
                  <User className="h-12 w-12 text-[#000080] sm:h-14 sm:w-14" />
                </div>

                {/* Name */}
                <div className="pb-1">
                  <h2 className="text-xl font-bold text-gray-900 sm:text-2xl">
                    {user?.name || "User"}
                  </h2>

                  <p className="mt-1 text-sm text-[#6D8196]">
                    {user?.email ||
                      "No email available"}
                  </p>
                </div>
              </div>

              {/* Edit Button */}
              <button
                type="button"
                onClick={handleEditOpen}
                className="flex w-fit items-center gap-2 rounded-xl bg-[#000080] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#000060]"
              >
                <Pencil className="h-4 w-4" />

                Edit Profile
              </button>
            </div>

            {/* ACCOUNT STATUS */}
            <div className="mt-8 rounded-xl border border-[#ADD8E6]/50 bg-[#FFFAFA] p-4">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">

                <div className="flex items-center gap-3">

                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-50">
                    <ShieldCheck className="h-5 w-5 text-green-600" />
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-gray-800">
                      Account Status
                    </p>

                    <p className="text-xs text-[#6D8196]">
                      Your account is currently active.
                    </p>
                  </div>
                </div>

                <span className="w-fit rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-600">
                  Active
                </span>
              </div>
            </div>

            {/* PERSONAL INFORMATION */}
            <div className="mt-8">
              <h3 className="text-lg font-bold text-[#000080]">
                Personal Information
              </h3>

              <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">

                {/* Name */}
                <div className="rounded-xl border border-[#ADD8E6]/50 p-4">
                  <div className="flex items-center gap-3">

                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#ADD8E6]/30">
                      <User className="h-5 w-5 text-[#000080]" />
                    </div>

                    <div className="min-w-0">
                      <p className="text-xs font-medium text-[#6D8196]">
                        Full Name
                      </p>

                      <p className="mt-1 truncate font-semibold text-gray-800">
                        {user?.name || "—"}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="rounded-xl border border-[#ADD8E6]/50 p-4">
                  <div className="flex items-center gap-3">

                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#ADD8E6]/30">
                      <Mail className="h-5 w-5 text-[#000080]" />
                    </div>

                    <div className="min-w-0">
                      <p className="text-xs font-medium text-[#6D8196]">
                        Email Address
                      </p>

                      <p className="mt-1 truncate font-semibold text-gray-800">
                        {user?.email || "—"}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Mobile */}
                <div className="rounded-xl border border-[#ADD8E6]/50 p-4">
                  <div className="flex items-center gap-3">

                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#ADD8E6]/30">
                      <Phone className="h-5 w-5 text-[#000080]" />
                    </div>

                    <div>
                      <p className="text-xs font-medium text-[#6D8196]">
                        Mobile Number
                      </p>

                      <p className="mt-1 font-semibold text-gray-800">
                        {user?.mobile || "—"}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Member Since */}
                <div className="rounded-xl border border-[#ADD8E6]/50 p-4">
                  <div className="flex items-center gap-3">

                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#ADD8E6]/30">
                      <CalendarDays className="h-5 w-5 text-[#000080]" />
                    </div>

                    <div>
                      <p className="text-xs font-medium text-[#6D8196]">
                        Member Since
                      </p>

                      <p className="mt-1 font-semibold text-gray-800">
                        {getMemberSince()}
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* ACCOUNT VERIFICATION */}
            <div className="mt-8 border-t border-[#ADD8E6]/40 pt-6">

              <h3 className="text-lg font-bold text-[#000080]">
                Account Verification
              </h3>

              <div className="mt-4 flex flex-col gap-4 rounded-xl border border-[#ADD8E6]/50 p-4 sm:flex-row sm:items-center sm:justify-between">

                <div className="flex items-center gap-3">

                  <ShieldCheck
                    className={`h-5 w-5 ${
                      user?.is_verified
                        ? "text-green-600"
                        : "text-[#6D8196]"
                    }`}
                  />

                  <div>
                    <p className="font-semibold text-gray-800">
                      Email Verification
                    </p>

                    <p className="text-xs text-[#6D8196]">
                      {user?.is_verified
                        ? "Your email address is verified."
                        : "Your email address is not verified."}
                    </p>
                  </div>
                </div>

                <span
                  className={`w-fit rounded-full px-3 py-1 text-xs font-semibold ${
                    user?.is_verified
                      ? "bg-green-50 text-green-600"
                      : "bg-gray-100 text-gray-600"
                  }`}
                >
                  {user?.is_verified
                    ? "Verified"
                    : "Not Verified"}
                </span>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* EDIT PROFILE MODAL */}
      {editOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4 py-6">

          <div className="max-h-[90vh] w-full max-w-md overflow-y-auto rounded-2xl bg-white p-6 shadow-2xl">

            {/* Modal Header */}
            <div className="flex items-start justify-between gap-4">

              <div>
                <h2 className="text-xl font-bold text-[#000080]">
                  Edit Profile
                </h2>

                <p className="mt-1 text-sm text-[#6D8196]">
                  Update your personal information.
                </p>
              </div>

              <button
                type="button"
                onClick={handleEditClose}
                disabled={saving}
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-[#6D8196] transition hover:bg-[#ADD8E6]/20 disabled:cursor-not-allowed disabled:opacity-50"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Error */}
            {error && (
              <div className="mt-5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-600">
                {error}
              </div>
            )}

            {/* Success */}
            {success && (
              <div className="mt-5 rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm font-medium text-green-600">
                {success}
              </div>
            )}

            {/* Form */}
            <form
              onSubmit={handleProfileUpdate}
              className="mt-6 space-y-5"
            >

              {/* Full Name */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-[#000080]">
                  Full Name
                </label>

                <div className="relative">
                  <User className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#6D8196]" />

                  <input
                    type="text"
                    name="name"
                    value={editForm.name}
                    onChange={handleEditChange}
                    placeholder="Enter your name"
                    disabled={saving}
                    className="w-full rounded-xl border border-[#6D8196]/25 bg-[#FFFAFA] py-3 pl-12 pr-4 text-sm outline-none transition focus:border-[#000080] disabled:cursor-not-allowed disabled:opacity-60"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-[#000080]">
                  Email Address
                </label>

                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#6D8196]" />

                  <input
                    type="email"
                    value={user?.email || ""}
                    disabled
                    className="w-full cursor-not-allowed rounded-xl border border-[#6D8196]/20 bg-gray-100 py-3 pl-12 pr-4 text-sm text-gray-500 outline-none"
                  />
                </div>

                <p className="mt-1.5 text-xs text-[#6D8196]">
                  Email address cannot be changed.
                </p>
              </div>

              {/* Mobile */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-[#000080]">
                  Mobile Number
                </label>

                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#6D8196]" />

                  <input
                    type="tel"
                    name="mobile"
                    value={editForm.mobile}
                    onChange={handleEditChange}
                    maxLength={10}
                    placeholder="Enter 10-digit mobile number"
                    disabled={saving}
                    className="w-full rounded-xl border border-[#6D8196]/25 bg-[#FFFAFA] py-3 pl-12 pr-4 text-sm outline-none transition focus:border-[#000080] disabled:cursor-not-allowed disabled:opacity-60"
                  />
                </div>
              </div>

              {/* Buttons */}
              <div className="flex flex-col-reverse gap-3 pt-2 sm:flex-row sm:justify-end">

                {/* Cancel */}
                <button
                  type="button"
                  onClick={handleEditClose}
                  disabled={saving}
                  className="rounded-xl border border-[#6D8196]/25 px-5 py-3 text-sm font-semibold text-[#6D8196] transition hover:bg-[#FFFAFA] disabled:cursor-not-allowed disabled:opacity-50"
                >
                  Cancel
                </button>

                {/* Save */}
                <button
                  type="submit"
                  disabled={saving}
                  className="flex items-center justify-center gap-2 rounded-xl bg-[#000080] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#000060] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {saving ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Saving...
                    </>
                  ) : (
                    <>
                      <Save className="h-4 w-4" />
                      Save Changes
                    </>
                  )}
                </button>

              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default UserProfile;