function SocialIcon({ children }) {
  return (
    <button
      type="button"
      className="h-[31px] rounded-[3px] bg-[#e9e6fb] flex items-center justify-center"
    >
      {children}
    </button>
  );
}

export default SocialIcon;
