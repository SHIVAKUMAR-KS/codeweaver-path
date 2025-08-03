import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Trophy } from "lucide-react";

const navLinks = [
  { name: "Problems", path: "/problems", icon: <Trophy size={16} className="inline" /> },
  { name: "Interview", path: "/interview" },
  { name: "Community", path: "/community" },
  { name: "Contests", path: "/contests" },
  { name: "Visualizer", path: "/visualizer" },
];

const logoUrl = "https://upload.wikimedia.org/wikipedia/commons/6/6b/Bitmap_VS_SVG_example3.svg";

const Navbar: React.FC = () => {
  const location = useLocation();

  return (
    <nav className="bg-neutral-900 border-b border-neutral-800 shadow-sm w-full sticky top-0 z-30">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <img src={logoUrl} alt="DSATrek Logo" className="w-8 h-8" />
          <span className="text-2xl text-amber-400 font-semibold tracking-tight group-hover:text-white transition">
            DSATrek
          </span>
        </Link>
        {/* NavLinks */}
        <div className="hidden md:flex items-center gap-2 ml-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`flex items-center gap-1 px-3 py-1 rounded hover:text-amber-400 ${
                location.pathname.startsWith(link.path)
                  ? "text-amber-400 border-b-2 border-amber-400"
                  : "text-neutral-200"
              } transition`}
            >
              {link.icon}
              {link.name}
            </Link>
          ))}
        </div>
        {/* Action Buttons */}
        <div className="flex gap-2 items-center">
          <button className="bg-amber-400 text-black px-4 py-1 rounded-md font-bold hover:bg-amber-300 transition">
            SUBSCRIBE
          </button>
          <button className="border border-neutral-500 text-green-400 px-4 py-1 rounded hover:bg-neutral-800 transition hidden md:block">
            Login
          </button>
          <button className="border border-neutral-700 text-blue-200 px-4 py-1 rounded hover:bg-neutral-700 transition hidden md:block">
            Sign Up
          </button>
        </div>
      </div>
      {/* Mobile Navigation */}
      <div className="md:hidden flex justify-center px-2 py-2 gap-2">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            to={link.path}
            className={`px-2 py-1 text-sm rounded ${
              location.pathname.startsWith(link.path)
                ? "bg-amber-400 text-neutral-900 font-bold"
                : "text-neutral-200"
            }`}
          >
            {link.name}
          </Link>
        ))}
        <button className="bg-amber-400 text-black px-2 py-1 rounded font-bold text-sm">SUBSCRIBE</button>
      </div>
    </nav>
  );
};

export default Navbar;
