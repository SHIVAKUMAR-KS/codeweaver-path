import React from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import logo from "../../public/logo1.png"

// Define the quick link structure
interface QuickLink {
  name: string;
  href: string;
  external?: boolean;
}

const quickLinks: QuickLink[] = [

  { name: "Report an Issue", href: "google form links", external: true },
  { name: "Community", href: "/community" },
];

// Use any svg url for logo as you requested (example: simple open source rocket SVG)
const logoUrl =
  "https://upload.wikimedia.org/wikipedia/commons/6/6b/Bitmap_VS_SVG_example3.svg";

const Footer: React.FC = () => {
  const scrollToTop = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  const handleMapClick = () => {
    const address = "New Panvel East, Maharashtra, India 410206";
    window.open(
      `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`,
      "_blank"
    );
  };

  return (
    <footer className="relative bg-neutral-900 text-neutral-100">
      {/* Main content */}
      <div className="max-w-7xl w-full mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Left: Logo + About */}
        <div className="col-span-1 flex flex-col gap-3">
          <div className="flex items-center space-x-2">
            {/* <img src={logo} alt="DSATrek Logo" className="w-8 h-8" /> */}
            <span className="text-xl font-semibold text-amber-400">Sklassics-AI</span>
          </div>
          <p className="text-sm text-neutral-400 mt-2">
            Empower Your Future with AI
          </p>
        </div>
        {/* Contact + Product Hunt */}
        <div className="col-span-1 flex flex-col gap-3">
          <h4 className="text-lg font-semibold mb-3">Contact</h4>
          {/* <div className="mb-4">
            <a
              href="https://www.producthunt.com/products/dsatrek?launch=dsatrek"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://api.producthunt.com/widgets/embed-image/v1/product_review.svg?product_id=1069263&theme=light"
                alt="DSATrek | Product Hunt"
                className="h-[40px] w-auto"
              />
            </a>
          </div> */}
          <div className="flex items-center gap-2 text-sm text-neutral-400">
            <Mail className="w-4 h-4 text-amber-400" />
            <a href="mailto:wagh1.2.3.002@gmail.com" className="hover:underline">
              Email: Sklassics@aiplatform.com
            </a>
          </div>
          <div className="flex items-center gap-2 text-sm text-neutral-400">
            <Phone className="w-4 h-4 text-amber-400" />
            <a href="tel:+91 9392732341" className="hover:underline">
              +91 9392732341
            </a>
          </div>
          <div className="flex items-center gap-2 text-sm text-neutral-400">
            <MapPin className="w-4 h-4 text-amber-400" />
            <button
              type="button"
              onClick={handleMapClick}
              className="hover:underline text-left"
            >
              Rajiv Enclave, RangaReddy, Telangana, India 501510
            </button>
          </div>
        </div>
        {/* Feedback */}
        <div className="col-span-1 flex flex-col gap-3">
          <h4 className="text-lg font-semibold mb-3">Feedback</h4>
          {/* Example: replace this button with your FeedbackForm if needed */}
          <a
            href="" // Replace with your feedback form URL
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-4 py-2 bg-amber-400 text-neutral-900 rounded font-medium hover:bg-amber-300 transition"
          >
            Feedback
          </a>
          <p className="text-sm text-neutral-400">
            Help us improve by sharing your thoughts and suggestions.
          </p>
        </div>
        {/* Quick Links */}
        <div className="col-span-1 flex flex-col gap-3">
          <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2">
            {quickLinks.map((link) =>
              link.external ? (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-amber-300 transition"
                  >
                    {link.name}
                  </a>
                </li>
              ) : (
                <li key={link.name}>
                  <Link to={link.href} className="hover:text-amber-300 transition">
                    {link.name}
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-neutral-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          <span>© 2025 Sklassics-AI. All rights reserved.</span>
          {/* <SocialDock /> */}
          <div className="flex items-center gap-4">
            <Link to="/privacy" className="hover:text-amber-300 transition">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-amber-300 transition">Terms of Service</Link>
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 hover:text-amber-300 transition"
            >
              ↑ Back to top
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
