import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Trophy, Menu, X, HousePlugIcon, Layers2Icon, NotebookPenIcon } from "lucide-react";
import logo from "../../public/logo1.png";

const navLinks = [
  { name: "Home", path: "/", icon: <HousePlugIcon size={16} className="inline" /> },
  { name: "Blog", path: "/blog", icon: <Layers2Icon size={16} className="inline" /> },
  { name: "Book Demo", path: "/bookDemo", icon: <NotebookPenIcon size={16} className="inline" /> },
];

const Navbar: React.FC = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-neutral-900 border-b border-neutral-800 shadow-sm w-full sticky top-0 z-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Skassics" className="w-26 h-12 mt-2" />
        </Link>

        {/* Desktop NavLinks */}
        <div className="hidden md:flex items-center gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`flex items-center gap-1 px-3 py-1 rounded hover:text-amber-400 transition ${
                location.pathname.startsWith(link.path)
                  ? "text-amber-400 border-b-2 border-amber-400"
                  : "text-neutral-200"
              }`}
            >
              {link.icon}
              {link.name}
            </Link>
          ))}
        </div>

        {/* Action Buttons (Desktop) */}
        <div className="hidden md:flex gap-2 items-center">
          <button className="bg-amber-400 text-black px-4 py-1 rounded-md font-bold hover:bg-amber-300 transition">
            SUBSCRIBE
          </button>
          <button
            onClick={() => (window.location.href = "https://sklassics-ai.com/login")}
            className="border border-neutral-500 text-green-400 px-4 py-1 rounded hover:bg-neutral-800 transition"
          >
            Login
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-neutral-200"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-neutral-900 px-4 py-2 border-t border-neutral-800">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3 py-2 rounded text-sm font-medium ${
                  location.pathname.startsWith(link.path)
                    ? "text-neutral-200"
                    : "text-neutral-200 hover:text-amber-400"
                }`}
              >
                {link.name}
              </Link>
            ))}

            <button className="bg-amber-400 text-black px-3 py-2 rounded font-bold text-sm">
              SUBSCRIBE
            </button>
            <button
              onClick={() => (window.location.href = "https://sklassics-ai.com/login")}
              className="border border-neutral-500 text-green-400 px-3 py-2 rounded hover:bg-neutral-800 text-sm"
            >
              Login
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
