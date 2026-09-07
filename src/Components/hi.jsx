import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Welcome from "./pages/Welcome";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Forgot from "./pages/Forgot";
import Verification from "./pages/Verification";
import NewPassword from "./pages/NewPassword";
import PasswordChanged from "./pages/PasswordChanged";
import AccountCreated from "./pages/AccountCreated";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot" element={<Forgot />} />
        <Route
          path="/verification"
          element={<Verification />}
        />
        <Route
          path="/new-password"
          element={<NewPassword />}
        />
        <Route
          path="/password-changed"
          element={<PasswordChanged />}
        />
        <Route
          path="/account-created"
          element={<AccountCreated />}
        />
        <Route path="*" element={<Welcome />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;