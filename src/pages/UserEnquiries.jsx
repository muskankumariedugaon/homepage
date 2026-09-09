import { useEffect, useMemo, useState } from "react";
import {
  MessageSquare,
  Search,
  Clock,
  CheckCircle,
  RefreshCw,
  AlertCircle,
  Loader2,
} from "lucide-react";

const API_BASE_URL =
  "https://nextgen-backend-81fc.onrender.com/api";

function UserEnquiries() {
  const [enquiries, setEnquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");

  const fetchEnquiries = async (isRefresh = false) => {
    try {
      if (isRefresh) {
        setRefreshing(true);
      } else {
        setLoading(true);
      }

      setError("");

      const token = localStorage.getItem("userToken");

      if (!token) {
        setError("Please login to view your enquiries.");
        return;
      }

      const response = await fetch(
        `${API_BASE_URL}/contact/my`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(
          data.message ||
            "Failed to fetch enquiries."
        );
      }

      setEnquiries(data.enquiries || []);
    } catch (error) {
      console.error(
        "Fetch Enquiries Error:",
        error
      );

      setError(
        error.message ||
          "Unable to load your enquiries."
      );
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    fetchEnquiries();
  }, []);

  // ==========================================
  // STATUS
  // ==========================================

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

  // ==========================================
  // DATE
  // ==========================================

  const formatDate = (dateValue) => {
    if (!dateValue) {
      return "—";
    }

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

  // ==========================================
  // SEARCH
  // ==========================================

  const filteredEnquiries = useMemo(() => {
    const query = search.toLowerCase().trim();

    if (!query) {
      return enquiries;
    }

    return enquiries.filter((enquiry) => {
      const searchableText = [
        enquiry.subject,
        enquiry.message,
        enquiry.role,
        enquiry.level,
        enquiry.course,
        enquiry.status,
        enquiry.email,
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();

      return searchableText.includes(query);
    });
  }, [enquiries, search]);

  // ==========================================
  // COUNTS
  // ==========================================

  const totalEnquiries = enquiries.length;

  const pendingEnquiries = enquiries.filter(
    (enquiry) =>
      getStatus(enquiry.status) === "pending"
  ).length;

  const completedEnquiries = enquiries.filter(
    (enquiry) =>
      getStatus(enquiry.status) === "completed"
  ).length;

  // ==========================================
  // STATUS BADGE
  // ==========================================

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

  // ==========================================
  // LOADING
  // ==========================================

  if (loading) {
    return (
      <div className="flex min-h-[calc(100vh-80px)] items-center justify-center bg-[#FFFAFA]">
        <div className="flex items-center gap-2 text-[#000080]">
          <Loader2 className="h-5 w-5 animate-spin" />

          <span className="text-sm font-medium">
            Loading enquiries...
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
      <div className="mx-auto max-w-7xl">

        {/* HEADER */}
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

          <div>
            <h1 className="text-2xl font-bold text-[#000080] sm:text-3xl">
              My Enquiries
            </h1>

            <p className="mt-1 text-sm text-[#6D8196]">
              Track and view your submitted enquiries.
            </p>
          </div>

          <button
            type="button"
            onClick={() => fetchEnquiries(true)}
            disabled={refreshing}
            className="flex w-fit items-center justify-center gap-2 rounded-xl border border-[#ADD8E6]/60 bg-white px-4 py-2.5 text-sm font-semibold text-[#000080] transition hover:bg-[#ADD8E6]/10 disabled:cursor-not-allowed disabled:opacity-60"
          >
            <RefreshCw
              className={`h-4 w-4 ${
                refreshing ? "animate-spin" : ""
              }`}
            />

            Refresh
          </button>

        </div>

        {/* ERROR */}
        {error && (
          <div className="mb-6 flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-600">
            <AlertCircle className="mt-0.5 h-5 w-5 shrink-0" />

            <span>{error}</span>
          </div>
        )}

        {/* STATS */}
        <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-3">

          {/* Total */}
          <div className="rounded-2xl border border-[#ADD8E6]/50 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">

              <div>
                <p className="text-sm font-medium text-[#6D8196]">
                  Total Enquiries
                </p>

                <h2 className="mt-2 text-3xl font-bold text-[#000080]">
                  {totalEnquiries}
                </h2>
              </div>

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#ADD8E6]/30">
                <MessageSquare className="h-6 w-6 text-[#000080]" />
              </div>

            </div>
          </div>

          {/* Pending */}
          <div className="rounded-2xl border border-[#ADD8E6]/50 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">

              <div>
                <p className="text-sm font-medium text-[#6D8196]">
                  Pending
                </p>

                <h2 className="mt-2 text-3xl font-bold text-[#000080]">
                  {pendingEnquiries}
                </h2>
              </div>

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#ADD8E6]/30">
                <Clock className="h-6 w-6 text-[#000080]" />
              </div>

            </div>
          </div>

          {/* Completed */}
          <div className="rounded-2xl border border-[#ADD8E6]/50 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">

              <div>
                <p className="text-sm font-medium text-[#6D8196]">
                  Completed
                </p>

                <h2 className="mt-2 text-3xl font-bold text-green-600">
                  {completedEnquiries}
                </h2>
              </div>

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-50">
                <CheckCircle className="h-6 w-6 text-green-600" />
              </div>

            </div>
          </div>

        </div>

        {/* SEARCH */}
        <div className="mb-6 rounded-2xl border border-[#ADD8E6]/50 bg-white p-4 shadow-sm">

          <div className="relative">

            <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#6D8196]" />

            <input
              type="text"
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
              placeholder="Search enquiries..."
              className="w-full rounded-xl border border-[#6D8196]/20 bg-[#FFFAFA] py-3 pl-12 pr-4 text-sm outline-none transition focus:border-[#000080]"
            />

          </div>
        </div>

        {/* EMPTY STATE */}
        {filteredEnquiries.length === 0 ? (
          <div className="rounded-2xl border border-[#ADD8E6]/50 bg-white px-6 py-16 text-center shadow-sm">

            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#ADD8E6]/30">
              <MessageSquare className="h-8 w-8 text-[#000080]" />
            </div>

            <h2 className="mt-5 text-xl font-bold text-[#000080]">
              {search
                ? "No Enquiries Found"
                : "No Enquiries Yet"}
            </h2>

            <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-[#6D8196]">
              {search
                ? "Try using a different search term."
                : "Your submitted enquiries will appear here."}
            </p>

            {search && (
              <button
                type="button"
                onClick={() => setSearch("")}
                className="mt-5 rounded-xl bg-[#000080] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#000060]"
              >
                Clear Search
              </button>
            )}

          </div>
        ) : (
          <>
            {/* DESKTOP TABLE */}
            <div className="hidden overflow-hidden rounded-2xl border border-[#ADD8E6]/50 bg-white shadow-sm md:block">

              <div className="overflow-x-auto">

                <table className="w-full min-w-[800px]">

                  <thead>
                    <tr className="border-b border-[#ADD8E6]/40 bg-[#FFFAFA]">

                      <th className="px-5 py-4 text-left text-xs font-bold uppercase tracking-wide text-[#6D8196]">
                        Subject
                      </th>

                      <th className="px-5 py-4 text-left text-xs font-bold uppercase tracking-wide text-[#6D8196]">
                        Course
                      </th>

                      <th className="px-5 py-4 text-left text-xs font-bold uppercase tracking-wide text-[#6D8196]">
                        Date
                      </th>

                      <th className="px-5 py-4 text-left text-xs font-bold uppercase tracking-wide text-[#6D8196]">
                        Status
                      </th>

                    </tr>
                  </thead>

                  <tbody>

                    {filteredEnquiries.map(
                      (enquiry, index) => (
                        <tr
                          key={
                            enquiry.id ||
                            enquiry._id ||
                            index
                          }
                          className="border-b border-[#ADD8E6]/30 last:border-b-0 hover:bg-[#FFFAFA]"
                        >

                          <td className="px-5 py-5">
                            <div className="max-w-[280px]">

                              <p className="truncate font-semibold text-gray-800">
                                {enquiry.subject ||
                                  "General Enquiry"}
                              </p>

                              <p className="mt-1 line-clamp-2 text-xs text-[#6D8196]">
                                {enquiry.message ||
                                  "No message available"}
                              </p>

                            </div>
                          </td>

                          <td className="px-5 py-5 text-sm text-gray-700">
                            {enquiry.course ||
                              enquiry.subject_interest ||
                              "—"}
                          </td>

                          <td className="px-5 py-5 text-sm text-[#6D8196]">
                            {formatDate(
                              enquiry.created_at ||
                                enquiry.createdAt
                            )}
                          </td>

                          <td className="px-5 py-5">
                            <StatusBadge
                              status={enquiry.status}
                            />
                          </td>

                        </tr>
                      )
                    )}

                  </tbody>

                </table>

              </div>
            </div>

            {/* MOBILE CARDS */}
            <div className="space-y-4 md:hidden">

              {filteredEnquiries.map(
                (enquiry, index) => (
                  <div
                    key={
                      enquiry.id ||
                      enquiry._id ||
                      index
                    }
                    className="rounded-2xl border border-[#ADD8E6]/50 bg-white p-5 shadow-sm"
                  >

                    <div className="flex items-start justify-between gap-3">

                      <div className="min-w-0">
                        <h3 className="font-bold text-[#000080]">
                          {enquiry.subject ||
                            "General Enquiry"}
                        </h3>

                        <p className="mt-2 text-sm leading-6 text-[#6D8196]">
                          {enquiry.message ||
                            "No message available"}
                        </p>
                      </div>

                      <StatusBadge
                        status={enquiry.status}
                      />

                    </div>

                    <div className="mt-4 grid grid-cols-2 gap-3 border-t border-[#ADD8E6]/30 pt-4">

                      <div>
                        <p className="text-xs text-[#6D8196]">
                          Course
                        </p>

                        <p className="mt-1 text-sm font-semibold text-gray-800">
                          {enquiry.course ||
                            enquiry.subject_interest ||
                            "—"}
                        </p>
                      </div>

                      <div>
                        <p className="text-xs text-[#6D8196]">
                          Submitted
                        </p>

                        <p className="mt-1 text-sm font-semibold text-gray-800">
                          {formatDate(
                            enquiry.created_at ||
                              enquiry.createdAt
                          )}
                        </p>
                      </div>

                    </div>

                  </div>
                )
              )}

            </div>
          </>
        )}

      </div>
    </div>
  );
}

export default UserEnquiries;