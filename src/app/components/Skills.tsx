import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useEffect, useState } from 'react';

interface Skill {
  name: string;
  level: number;
  color: string;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const skillCategories: SkillCategory[] = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React.js', level: 90, color: 'from-cyan-400 to-blue-500' },
        { name: 'HTML5 & CSS3', level: 95, color: 'from-orange-400 to-red-500' },
        { name: 'JavaScript', level: 88, color: 'from-yellow-400 to-orange-500' },
      ],
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js & Express', level: 85, color: 'from-green-400 to-emerald-500' },
        { name: 'Django & Flask', level: 70, color: 'from-green-600 to-teal-500' },
        { name: 'REST API Development', level: 88, color: 'from-blue-400 to-cyan-500' },
      ],
    },
    {
      title: 'Database',
      skills: [
        { name: 'MySQL', level: 80, color: 'from-blue-500 to-indigo-500' },
        { name: 'MongoDB', level: 85, color: 'from-green-500 to-emerald-600' },
      ],
    },
    {
      title: 'Other',
      skills: [
        { name: 'AI & Machine Learning Basics', level: 75, color: 'from-purple-400 to-pink-500' },
        { name: 'Git & GitHub', level: 90, color: 'from-gray-400 to-gray-600' },
        { name: 'UI/UX Design', level: 80, color: 'from-pink-400 to-purple-500' },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 md:py-32 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
         <h2 className="text-4xl md:text-6xl font-bold mb-5 text-white">
  My{" "}
  <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent inline-block">
    Skills
  </span>
</h2>

          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:border-cyan-500/30 transition-colors"
            >
              <h3 className="text-2xl font-bold mb-6 text-white">{category.title}</h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar
                    key={skill.name}
                    skill={skill}
                    delay={categoryIndex * 0.1 + skillIndex * 0.1}
                    isInView={isInView}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillBar({ skill, delay, isInView }: { skill: Skill; delay: number; isInView: boolean }) {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (isInView) {
      const timeout = setTimeout(() => {
        setWidth(skill.level);
      }, delay * 1000);
      return () => clearTimeout(timeout);
    }
  }, [isInView, skill.level, delay]);

  return (
    <div>
      <div className="flex justify-between mb-2">
        <span className="text-gray-300 font-medium">{skill.name}</span>
        <span className="text-cyan-400 font-semibold">{skill.level}%</span>
      </div>
      <div className="h-3 bg-white/10 rounded-full overflow-hidden">
        <motion.div
          className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative`}
          style={{ width: `${width}%` }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <motion.div
            className="absolute inset-0 bg-white/30"
            animate={{
              x: ['-100%', '100%'],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        </motion.div>
      </div>
    </div>
  );
}
