import { motion } from 'framer-motion'
import * as Icons from "lucide-react";
import projectsData from '../data/projects.json'
import { useInView } from 'react-intersection-observer'

// ✅ Safe icons with fallback
const GithubIcon = Icons.Github || Icons.GitBranch;
const ExternalLinkIcon = Icons.ExternalLink || Icons.Link;

const Projects = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  return (
    <section id="projects" className="min-h-screen py-32 bg-gradient-to-b from-slate-900 to-slate-950/50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <h2 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6">
            Featured Projects
          </h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Handcrafted full-stack applications showcasing modern development practices and pixel-perfect UI/UX.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -20, scale: 1.02 }}
              className="glass-dark p-8 rounded-3xl group cursor-pointer shadow-2xl transition-all duration-500 overflow-hidden"
            >
              <div className="relative h-64 rounded-2xl overflow-hidden mb-6 group-hover:scale-110 transition-transform duration-500">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-all duration-500 backdrop-blur-sm" />
               <a 
  href={project.live} 
  target="_blank" 
  rel="noopener noreferrer"
>
  <img 
  src={project.image} 
  alt={project.title}
  className="w-full h-full object-cover object-top rounded-2xl transition-all duration-500 group-hover:scale-105"
/>
</a>
              </div>
              
              <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-400 transition-colors">
                {project.title}
              </h3>

             <p className="text-sm text-gray-300 mb-6 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium">
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="flex space-x-4">
                <a 
                  href={project.live} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex-1 glass p-4 rounded-xl text-center font-semibold hover:bg-blue-500/50 transition-all"
                >
                  <ExternalLinkIcon className="w-5 h-5 inline ml-2" />
                  Live Demo
                </a>

                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="glass-dark p-4 rounded-xl text-center font-semibold hover:bg-slate-700/50 transition-all"
                >
                  <GithubIcon className="w-5 h-5 inline ml-2" />
                  GitHub
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects