import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import Shell from "../Components/ShellPages";
import Card from "../Components/MyCard";
import Back from "../Components/BackPages";
import Title from "../Components/MyTitle";
import PrimaryButton from "../Components/PrimaryButtons";

import verificationImg from "../assets/verification.png";

function Verification() {
  const navigate = useNavigate();

  const [code, setCode] = useState([
    "",
    "",
    "",
    "",
    "",
    "",
  ]);

  const refs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];

  const updateCode = (index, value) => {
    const digit = value.replace(/\D/g, "").slice(-1);

    const next = [...code];
    next[index] = digit;
    setCode(next);

    if (digit && index < 5) {
      refs[index + 1].current?.focus();
    }
  };

  return (
    <Shell>
      <Card>
        <Back to="/forgot" />

        <Title
          title="Verification"
          subtitle="Enter the code to continue."
        />

        <div className="flex justify-center">
          <img
            src={verificationImg}
            className="w-full h-[178px] object-contain"
            alt="Verification"
          />
        </div>

        <div className="grid grid-cols-6 gap-1.5 mb-3">
          {code.map((value, index) => (
            <input
              key={index}
              ref={refs[index]}
              value={value}
              onChange={(e) =>
                updateCode(index, e.target.value)
              }
              className="h-[39px] rounded-[5px] border border-[#bbb] text-center text-lg outline-none focus:border-[#080B78]"
              maxLength={1}
              inputMode="numeric"
            />
          ))}
        </div>

        <PrimaryButton
          onClick={() => navigate("/new-password")}
        >
          Send Code
        </PrimaryButton>

        <p className="text-[8px] mt-3">
          Don't receive the code?{" "}
          <button
            type="button"
            className="font-bold text-[#080B78]"
          >
            Send Again
          </button>
        </p>

        <p className="text-center text-[9px] mt-5">
          ← &nbsp; Back to log in?
        </p>
      </Card>
    </Shell>
  );
}

export default Verification;
