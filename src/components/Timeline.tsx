import { motion } from 'framer-motion';
import { Briefcase, GraduationCap } from 'lucide-react';

const experiences = [
  {
    type: 'work',
    year: '2022 - Present',
    title: 'Team Lead',
    company: 'Revmax Tech',
    description: 'Led team development of e-commerce app for discounted vouchers. Increased user engagement by 200%.'
  },
  {
    type: 'work',
    year: '2019 - 2022',
    title: 'Sr. Frontend Developer',
    company: 'Cronycle',
    description: 'Enhanced content curation features, improving relevancy scoring accuracy by 20%.'
  },
  {
    type: 'work',
    year: '2017 - 2019',
    title: 'Frontend Developer',
    company: 'Trainman',
    description: 'Built website from scratch using Angular2, focusing on SEO and performance optimization.'
  },
  {
    type: 'work',
    year: '2015 - 2017',
    title: 'Software Developer',
    company: 'Pariksha Labs',
    description: 'Developed Adobe extensions using AngularJS for time tracking and file uploading.'
  },
  {
    type: 'education',
    year: '2010 - 2015',
    title: 'BTech + MTech in Computer Science',
    company: 'Jaypee Institute of Information Technology',
    description: '5-year dual degree programme'
  },
  {
    type: 'education',
    year: '2009',
    title: 'Senior Secondary Education',
    company: 'Dehradun Public School',
    description: 'Completed senior secondary education'
  }
];

export default function Timeline() {
  return (
    <section className="py-20 bg-white" id="experience">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Experience & Education</h2>
          <p className="text-gray-600">My professional journey and academic background</p>
        </motion.div>

        <div className="relative">
          {/* Center line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200" />

          <div className="space-y-12">
            {experiences.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className={`flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center justify-center`}
              >
                <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                  <div className={`bg-white p-6 rounded-xl shadow-lg ${index % 2 === 0 ? 'ml-auto' : 'mr-auto'}`}>
                    <div className="text-sm text-indigo-600 font-semibold mb-2">{item.year}</div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <div className="text-gray-600 font-medium mb-2">{item.company}</div>
                    <p className="text-gray-500">{item.description}</p>
                  </div>
                </div>
                <div className="w-2/12 flex justify-center">
                  <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center">
                    {item.type === 'work' ? (
                      <Briefcase size={16} className="text-white" />
                    ) : (
                      <GraduationCap size={16} className="text-white" />
                    )}
                  </div>
                </div>
                <div className="w-5/12" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}