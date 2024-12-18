import { motion } from 'framer-motion';
import { Briefcase, GraduationCap } from 'lucide-react';
import { Card } from '../ui/Card';

interface TimelineItemProps {
  type: 'work' | 'education';
  year: string;
  title: string;
  company: string;
  description: string;
  index: number;
}

export default function TimelineItem({ type, year, title, company, description, index }: TimelineItemProps) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, x: 0, y: 50 }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="flex flex-col md:flex-row items-center justify-center relative"
    >
      {/* Mobile timeline line */}
      <div className="absolute h-full w-0.5 bg-yellow-400/20 left-4 top-0 md:hidden" />
      
      {/* Mobile date and icon */}
      <div className="flex items-center w-full md:hidden mb-4 pl-12">
        <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center absolute left-0">
          {type === 'work' ? (
            <Briefcase size={16} className="text-black" />
          ) : (
            <GraduationCap size={16} className="text-black" />
          )}
        </div>
        <span className="text-sm text-yellow-400 font-semibold">{year}</span>
      </div>

      {/* Desktop layout */}
      <div className={`hidden md:block w-5/12 ${isEven ? 'text-right pr-8' : 'order-2 text-left pl-8'}`}>
        <Card className={`${isEven ? 'ml-auto' : 'mr-auto'}`}>
          <div className="text-sm text-yellow-400 font-semibold mb-2">{year}</div>
          <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
          <div className="text-yellow-400/80 font-medium mb-2">{company}</div>
          <p className="text-gray-400">{description}</p>
        </Card>
      </div>

      {/* Desktop center icon */}
      <div className="hidden md:flex w-2/12 justify-center">
        <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
          {type === 'work' ? (
            <Briefcase size={16} className="text-black" />
          ) : (
            <GraduationCap size={16} className="text-black" />
          )}
        </div>
      </div>

      {/* Mobile card */}
      <div className="w-full pl-12 md:hidden">
        <Card>
          <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
          <div className="text-yellow-400/80 font-medium mb-2">{company}</div>
          <p className="text-gray-400">{description}</p>
        </Card>
      </div>

      <div className="hidden md:block w-5/12" />
    </motion.div>
  );
}