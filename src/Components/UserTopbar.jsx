import { Menu } from "lucide-react";

function UserTopbar({ onMenuClick }) {
  const savedUser = localStorage.getItem("user");

  let user = null;

  try {
    user = savedUser ? JSON.parse(savedUser) : null;
  } catch (error) {
    console.error("User Parse Error:", error);
  }

  const userName = user?.name || "User";

  return (
    <header className="sticky top-0 z-30 flex h-20 items-center justify-between border-b border-[#ADD8E6]/40 bg-white px-4 shadow-sm sm:px-6">

      {/* Mobile Menu */}
      <button
        type="button"
        onClick={onMenuClick}
        className="rounded-lg p-2 text-[#000080] transition hover:bg-[#ADD8E6]/20 lg:hidden"
      >
        <Menu className="h-6 w-6" />
      </button>

      {/* Welcome */}
      <div className="ml-auto">
        <p className="text-right text-xs text-[#6D8196] sm:text-sm">
          Welcome back,
        </p>

        <h2 className="text-right text-sm font-bold text-[#000080] sm:text-base">
          {userName}
        </h2>
      </div>

    </header>
  );
}

export default UserTopbar;