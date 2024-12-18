import { motion } from 'framer-motion';
import { Code2, Mail, Phone } from 'lucide-react';

export default function Hero() {
  return (
    <div id='heroBg' className="min-h-screen relative overflow-hidden">
      <div  />
      <div className="container mx-auto px-6 py-32 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white"
        >
          <h1 className="text-6xl font-bold mb-6">Hemant Kumar</h1>
          <h2 className="text-2xl mb-8">Full Stack Developer</h2>
          <p className="text-xl max-w-2xl mb-12">
            Experienced Full Stack Developer with 9+ years in dynamic environments, leading teams and delivering high-performance applications.
          </p>
          <div className="flex space-x-6">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="mailto:ch.hemant33@gmail.com"
              className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full hover:bg-white/30 transition-colors"
            >
              <Mail size={20} />
              <span>ch.hemant33@gmail.com</span>
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="tel:+917042606789"
              className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full hover:bg-white/30 transition-colors"
            >
              <Phone size={20} />
              <span>+91-7042606789</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"
      />
    </div>
  );
}