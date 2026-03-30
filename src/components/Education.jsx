import { motion } from 'framer-motion'
import { GraduationCap, Calendar, MapPin } from 'lucide-react'
import { useInView } from 'react-intersection-observer'

const education = [
  {
    degree: 'Bachelor of Computer Applications (BCA)',
    institution: 'Dayananda sagar college of arts, science and commerce ',
    year: '2023 - 2026',
    location: 'Bangalore, India',
    description: 'Focused on full-stack development, algorithms, system design, and modern web technologies.'
  }
]

const Education = () => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section id="education" className="py-32 bg-gradient-to-b from-slate-900 to-slate-950/30">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div 
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <h2 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-orange-400 via-amber-500 to-yellow-500 bg-clip-text text-transparent mb-6">
            Education
          </h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Academic foundation in computer science with practical focus on software engineering excellence.
          </p>
        </motion.div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <motion.div 
              key={edu.degree}
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="glass group hover:shadow-3xl transition-all rounded-3xl overflow-hidden"
            >
              <div className="p-10 pb-8 relative">
                <div className="flex items-start space-x-6">
                  <div className="relative w-20 h-20 rounded-2xl shadow-2xl group-hover:scale-110 transition-all bg-white flex items-center justify-center">
  
  <img 
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW9CQkY8TnwRrlpsybxikFDWIlKE_vvsxyNg&s" 
    alt="College Logo"
    className="w-full h-full object-contain p-2"
  />

  {/* Small overlay icon */}
  <div className="absolute -bottom-2 -right-2 bg-orange-500 p-2 rounded-xl shadow-lg">
    <GraduationCap className="w-4 h-4 text-white" />
  </div>

</div>
                  
                  <div className="flex-1 min-w-0">
                    <h3 className="text-3xl font-bold mb-3 bg-gradient-to-r from-slate-100 to-slate-300 bg-clip-text text-transparent">
                      {edu.degree}
                    </h3>
                    <div className="flex items-center space-x-6 mb-4 opacity-80">
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-5 h-5" />
                        <span>{edu.institution}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-5 h-5" />
                        <span>{edu.year}</span>
                      </div>
                    </div>
                    <p className="text-lg leading-relaxed opacity-90">
                      {edu.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education

