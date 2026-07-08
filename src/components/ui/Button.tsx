import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
}

export function Button({ children, variant = 'primary', className = '', ...props }: ButtonProps) {
  const baseStyles = 'rounded-full font-sans transition-colors duration-200 px-8 py-3 text-[24px] md:text-[32px] font-normal leading-none inline-flex items-center justify-center';
  const variants = {
    primary: 'bg-accent text-surface-white hover:bg-accent-light',
    secondary: 'bg-gray-dark text-surface-white hover:bg-opacity-80',
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}