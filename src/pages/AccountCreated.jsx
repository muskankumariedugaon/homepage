import { Link } from "react-router-dom";

import ShellPages from "../Components/ShellPages";
import MyCard from "../Components/MyCard";
import BackPages from "../Components/BackPages";
import MyTitle from "../Components/MyTitle";
import PrimaryButtons from "../Components/PrimaryButtons";

import accountCreatedImg from "../assets/account-created.png";

function AccountCreated() {
  return (
    <ShellPages >
      <MyCard className="flex flex-col">
        <BackPages to="/" />

        <MyTitle
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
          <PrimaryButtons>Continue</PrimaryButtons>
        </Link>
      </MyCard>
    </ShellPages>
  );
}

export default AccountCreated;