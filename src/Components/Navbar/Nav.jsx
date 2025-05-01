import { Link } from "react-router";
import siteLogo from "../../assets/SiteLogo.png";
import { useState } from "react";
const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="relative flex items-center justify-between py-4  w-[95%]  sm:w-[90%] md:w-[85%] lg:w-[75%] mx-auto z-50">
      {/* left */}
      <section className="flex items-center w-[100%] h-full">
        {/* Logo section */}
        <Link to="/" className="whitespace-nowrap">
          <img
            src={siteLogo}
            alt="Logo"
            className="w-full h-13 object-fill"
          />
        </Link>
        {/* Navigation links */}
        <nav className=" w-fit ml-8 hidden md:flex md:items-center ">
          <div className="flex gap-4 font-PJS font-semibold text-Primary whitespace-nowrap text-sm">
            <Link to="/">Home</Link>
            <Link to="about">About</Link>
            <Link to="/pricing">Pricing</Link>
            <Link to="/consulting">Consulting</Link>
            <Link to="/ai">Ai Coach</Link>
          </div>
        </nav>
      </section>

      {/* Mobile */}
      <div className="flex items-center justify-end w-full md:hidden">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          type="button"
          className="inline-flex items-center justify-center p-2 rounded-md hover:text-blue-500 focus:outline-none"
        >
          <svg
            className="h-6 w-6"
            stroke="currentColor"
            fill="none"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute flex flex-col justify-center items-center w-full top-[80px] blue-gradient md:hidden">
          <Link
            to="/"
            className=" px-4 py-3 text-sm border-b-2 w-full text-center"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="px-4 py-3 text-sm border-b-2 w-full text-center"
          >
            About
          </Link>
          <Link
            to="/pricing"
            className="px-4 py-3 text-sm border-b-2 w-full text-center"
          >
            Pricing
          </Link>
          <Link
            to="/consulting"
            className=" px-4 py-3 text-sm border-b-2 w-full text-center"
          >
            Consulting
          </Link>
          <Link
            to="/ai"
            className="px-4 py-3 text-sm border-b-2 w-full text-center"
          >
            AI Coach
          </Link>

          <Link className="px-4 py-3 text-sm  w-full text-center">
            Get Started
          </Link>
        </div>
      )}
      {/* Button */}
      <div className="hidden md:flex md:items-center md:justify-end w-fit">
        <Link className="rounded-full text-Primary border-AllParaText bg-transparent whitespace-nowrap hover:bg-blue-500 hover:text-white hover:border-white font-bold text-base btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl">
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default Nav;
