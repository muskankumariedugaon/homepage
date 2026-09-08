import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaFacebookF, FaGithub } from "react-icons/fa";

import Shell from "../Components/ShellPages";
import Card from "../Components/MyCard";
import Back from "../Components/BackPages";
import Title from "../Components/MyTitle";
import Field from "../components/Field";
import PrimaryButton from "../Components/PrimaryButtons";
import Divider from "../components/Divider";
import SocialIcon from "../components/SocialIcon";

function Signup() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  return (
    <Shell>
      <Card>
        <Back />

        <Title
          title="Create Account"
          subtitle="Sign up to continue"
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

        <Field
          label="Confirm Password"
          placeholder="Re-enter password"
          type="password"
          value={confirm}
          onChange={(e) => setConfirm(e.target.value)}
          showPassword={showConfirm}
          setShowPassword={setShowConfirm}
        />

        <label className="flex items-center gap-1.5 text-[8px] mb-4">
          <input
            type="checkbox"
            className="accent-[#080B78] w-3 h-3"
          />
          I agree with privacy policy
        </label>

        <PrimaryButton onClick={() => navigate("/account-created")}>
          Sign up
        </PrimaryButton>

        <Divider text="or sign up with" />

        <div className="grid grid-cols-3 gap-5">
          <SocialIcon>G</SocialIcon>

          <SocialIcon>
            <FaGithub size={17} />
          </SocialIcon>

          <SocialIcon>
            <FaFacebookF
              size={17}
              className="text-[#1877F2]"
            />
          </SocialIcon>
        </div>

        <p className="text-center text-[9px] mt-5">
          Already have a account?{" "}
          <Link
            className="font-bold text-[#080B78]"
            to="/login"
          >
            Login
          </Link>
        </p>
      </Card>
    </Shell>
  );
}

export default Signup;
