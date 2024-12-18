import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
}

export function Card({ children, className = '' }: CardProps) {
  return (
    <div 
      className={`bg-black rounded-xl shadow-lg p-4 md:p-6 
                  border border-yellow-400/20 hover:border-yellow-400/40 
                  transition-colors ${className}`}
    >
      {children}
    </div>
  );
}