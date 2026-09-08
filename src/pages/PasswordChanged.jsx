import { Link } from "react-router-dom";

import Shell from "../Components/ShellPages";
import Card from "../Components/MyCard";
import Back from "../Components/BackPages";
import Title from "../Components/MyTitle";
import PrimaryButton from "../Components/PrimaryButtons";

import passwordChangedImg from "../assets/password-changed.png";

function PasswordChanged() {
  return (
    <Shell>
      <Card className="flex flex-col">
        <Back to="/" />

        <Title
          title="Password Changed!"
          subtitle="No hassle anymore."
        />

        <div className="flex-1 flex items-center justify-center">
          <img
            src={passwordChangedImg}
            className="w-[90%] h-[220px] object-contain"
            alt="Password changed"
          />
        </div>

        <div className="text-center mb-3">
          <p className="text-[9px]">
            Your password has been reset
          </p>
          <p className="text-[19px] font-extrabold leading-5">
            Successfully
          </p>
        </div>

        <Link to="/login" className="block">
          <PrimaryButton>Continue</PrimaryButton>
        </Link>
      </Card>
    </Shell>
  );
}

export default PasswordChanged;
