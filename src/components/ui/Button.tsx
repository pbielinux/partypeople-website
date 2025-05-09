'use client';

import { motion } from 'framer-motion';
import React from 'react';

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
};

export const Button: React.FC<ButtonProps> = ({ children, onClick, className }) => {
  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`relative inline-flex items-center justify-center px-4 py-2 font-semibold text-black bg-white border-2 border-black rounded-md
                  shadow-[8px_8px_0_0_rgba(0,0,0,1)] transition-all hover:shadow-[4px_4px_0_0_rgba(0,0,0,1)] active:shadow-[2px_2px_0_0_rgba(0,0,0,1)]
                  ${className ?? ''}`}
    >
      {children}
    </motion.button>
  );
};