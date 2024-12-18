import { SectionTitle } from '../ui/SectionTitle';
import SkillCard from './SkillCard';
import { skillsData } from '../../data/skills';

export default function Skills() {
  return (
    <section className="py-16 md:py-20 bg-black" id="skills">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle 
          title="Skills & Expertise"
          subtitle="A comprehensive overview of my technical capabilities"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {skillsData.map((skillGroup, index) => (
            <SkillCard
              key={skillGroup.category}
              category={skillGroup.category}
              items={skillGroup.items}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}