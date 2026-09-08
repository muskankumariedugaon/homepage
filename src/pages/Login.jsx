import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Shell from "../Components/ShellPages";
import Card from "../Components/MyCard";
import Back from "../Components/BackPages";
import Title from "../Components/MyTitle";
import Field from "../components/Field";
import PrimaryButton from "../Components/PrimaryButtons";
import Divider from "../components/Divider";
import SocialButtons from "../components/SocialButtons";

function Login() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Shell>
      <Card>
        <Back />

        <Title
          title="Login Account"
          subtitle="Welcome Back!"
        />

        <Field
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

        <Field
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
      </Card>
    </Shell>
  );
}

export default Login;
