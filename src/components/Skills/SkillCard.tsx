import { motion } from 'framer-motion';
import { Card } from '../ui/Card';

interface SkillCardProps {
  category: string;
  items: string[];
  index: number;
}

export default function SkillCard({ category, items, index }: SkillCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="h-full">
        <h3 className="text-lg md:text-xl font-semibold mb-4 text-yellow-400">{category}</h3>
        <div className="flex flex-wrap gap-2">
          {items.map((skill) => (
            <span
              key={skill}
              className="px-3 py-1 bg-yellow-400/10 text-yellow-400 rounded-full text-sm
                         border border-yellow-400/20 hover:bg-yellow-400/20 transition-colors"
            >
              {skill}
            </span>
          ))}
        </div>
      </Card>
    </motion.div>
  );
}