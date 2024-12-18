import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ContactButtonProps {
  href: string;
  icon: ReactNode;
  children: ReactNode;
}

export function ContactButton({ href, icon, children }: ContactButtonProps) {
  return (
    <motion.a
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      href={href}
      className="flex items-center justify-center space-x-2 bg-yellow-400/10 backdrop-blur-sm 
                 px-4 md:px-6 py-3 rounded-full hover:bg-yellow-400/20 transition-colors 
                 border border-yellow-400/20 text-sm md:text-base w-full md:w-auto"
    >
      {icon}
      <span className="truncate">{children}</span>
    </motion.a>
  );
}