import { useState } from "react";
import { Outlet } from "react-router-dom";

import UserSidebar from "./UserSidebar";
import UserTopbar from "./UserTopbar";

function UserLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#FFFAFA]">

      <UserSidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      <div className="min-h-screen lg:ml-64">

        <UserTopbar
          onMenuClick={() => setSidebarOpen(true)}
        />

        <main>
          <Outlet />
        </main>

      </div>

    </div>
  );
}

export default UserLayout;