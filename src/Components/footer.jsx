import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();

  const [showTopBtn, setShowTopBtn] = useState(false);
  useEffect(() => {
    const handleScroll = () => setShowTopBtn(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-black text-white w-full h-auto px-[7.5%] py-16 mt-18relative">
      {showTopBtn && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-5 right-5 bg-yellow-400 hover:bg-yellow-300 text-black p-3 rounded-full shadow-lg z-50 transition-all animate-bounce"
          aria-label="Scroll to Top"
        >
          <FaArrowUp size={20} />
        </button>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h2 className="text-2xl font-bold text-yellow-400">BS</h2>
          <p className="mt-2 text-gray-400">Frontend Developer Portfolio</p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-yellow-400 mb-2">Menu</h3>
          <ul className="space-y-2">
            <li>
              <Link
                to="/"
                state={{ scrollTo: "home" }}
                className="hover:text-yellow-400"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/"
                state={{ scrollTo: "about" }}
                className="hover:text-yellow-400"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/"
                state={{ scrollTo: "skills" }}
                className="hover:text-yellow-400"
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                to="/"
                state={{ scrollTo: "projects" }}
                className="hover:text-yellow-400"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                target="_blank"
                className="hover:text-yellow-400"
              >
                Services
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-yellow-400 mb-2">
            Services
          </h3>
          <ul className="space-y-2">
            <li>Web Development</li>
            <li>UI Design</li>
            <li>Responsive Layout</li>
            <li>React Projects</li>
          </ul>
        </div>

        <div id="contact">
          <h3 className="text-xl font-semibold text-yellow-400 mb-2">
            Contact
          </h3>
          <form className="space-y-3">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-2 rounded bg-gray-800 text-white placeholder-gray-400"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full p-2 rounded bg-gray-800 text-white placeholder-gray-400"
            />
            <textarea
              rows="3"
              placeholder="Your Message"
              className="w-full p-2 rounded bg-gray-800 text-white placeholder-gray-400"
            ></textarea>
            <button
              type="submit"
              className="bg-yellow-400 text-black px-4 py-2 rounded font-medium hover:bg-yellow-300"
            >
              Send
            </button>
          </form>
        </div>
      </div>

      <div className="mt-12 text-center text-sm text-gray-500 border-t border-gray-700 pt-4">
        &copy; {new Date().getFullYear()} Baljeet Singh. All Rights Reserved.
      </div>
    </footer>
  );
};
export default Footer;
