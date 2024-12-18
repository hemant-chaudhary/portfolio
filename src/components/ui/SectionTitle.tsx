import { motion } from 'framer-motion';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

export function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="text-center mb-12 md:mb-16 px-4"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-3 md:mb-4 text-white">
        <span className="text-yellow-400">{title.split(' ')[0]}</span>{' '}
        {title.split(' ').slice(1).join(' ')}
      </h2>
      {subtitle && <p className="text-yellow-400/60 text-sm md:text-base">{subtitle}</p>}
    </motion.div>
  );
}