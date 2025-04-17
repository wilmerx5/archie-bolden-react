
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">

        {/* Logo / Brand */}
        <div className="text-xl font-bold text-blue-600 tracking-wide">
          Job<span className="text-gray-900">Board</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 text-gray-700 font-medium">
          <NavLink to="/" className="hover:text-blue-600 transition-colors">Home</NavLink>
        </nav>

        {/* CTA Button - Desktop only */}
        <div className="hidden md:block">
          <NavLink  to="/new" className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition-colors">
            Post a Job
          </NavLink>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-700 hover:text-blue-600 focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 pt-2 space-y-2 bg-white shadow">
          <nav className="flex flex-col text-gray-700 font-medium space-y-2">
            <NavLink
             onClick={()=>setMenuOpen(false)}
            to="/" className="hover:text-blue-600 transition-colors">Home</NavLink>
            <NavLink 
            onClick={()=>setMenuOpen(false)}
            to='/new' className="mt-2 bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition-colors">
              Post a Job
            </NavLink>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
