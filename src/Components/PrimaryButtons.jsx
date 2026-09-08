function PrimaryButtons({ children, onClick, type = "button" }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="h-[39px] w-full rounded-[5px] bg-[#080B78] text-[13px] font-medium text-white shadow-sm hover:bg-[#06085f] active:scale-[.99] transition"
    >
      {children}
    </button>
  );
}

export default PrimaryButtons;
