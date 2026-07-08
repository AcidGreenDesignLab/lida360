import Link from 'next/link';
import React from 'react';

interface TextLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export function TextLink({ href, children, className = '' }: TextLinkProps) {
  return (
    <Link 
      href={href}
      className={`font-sans text-lg text-accent hover:text-error-dark transition-colors duration-200 inline-flex items-center group ${className}`}
    >
      <span className="border-b border-accent group-hover:border-error-dark transition-colors duration-200">
        {children}
      </span>
      <span className="ml-1 font-bold">&gt;</span>
    </Link>
  );
}