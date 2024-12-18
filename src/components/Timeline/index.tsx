import { SectionTitle } from '../ui/SectionTitle';
import TimelineItem from './TimelineItem';
import { timelineData } from '../../data/timeline';

export default function Timeline() {
  return (
    <section className="py-20 bg-black" id="experience">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle 
          title="Experience & Education"
          subtitle="My professional journey and academic background"
        />

        <div className="relative">
          {/* Center line - visible only on desktop */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-yellow-400/20" />

          <div className="space-y-8 md:space-y-12">
            {timelineData.map((item, index) => (
              <TimelineItem key={index} {...item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}