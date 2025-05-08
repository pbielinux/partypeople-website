import Link from 'next/link';
import React from 'react';

const Button = ({ children, onClick }) => {
  return (
    <div>
          <Link href="/connect" className="relative inline-block">
            <div className="absolute inset-0 bg-black translate-x-1 translate-y-1 rounded"></div>
            <button onClick={onClick} className="relative px-6 py-2 bg-white border-2 border-black rounded font-medium hover:bg-gray-100 transition-colors">
              CONNECT
            </button>
          </Link>
    </div>
  );
};

export default Button;