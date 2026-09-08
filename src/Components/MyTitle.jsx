function MyTitle({ title, subtitle }) {
  return (
    <div className="mb-5">
      <h1 className="text-[23px] leading-none font-extrabold text-[#080B78]">
        {title}
      </h1>
      <p className="mt-1 text-[10px] leading-4 text-[#222]">
        {subtitle}
      </p>
    </div>
  );
}

export default MyTitle;
