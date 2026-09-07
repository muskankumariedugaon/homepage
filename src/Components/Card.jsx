function Card({ children, className = "" }) {
  return (
    <div
      className={`w-full max-w-[405px] min-h-[690px] rounded-[13px] bg-white shadow-[0_2px_3px_rgba(0,0,0,.15)] px-5 py-6 sm:px-6 ${className}`}
    >
      {children}
    </div>
  );
}

export default Card;