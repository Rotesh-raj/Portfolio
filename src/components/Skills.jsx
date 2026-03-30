import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import * as Icons from "lucide-react"

// ✅ Safe Icons
const FrontIcon = Icons.Smartphone || (() => <span />)
const BackIcon = Icons.Server || (() => <span />)
const DbIcon = Icons.Database || (() => <span />)
const ToolIcon = Icons.Zap || (() => <span />)
const CheckIcon = Icons.BadgeCheck || (() => <span />)

const skills = [
  {
    category: 'Frontend Development',
    items: [
      { name: 'React.js', level: 90 },
      { name: 'JavaScript (ES6+)', level: 90 },
      { name: 'HTML5 & CSS3', level: 85 },
      { name: 'Tailwind CSS', level: 85 },
      { name: 'Framer Motion', level: 75 },
      { name: 'Three.js (Basics)', level: 65 },
    ],
    icon: FrontIcon,
    color: 'from-blue-500 to-cyan-500'
  },
  {
    category: 'Backend Development',
    items: [
      { name: 'Node.js', level: 85 },
      { name: 'Express.js', level: 85 },
      { name: 'Java (Core + Backend)', level: 75 },
      { name: 'REST APIs', level: 85 },
      { name: 'Authentication (JWT)', level: 80 },
    ],
    icon: BackIcon,
    color: 'from-purple-500 to-pink-500'
  },
  {
    category: 'Database & Storage',
    items: [
      { name: 'MongoDB', level: 85 },
      { name: 'MySQL', level: 80 },
      { name: 'superbase (Basics)', level: 70 },
    ],
    icon: DbIcon,
    color: 'from-indigo-500 to-cyan-500'
  },
  {
    category: 'Tools & Deployment',
    items: [
      { name: 'Git & GitHub', level: 90 },
      { name: 'Postman', level: 85 },
      { name: 'Vercel / Netlify / Render ', level: 85 },
      { name: 'VS Code', level: 95 },
    ],
    icon: ToolIcon,
    color: 'from-orange-500 to-red-500'
  }
]

const Skills = () => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section id="skills" className="py-32 bg-gradient-to-b from-slate-950/50 to-slate-900">
      <div className="max-w-7xl mx-auto px-6">

        {/* 🔥 Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <h2 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-green-400 via-emerald-500 to-teal-500 bg-clip-text text-transparent mb-6">
            Skills & Technologies
          </h2>

          <p className="text-xl opacity-90 max-w-3xl mx-auto leading-relaxed">
            Focused on building scalable full-stack applications using modern technologies with strong emphasis on performance, security, and clean architecture.
          </p>
        </motion.div>

        {/* 🔥 Skills Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          {skills.map((skillCategory, index) => {
            const Icon = skillCategory.icon

            return (
              <motion.div
                key={skillCategory.category}
                initial={{ opacity: 0, scale: 0.9, y: 50 }}
                animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="glass p-10 rounded-3xl hover:shadow-2xl transition-all group"
              >
                {/* Category Header */}
                <div className="flex items-center space-x-4 mb-8">
                  <div className={`w-16 h-16 bg-gradient-to-br ${skillCategory.color} rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 transition`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-white">
                    {skillCategory.category}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="space-y-5">
                  {skillCategory.items.map((skill, skillIndex) => (
                    <div key={skill.name}>
                      
                      {/* Skill Name */}
                      <div className="flex justify-between mb-2 text-sm">
                        <span>{skill.name}</span>
                        <span className="opacity-70">{skill.level}%</span>
                      </div>

                      {/* Progress Bar */}
                      <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${skill.level}%` } : {}}
                          transition={{ duration: 1.2, delay: skillIndex * 0.1 }}
                          className={`h-full bg-gradient-to-r ${skillCategory.color} rounded-full`}
                        />
                      </div>

                    </div>
                  ))}
                </div>

              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Skills