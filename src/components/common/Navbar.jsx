import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-14">
      <nav className="bg-white shadow-md px-6 py-4 mb-8 fixed w-full top-0 z-50">
        <div className="container mx-auto flex justify-between items-center">
         
          <Link to="/" className="text-2xl font-bold text-blue-600">
            NexaApply
          </Link>

          <ul className="hidden md:flex space-x-6 text-gray-700">
            <li>
              <Link to="/" className="hover:text-blue-500 transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/colleges" className="hover:text-blue-500 transition">
                Colleges
              </Link>
            </li>
            <li>
              <Link to="/admission" className="hover:text-blue-500 transition">
                Admission
              </Link>
            </li>
            <li>
              <Link to="/profile" className="hover:text-blue-500 transition">
                Profile
              </Link>
            </li>
          </ul>

 
          <div className="hidden md:flex space-x-4">
            <Button asChild>
              <Link to="/auth/login">Login</Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/auth/register">Register</Link>
            </Button>
          </div>

  
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden absolute bg-white w-full left-0 top-16 shadow-lg py-4">
            <ul className="flex flex-col space-y-4 text-center text-gray-700">
              <li>
                <Link
                  to="/"
                  className="block py-2 hover:text-blue-500 transition"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/colleges"
                  className="block py-2 hover:text-blue-500 transition"
                  onClick={() => setIsOpen(false)}
                >
                  Colleges
                </Link>
              </li>
              <li>
                <Link
                  to="/admission"
                  className="block py-2 hover:text-blue-500 transition"
                  onClick={() => setIsOpen(false)}
                >
                  Admission
                </Link>
              </li>
              <li>
                <Link
                  to="/profile"
                  className="block py-2 hover:text-blue-500 transition"
                  onClick={() => setIsOpen(false)}
                >
                  Profile
                </Link>
              </li>
              <li>
                <Link
                  to="/login"
                  className="block py-2 hover:text-blue-500 transition"
                  onClick={() => setIsOpen(false)}
                >
                  Login
                </Link>
              </li>
              <li>
                <Link
                  to="/register"
                  className="block py-2 hover:text-blue-500 transition"
                  onClick={() => setIsOpen(false)}
                >
                  Register
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
