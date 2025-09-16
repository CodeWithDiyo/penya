import React from 'react';
export default function Footer() { // Must be default export
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-6 text-center">
        <p>© {new Date().getFullYear()} DIYOWLINK: service with exellence. All rights reserved.</p>
      </div>
    </footer>
  );
}
