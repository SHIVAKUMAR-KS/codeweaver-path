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
          <div className="flex items-center gap-4">


  <a
    href="https://chat.whatsapp.com/JRiiUT1s4qfCA7tKxyuCEE"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-amber-400 text-black hover:bg-green-700 px-3 py-2 rounded font-bold text-sm flex items-center gap-2"
  >
    {/* WhatsApp Icon SVG (optional) */}
    <svg
      className="w-4 h-4"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path d="M20.52 3.49A11.91 11.91 0 0 0 12 0C5.37 0 0 5.37 0 12a11.87 11.87 0 0 0 1.59 6L0 24l6-1.58A11.94 11.94 0 0 0 12 24a12 12 0 0 0 8.52-20.51ZM12 21.71a9.61 9.61 0 0 1-5.19-1.59l-.37-.22-3.07.8.82-3.01-.24-.38a9.64 9.64 0 1 1 8 4.6Zm5.24-6.23c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.61.14s-.7.9-.86 1.09-.32.21-.6.07a7.15 7.15 0 0 1-2.1-1.3 7.66 7.66 0 0 1-1.42-1.76c-.15-.26 0-.4.11-.53.11-.12.25-.3.38-.45a.61.61 0 0 0 .05-.52c-.1-.18-.61-1.47-.83-2-.22-.53-.45-.46-.61-.47-.16 0-.35 0-.54 0a.77.77 0 0 0-.56.26 2.33 2.33 0 0 0-.9.88 3.36 3.36 0 0 0-1.14 2.18 4.46 4.46 0 0 0 .93 2.4c.55.75 1.22 1.58 2.15 2.1a8.53 8.53 0 0 0 3.39 1.37 3 3 0 0 0 1.53 0 2 2 0 0 0 1.25-1.16c.1-.18.1-.33.07-.45a.86.86 0 0 0-.34-.53Z" />
    </svg>
    Join WhatsApp
  </a>
            </div>
          <button
            onClick={() => (window.location.href = "https://sklassics-ai.com/login")}
            className="border border-neutral-500 text-yellow-400 px-4 py-1 rounded hover:bg-neutral-800 transition"
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
  <div className="md:hidden bg-neutral-900 px-4 py-10 border-t border-neutral-800">
    <div className="flex flex-col gap-4 items-center justify-center text-center">
      {navLinks.map((link) => (
        <Link
          key={link.name}
          to={link.path}
          onClick={() => setMobileMenuOpen(false)}
          className={`px-4 py-2 rounded text-sm font-medium w-full text-center ${
            location.pathname.startsWith(link.path)
              ? "text-neutral-200"
              : "text-neutral-200 hover:text-amber-400"
          }`}
        >
          {link.name}
        </Link>
      ))}

      {/* WhatsApp Button */}
      <a
        href="https://chat.whatsapp.com/YOUR_COMMUNITY_INVITE_LINK"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 text-black px-4 py-2 rounded font-bold text-sm flex items-center gap-2"
      >
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.52 3.49A11.91 11.91 0 0 0 12 0C5.37 0 0 5.37 0 12a11.87 11.87 0 0 0 1.59 6L0 24l6-1.58A11.94 11.94 0 0 0 12 24a12 12 0 0 0 8.52-20.51ZM12 21.71a9.61 9.61 0 0 1-5.19-1.59l-.37-.22-3.07.8.82-3.01-.24-.38a9.64 9.64 0 1 1 8 4.6Zm5.24-6.23c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.61.14s-.7.9-.86 1.09-.32.21-.6.07a7.15 7.15 0 0 1-2.1-1.3 7.66 7.66 0 0 1-1.42-1.76c-.15-.26 0-.4.11-.53.11-.12.25-.3.38-.45a.61.61 0 0 0 .05-.52c-.1-.18-.61-1.47-.83-2-.22-.53-.45-.46-.61-.47-.16 0-.35 0-.54 0a.77.77 0 0 0-.56.26 2.33 2.33 0 0 0-.9.88 3.36 3.36 0 0 0-1.14 2.18 4.46 4.46 0 0 0 .93 2.4c.55.75 1.22 1.58 2.15 2.1a8.53 8.53 0 0 0 3.39 1.37 3 3 0 0 0 1.53 0 2 2 0 0 0 1.25-1.16c.1-.18.1-.33.07-.45a.86.86 0 0 0-.34-.53Z" />
        </svg>
        Join WhatsApp
      </a>

      {/* Login Button */}
      <button
        onClick={() => (window.location.href = "https://sklassics-ai.com/login")}
        className="border border-neutral-500 text-yellow-500 px-4 py-2 rounded hover:bg-yellow-800 text-sm w-full text-center"
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
