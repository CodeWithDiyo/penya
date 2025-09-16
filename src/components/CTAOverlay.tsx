// components/CTAOverlay.tsx
"use client";

import { useEffect, useState } from 'react';

export default function CTAOverlay({ 
  text, 
  link,
  delay = 5000 
}: {
  text: string;
  link: string;
  delay?: number;
}) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 right-4 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-xl max-w-xs border border-gray-200 dark:border-gray-700 z-50">
      <p className="mb-3 text-gray-800 dark:text-gray-100">{text}</p>
      <a 
        href={link}  // Fixed: was using text instead of link for href
        target="_blank" 
        rel="noopener noreferrer"
        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm"
      >
        Learn more and signup
      </a>
      <button 
        onClick={() => setVisible(false)}
        className="absolute top-1 right-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
      >
        ×
      </button>
    </div>
  );
}
