import { Link } from "react-router-dom";

import Shell from "../components/Shell";
import Card from "../components/Card";
import Title from "../components/Title";
import PrimaryButton from "../components/PrimaryButton";

import welcomeImg from "../assets/welcome.png";

function Welcome() {
  return (
    <Shell>
      <Card className="flex flex-col">
        <div className="mt-4">
          <Title
            title="Welcome"
            subtitle="Login or signup to continue"
          />
        </div>

        <div className="flex-1 flex items-center justify-center">
          <img
            src={welcomeImg}
            className="w-[92%] max-h-[280px] object-contain"
            alt="Welcome"
          />
        </div>

        <div className="space-y-2">
          <Link to="/signup" className="block">
            <PrimaryButton>Sign up</PrimaryButton>
          </Link>

          <Link
            to="/login"
            className="h-[39px] w-full rounded-[5px] border border-[#080B78] flex items-center justify-center text-[12px] font-medium text-[#080B78] hover:bg-[#f4f4ff]"
          >
            Already have a account
          </Link>

          <p className="text-center text-[9px] pt-2 text-[#222]">
            Continue as a guest?
          </p>
        </div>
      </Card>
    </Shell>
  );
}

export default Welcome;
