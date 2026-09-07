import { Link } from "react-router-dom";

import Shell from "../components/Shell";
import Card from "../components/Card";
import Back from "../components/Back";
import Title from "../components/Title";
import PrimaryButton from "../components/PrimaryButton";

import accountCreatedImg from "../assets/account-created.png";

function AccountCreated() {
  return (
    <Shell>
      <Card className="flex flex-col">
        <Back to="/" />

        <Title
          title="Account Created!"
          subtitle="Welcome to Nextgen."
        />

        {/* Account Created Image */}
        <div className="flex-1 flex items-center justify-center">
          <img
            src={accountCreatedImg}
            className="w-[90%] h-[200px] object-contain"
            alt="Account created"
          />
        </div>

        {/* Success Message */}
        <div className="text-center mb-2">
          <p className="text-[9px]">
            Your password has been reset
          </p>

          <p className="text-[19px] font-extrabold leading-5">
            Successfully
          </p>
        </div>

        {/* Continue Button */}
        <Link to="/login" className="block">
          <PrimaryButton>Continue</PrimaryButton>
        </Link>
      </Card>
    </Shell>
  );
}

export default AccountCreated;