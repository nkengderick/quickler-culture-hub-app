import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="p-4 bg-footer text-footer-foreground">
      <div className="flex justify-between items-center">
        <p>&copy; 2024 Quickler. All rights reserved.</p>
        <nav className="flex space-x-4">
          <a href="/legal">Legal</a>
          <a href="/policy">Privacy Policy</a>
          <a href="/about">About Us</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
