import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

function BackPages({ to = "/" }) {
  return (
    <Link
      to={to}
      className="inline-flex items-center text-[#080B78] hover:opacity-70 mb-3"
    >
      <ArrowLeft size={18} strokeWidth={2.7} />
    </Link>
  );
}

export default BackPages;
