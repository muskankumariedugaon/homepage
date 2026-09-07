function Divider({ text }) {
  return (
    <div className="flex items-center gap-3 my-3 text-[7px] text-[#aaa]">
      <span className="h-px bg-[#ddd] flex-1" />
      {text}
      <span className="h-px bg-[#ddd] flex-1" />
    </div>
  );
}

export default Divider;
