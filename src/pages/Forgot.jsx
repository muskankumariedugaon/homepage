import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Shell from "../components/Shell";
import Card from "../components/Card";
import Back from "../components/Back";
import Title from "../components/Title";
import Field from "../components/Field";
import PrimaryButton from "../components/PrimaryButton";

import forgotImg from "../assets/forgot.png";

function Forgot() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  return (
    <Shell>
      <Card>
        <Back to="/login" />

        <Title
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
        <Field
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
      </Card>
    </Shell>
  );
}

export default Forgot;