import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black py-12 px-4 md:px-8">
        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-500 text-sm mt-2">
            © {new Date().getFullYear()} Ferry Wilson All rights reserved.
          </p>
        </div>
    </footer>
  );
};

export default Footer;