import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Shell from "../Components/ShellPages";
import Card from "../Components/MyCard";
import Back from "../Components/BackPages";
import Title from "../Components/MyTitle";
import Field from "../Components/MyField";
import PrimaryButton from "../Components/PrimaryButtons";

import newPasswordImg from "../assets/new-password.png";

function NewPassword() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  return (
    <Shell>
      <Card>
        <Back to="/verification" />

        <Title
          title="Set New Password"
          subtitle="Enter the code to continue."
        />

        <div className="flex justify-center">
          <img
            src={newPasswordImg}
            className="w-[70%] h-[125px] object-contain mb-2"
            alt="New password"
          />
        </div>

        <Field
          label="New Password"
          placeholder="Create new password"
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

        <PrimaryButton
          onClick={() => navigate("/password-changed")}
        >
          Reset Password
        </PrimaryButton>

        <p className="text-center text-[8px] mt-9 font-semibold text-[#080B78]">
          Reset password later?
        </p>
      </Card>
    </Shell>
  );
}

export default NewPassword;
