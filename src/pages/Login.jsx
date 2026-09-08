import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import ShellPages from "../Components/ShellPages";
import MyCard from "../Components/MyCard";
import BackPages from "../Components/BackPages";
import MyTitle from "../Components/MyTitle";
import MyField from "../Components/MyField";
import PrimaryButton from "../Components/PrimaryButtons";
import Divider from "../Components/Divider";
import SocialButtons from "../Components/SocialButtons";

function Login() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <ShellPages>
      <MyCard>
        <BackPages to="/login" />

        <MyTitle
          title="Login Account"
          subtitle="Welcome Back!"
        />

        <MyField
          label="Email Address"
          placeholder="Enter email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          action={
            <button
              type="button"
              className="text-[9px] font-bold text-[#080B78]"
            >
              Mobile Number?
            </button>
          }
        />

        <MyField
          label="Password"
          placeholder="Create password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          showPassword={showPassword}
          setShowPassword={setShowPassword}
        />

        <div className="flex items-center justify-between mb-4 text-[8px]">
          <label className="flex items-center gap-1.5">
            <input
              type="checkbox"
              className="accent-[#080B78] w-3 h-3"
            />
            Keep me logged in
          </label>

          <Link
            to="/forgot"
            className="font-bold text-[#080B78]"
          >
            Forgot Password?
          </Link>
        </div>

        <PrimaryButton onClick={() => navigate("/account-created")}>
          Login
        </PrimaryButton>

        <Divider text="or sign in with" />

        <SocialButtons />

        <p className="text-center text-[9px] mt-4">
          Don't have an account?{" "}
          <Link
            className="font-bold text-[#080B78]"
            to="/signup"
          >
            Sign Up
          </Link>
        </p>
      </MyCard>
    </ShellPages>
  );
}

export default Login;
