import { motion } from 'framer-motion';
import { Code2 } from 'lucide-react';

export default function About() {
  return (
    <section className="py-20 bg-white" id="about">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="flex justify-center mb-8">
            <Code2 size={40} className="text-indigo-600" />
          </div>
          <h2 className="text-4xl font-bold mb-8">About Me</h2>
          <p className="text-lg text-gray-600 mb-6">
            Experienced in all phases of software engineering, including analysis, design, coding, testing, and deployment. 
            Strong understanding of MVC architecture, data structures, and algorithms, with expertise in SDLC and Agile/Scrum methodologies.
          </p>
          <p className="text-lg text-gray-600">
            I specialize in building scalable web applications and leading development teams to deliver high-quality software solutions.
            My expertise spans across modern web technologies and frameworks, allowing me to create efficient and user-friendly applications.
          </p>
        </motion.div>
      </div>
    </section>
  );
}