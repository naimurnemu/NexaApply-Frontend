import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 mt-10">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Branding & About */}
          <div>
            <h2 className="text-2xl font-bold text-white">NexaApply</h2>
            <p className="mt-2 text-gray-400 text-sm">
              Your trusted platform for finding and applying to the best colleges.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="mt-3 space-y-2">
              <li>
                <Link to="/" className="hover:text-blue-400 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/colleges" className="hover:text-blue-400 transition">
                  Colleges
                </Link>
              </li>
              <li>
                <Link to="/admission" className="hover:text-blue-400 transition">
                  Admission
                </Link>
              </li>
              <li>
                <Link to="/profile" className="hover:text-blue-400 transition">
                  Profile
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold text-white">Follow Us</h3>
            <div className="mt-3 flex space-x-4">
              <a href="#" className="hover:text-blue-400 transition">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-blue-400 transition">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-blue-400 transition">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-blue-400 transition">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-6 pt-4 text-center text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} NexaApply. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
