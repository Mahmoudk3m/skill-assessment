import { useEffect, useState } from "react";
import clsx from "clsx";
import Logo from "../assets/Logo";

export default function Navbar({ separator }: { separator?: boolean }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    window.addEventListener("resize", () => {
      setIsOpen(false);
    });
  }, []);

  return (
    <div className={clsx("w-full flex flex-row justify-between items-center mt-4", separator && "p-4 mt-0 bg-white")}>
      <div className="flex flex-row items-center">
        <Logo />
        {separator && (
          <div className="flex flex-col justify-center items-center ml-4">
            <h1 className="text-2xl font-bold text-dark-gray uppercase" style={{ lineHeight: 0 }}>
              LosAngeles
            </h1>
            <h2 className="text-2xl font-bold text-steel-blue uppercase mt-5" style={{ lineHeight: 0 }}>
              Mountains
            </h2>
          </div>
        )}
      </div>
      <div>
        <div className="flex flex-col justify-center">
          <button
            onClick={toggleMenu}
            className={clsx(
              "hover:text-gray-900 focus:outline-none md:hidden",
              separator ? "text-steel-blue" : "text-white"
            )}
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
          <nav className={clsx("md:flex md:flex-row md:items-center", isOpen ? "block" : "hidden")}>
            <ul className="flex flex-col md:flex-row gap-4 md:gap-16 mt-4 absolute md:relative right-2 bg-white p-4 md:p-0 md:bg-transparent md:mt-0">
              <li>
                <a
                  className={clsx(
                    "underline italic font-bold uppercase",
                    separator || isOpen ? "text-steel-blue" : "text-white"
                  )}
                  href="#"
                >
                  01.History
                </a>
              </li>
              <li>
                <a
                  className={clsx(
                    "underline italic font-bold uppercase",
                    separator || isOpen ? "text-steel-blue" : "text-white"
                  )}
                  href="#"
                >
                  02.Teams
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
