import { FaFacebookF, FaGithub } from "react-icons/fa";

function SocialButtons() {
  return (
    <div className="mt-4 space-y-2">
      <button
        type="button"
        className="h-[36px] w-full rounded-[5px] bg-[#e9e6fb] text-[8px] font-bold text-[#111] flex items-center justify-center gap-2 hover:bg-[#ddd9f6]"
      >
        <span className="text-[17px] font-bold text-[#4285F4]">G</span>
        Continue With Google
      </button>

      <button
        type="button"
        className="h-[36px] w-full rounded-[5px] bg-[#e9e6fb] text-[8px] font-bold text-[#111] flex items-center justify-center gap-2 hover:bg-[#ddd9f6]"
      >
        <FaGithub size={17} />
        Continue With GitHub
      </button>

      <button
        type="button"
        className="h-[36px] w-full rounded-[5px] bg-[#e9e6fb] text-[8px] font-bold text-[#111] flex items-center justify-center gap-2 hover:bg-[#ddd9f6]"
      >
        <FaFacebookF size={16} className="text-[#1877F2]" />
        Continue With Facebook
      </button>
    </div>
  );
}

export default SocialButtons;
