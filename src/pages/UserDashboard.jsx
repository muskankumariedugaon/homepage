import { useEffect, useState } from "react";
import {
  BookOpen,
  MessageSquare,
  User,
  ArrowRight,
  Clock,
  CheckCircle,
  Loader2,
  AlertCircle,
} from "lucide-react";

const API_BASE_URL =
  "https://nextgen-backend-81fc.onrender.com/api";

function UserDashboard() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const [enquiries, setEnquiries] = useState([]);
  const [enquiriesLoading, setEnquiriesLoading] = useState(true);
  const [enquiryError, setEnquiryError] = useState("");

  useEffect(() => {
    const fetchDashboardData = async () => {
      const token = localStorage.getItem("userToken");

      try {
        if (token) {
          const userResponse = await fetch(
            `${API_BASE_URL}/auth/me`,
            {
              method: "GET",
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );

          const userData = await userResponse.json();

          if (userResponse.ok && userData.success) {
            setUser(userData.user);

            localStorage.setItem(
              "user",
              JSON.stringify(userData.user)
            );
          } else {
            const savedUser = localStorage.getItem("user");

            if (savedUser) {
              setUser(JSON.parse(savedUser));
            }
          }
        } else {
          const savedUser = localStorage.getItem("user");

          if (savedUser) {
            setUser(JSON.parse(savedUser));
          }
        }
      } catch (error) {
        console.error("Fetch User Error:", error);

        const savedUser = localStorage.getItem("user");

        if (savedUser) {
          try {
            setUser(JSON.parse(savedUser));
          } catch (parseError) {
            console.error("User Parse Error:", parseError);
          }
        }
      } finally {
        setLoading(false);
      }

      try {
        if (!token) {
          setEnquiryError(
            "Please login to view your enquiries."
          );
          return;
        }

        const enquiryResponse = await fetch(
          `${API_BASE_URL}/contact/my`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const enquiryData = await enquiryResponse.json();

        if (
          !enquiryResponse.ok ||
          !enquiryData.success
        ) {
          throw new Error(
            enquiryData.message ||
              "Failed to fetch enquiries."
          );
        }

        setEnquiries(enquiryData.enquiries || []);
      } catch (error) {
        console.error(
          "Fetch Enquiries Error:",
          error
        );

        setEnquiryError(
          error.message ||
            "Failed to load enquiries."
        );
      } finally {
        setEnquiriesLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  const userName = user?.name || "User";

  const getStatus = (status) => {
    const value = String(status || "")
      .toLowerCase()
      .trim();

    if (
      value === "completed" ||
      value === "resolved" ||
      value === "closed"
    ) {
      return "completed";
    }

    return "pending";
  };

  const totalEnquiries = enquiries.length;

  const pendingEnquiries = enquiries.filter(
    (enquiry) =>
      getStatus(enquiry.status) === "pending"
  ).length;

  const completedEnquiries = enquiries.filter(
    (enquiry) =>
      getStatus(enquiry.status) === "completed"
  ).length;

  const formatDate = (dateValue) => {
    if (!dateValue) return "—";

    const date = new Date(dateValue);

    if (Number.isNaN(date.getTime())) {
      return "—";
    }

    return date.toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  const StatusBadge = ({ status }) => {
    const currentStatus = getStatus(status);

    if (currentStatus === "completed") {
      return (
        <span className="inline-flex items-center gap-1.5 rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-600">
          <CheckCircle className="h-3.5 w-3.5" />
          Completed
        </span>
      );
    }

    return (
      <span className="inline-flex items-center gap-1.5 rounded-full bg-[#ADD8E6]/30 px-3 py-1 text-xs font-semibold text-[#000080]">
        <Clock className="h-3.5 w-3.5" />
        Pending
      </span>
    );
  };

  return (
    <div className="min-h-screen bg-[#FFFAFA] p-4 sm:p-6 lg:p-8">
      <div className="mx-auto max-w-7xl space-y-6">

        {/* Welcome */}
        <div className="rounded-2xl bg-[#000080] p-6 text-white shadow-sm sm:p-8">
          {loading ? (
            <div>
              <div className="h-8 w-64 animate-pulse rounded bg-white/20" />

              <div className="mt-3 h-5 w-80 animate-pulse rounded bg-white/20" />
            </div>
          ) : (
            <>
              <h1 className="text-2xl font-bold sm:text-3xl">
                Hello, {userName} 👋
              </h1>

              <p className="mt-2 text-sm text-white/80 sm:text-base">
                Welcome back to your dashboard.
              </p>
            </>
          )}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">

          {/* My Courses */}
          <div className="rounded-2xl border border-[#ADD8E6]/50 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-[#6D8196]">
                  My Courses
                </p>

                <h2 className="mt-2 text-3xl font-bold text-[#000080]">
                  0
                </h2>
              </div>

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#ADD8E6]/30">
                <BookOpen className="h-6 w-6 text-[#000080]" />
              </div>
            </div>
          </div>

          {/* My Enquiries */}
          <div className="rounded-2xl border border-[#ADD8E6]/50 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-[#6D8196]">
                  My Enquiries
                </p>

                <h2 className="mt-2 flex h-9 items-center text-3xl font-bold text-[#000080]">
                  {enquiriesLoading ? (
                    <Loader2 className="h-7 w-7 animate-spin" />
                  ) : (
                    totalEnquiries
                  )}
                </h2>
              </div>

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#ADD8E6]/30">
                <MessageSquare className="h-6 w-6 text-[#000080]" />
              </div>
            </div>
          </div>

          {/* Account Status */}
          <div className="rounded-2xl border border-[#ADD8E6]/50 bg-white p-5 shadow-sm sm:col-span-2 lg:col-span-1">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-[#6D8196]">
                  Account Status
                </p>

                <h2 className="mt-2 text-xl font-bold text-green-600">
                  Active
                </h2>
              </div>

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-50">
                <CheckCircle className="h-6 w-6 text-green-600" />
              </div>
            </div>
          </div>

        </div>

        {/* Error */}
        {enquiryError && (
          <div className="flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-600">
            <AlertCircle className="mt-0.5 h-5 w-5 shrink-0" />
            <span>{enquiryError}</span>
          </div>
        )}

        {/* Profile + Recent Enquiries */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">

          {/* Profile */}
          <div className="rounded-2xl border border-[#ADD8E6]/50 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-bold text-[#000080]">
                My Profile
              </h2>

              <User className="h-5 w-5 text-[#6D8196]" />
            </div>

            <div className="mt-5 space-y-4">

              <div>
                <p className="text-xs font-medium uppercase tracking-wide text-[#6D8196]">
                  Name
                </p>

                <p className="mt-1 font-semibold text-gray-800">
                  {user?.name || "—"}
                </p>
              </div>

              <div>
                <p className="text-xs font-medium uppercase tracking-wide text-[#6D8196]">
                  Email
                </p>

                <p className="mt-1 break-all font-semibold text-gray-800">
                  {user?.email || "—"}
                </p>
              </div>

              <div>
                <p className="text-xs font-medium uppercase tracking-wide text-[#6D8196]">
                  Mobile
                </p>

                <p className="mt-1 font-semibold text-gray-800">
                  {user?.mobile || "—"}
                </p>
              </div>

            </div>
          </div>

          {/* Recent Enquiries */}
          <div className="rounded-2xl border border-[#ADD8E6]/50 bg-white p-6 shadow-sm">

            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg font-bold text-[#000080]">
                  Recent Enquiries
                </h2>

                {!enquiriesLoading &&
                  enquiries.length > 0 && (
                    <p className="mt-1 text-xs text-[#6D8196]">
                      {pendingEnquiries} pending •{" "}
                      {completedEnquiries} completed
                    </p>
                  )}
              </div>

              <Clock className="h-5 w-5 text-[#6D8196]" />
            </div>

            {enquiriesLoading ? (
              <div className="flex min-h-[220px] items-center justify-center">
                <div className="flex items-center gap-2 text-[#000080]">
                  <Loader2 className="h-5 w-5 animate-spin" />

                  <span className="text-sm font-medium">
                    Loading enquiries...
                  </span>
                </div>
              </div>
            ) : enquiries.length === 0 ? (
              <div className="flex min-h-[220px] flex-col items-center justify-center text-center">

                <MessageSquare className="h-10 w-10 text-[#ADD8E6]" />

                <p className="mt-3 font-semibold text-gray-700">
                  No enquiries yet
                </p>

                <p className="mt-1 text-sm text-[#6D8196]">
                  Your recent enquiries will appear here.
                </p>

              </div>
            ) : (
              <div className="mt-5 space-y-3">

                {enquiries
                  .slice(0, 3)
                  .map((enquiry, index) => (
                    <div
                      key={
                        enquiry.id ||
                        enquiry._id ||
                        index
                      }
                      className="rounded-xl border border-[#ADD8E6]/40 p-4 transition hover:bg-[#FFFAFA]"
                    >
                      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">

                        <div className="min-w-0">
                          <p className="truncate font-semibold text-gray-800">
                            {enquiry.subject ||
                              enquiry.subject_interest ||
                              "General Enquiry"}
                          </p>

                          <p className="mt-1 line-clamp-2 text-sm text-[#6D8196]">
                            {enquiry.message ||
                              enquiry.subject_interest ||
                              "No message available"}
                          </p>

                          <p className="mt-2 text-xs text-[#6D8196]">
                            {formatDate(
                              enquiry.created_at ||
                                enquiry.createdAt
                            )}
                          </p>
                        </div>

                        <StatusBadge
                          status={enquiry.status}
                        />

                      </div>
                    </div>
                  ))}

                {enquiries.length > 3 && (
                  <button
                    type="button"
                    onClick={() =>
                      (window.location.href =
                        "/user/enquiries")
                    }
                    className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl border border-[#ADD8E6]/50 py-3 text-sm font-semibold text-[#000080] transition hover:bg-[#ADD8E6]/10"
                  >
                    View All Enquiries

                    <ArrowRight className="h-4 w-4" />
                  </button>
                )}

              </div>
            )}

          </div>

        </div>

        {/* Quick Actions */}
        <div className="rounded-2xl border border-[#ADD8E6]/50 bg-white p-6 shadow-sm">

          <h2 className="text-lg font-bold text-[#000080]">
            Quick Actions
          </h2>

          <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">

            <button
              type="button"
              onClick={() =>
                (window.location.href =
                  "/user/courses")
              }
              className="group flex items-center justify-between rounded-xl border border-[#ADD8E6]/60 p-4 text-left transition hover:bg-[#ADD8E6]/10"
            >
              <div className="flex items-center gap-3">
                <BookOpen className="h-5 w-5 text-[#000080]" />

                <span className="font-semibold text-gray-800">
                  Browse Courses
                </span>
              </div>

              <ArrowRight className="h-5 w-5 text-[#6D8196] transition group-hover:translate-x-1" />
            </button>

            <button
              type="button"
              onClick={() =>
                (window.location.href =
                  "/user/enquiries")
              }
              className="group flex items-center justify-between rounded-xl border border-[#ADD8E6]/60 p-4 text-left transition hover:bg-[#ADD8E6]/10"
            >
              <div className="flex items-center gap-3">
                <MessageSquare className="h-5 w-5 text-[#000080]" />

                <span className="font-semibold text-gray-800">
                  My Enquiries
                </span>
              </div>

              <ArrowRight className="h-5 w-5 text-[#6D8196] transition group-hover:translate-x-1" />
            </button>

            <button
              type="button"
              onClick={() =>
                (window.location.href =
                  "/user/profile")
              }
              className="group flex items-center justify-between rounded-xl border border-[#ADD8E6]/60 p-4 text-left transition hover:bg-[#ADD8E6]/10"
            >
              <div className="flex items-center gap-3">
                <User className="h-5 w-5 text-[#000080]" />

                <span className="font-semibold text-gray-800">
                  View Profile
                </span>
              </div>

              <ArrowRight className="h-5 w-5 text-[#6D8196] transition group-hover:translate-x-1" />
            </button>

          </div>
        </div>

      </div>
    </div>
  );
}

export default UserDashboard;