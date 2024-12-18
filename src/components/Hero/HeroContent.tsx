import { motion } from 'framer-motion';
import { Mail, Phone } from 'lucide-react';
import { ContactButton } from '../ui/Buttons';

export default function HeroContent() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center text-white relative z-10"
    >
      <motion.h1 
        className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <span className="text-yellow-400">Hemant</span> Kumar
      </motion.h1>
      <motion.h2 
        className="text-xl md:text-2xl mb-6 md:mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        Full Stack Developer
      </motion.h2>
      <motion.p 
        className="text-base md:text-xl max-w-2xl mx-auto mb-8 md:mb-12 text-gray-300 px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        Experienced Full Stack Developer with 9+ years in dynamic environments, 
        leading teams and delivering high-performance applications.
      </motion.p>
      <motion.div 
        className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-6 px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <ContactButton href="mailto:ch.hemant33@gmail.com" icon={<Mail size={20} />}>
          ch.hemant33@gmail.com
        </ContactButton>
        <ContactButton href="tel:+917042606789" icon={<Phone size={20} />}>
          +91-7042606789
        </ContactButton>
      </motion.div>
    </motion.div>
  );
}