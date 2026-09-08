import { useState } from "react";
import { useNavigate } from "react-router-dom";

import ShellPages from "../Components/ShellPages";
import MyCard from "../Components/MyCard";
import BackPages from "../Components/BackPages";
import MyTitle from "../Components/MyTitle";
import MyField from "../Components/MyField";
import PrimaryButton from "../Components/PrimaryButtons";

import forgotImg from "../assets/forgot.png";
import BackPages from "../Components/BackPages";

function Forgot() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  return (
    <ShellPages>
      <MyCard>
        <BackPages to="/login" />

        <MyTitle
          title="Forgot Password?"
          subtitle="No worries, We got you."
        />

        {/* Forgot Password Image */}
        <div className="flex justify-center mb-2">
          <img
            src={forgotImg}
            className="w-[78%] h-[160px] object-contain"
            alt="Forgot password"
          />
        </div>

        {/* Email Field */}
        <MyField
          label="Email Address"
          placeholder="Enter email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          action={
            <span className="text-[9px] font-bold text-[#080B78]">
              Mobile Number?
            </span>
          }
        />

        {/* Send Code */}
        <PrimaryButton onClick={() => navigate("/verification")}>
          Send Code
        </PrimaryButton>

        {/* Back to Login */}
        <p className="text-center text-[9px] mt-6">
          ← &nbsp; Back to log in?
        </p>
      </MyCard>
    </ShellPages>
  );
}

export default Forgot;