import { Eye, EyeOff } from "lucide-react";

function Field({
  label,
  placeholder,
  type = "text",
  value = "",
  onChange,
  action,
  showPassword,
  setShowPassword,
}) {
  const password = type === "password";

  return (
    <div className="mb-3">
      <div className="flex items-center justify-between mb-1">
        <label className="text-[10px] font-bold text-[#111]">
          {label}
        </label>
        {action}
      </div>

      <div className="relative">
        <input
          type={password && showPassword ? "text" : type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="h-[38px] w-full rounded-[5px] border border-[#bbb] bg-white px-3 pr-10 text-[10px] outline-none focus:border-[#080B78] focus:ring-1 focus:ring-[#080B78]/20 placeholder:text-[#aaa]"
        />

        {password && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[#7d6fc4]"
          >
            {showPassword ? <EyeOff size={14} /> : <Eye size={14} />}
          </button>
        )}
      </div>
    </div>
  );
}

export default Field;
