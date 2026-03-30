import { motion } from 'framer-motion'
import * as Icons from "lucide-react"
import { useInView } from 'react-intersection-observer'

// ✅ Safe Icons
const CodeIcon = Icons.Code2 || (() => <span />)
const ZapIcon = Icons.Zap || (() => <span />)
const UsersIcon = Icons.Users || (() => <span />)
const DownloadIcon = Icons.Download || (() => <span />)

const About = () => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  const stats = [
    { value: '1+', label: 'Years Real Project Experience', icon: CodeIcon },
    { value: '10+', label: 'Full Stack Projects Built', icon: ZapIcon },
    { value: '100%', label: 'Learning & Growth Mindset', icon: UsersIcon },
  ]

  return (
    <section id="about" className="py-32 bg-gradient-to-b from-slate-900/50 to-slate-950">
      <div className="max-w-7xl mx-auto px-6">

        {/* 🔥 Heading */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <h2 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6">
            About Me
          </h2>

          <p className="text-xl opacity-90 max-w-3xl mx-auto leading-relaxed">
            Full Stack Developer specializing in building modern, scalable web applications using MERN stack and Java backend technologies.  
            I focus on creating high-performance, user-centric products with clean architecture and production-ready code.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >

            {/* What I Do */}
            <div className="glass-dark p-10 rounded-3xl">
              <h3 className="text-3xl font-bold mb-6 text-emerald-400">
                What I Do
              </h3>

              <p className="text-lg opacity-90 leading-relaxed mb-6">
                I design and develop complete web solutions — from intuitive frontend interfaces to robust backend systems.  
                My focus is on building real-world applications with authentication, subscription systems, dashboards, and scalable APIs.
              </p>

              <p className="text-lg opacity-90 leading-relaxed">
                I have hands-on experience with:
                <br />
                <span className="text-emerald-400">
                  React, Node.js, Express, MongoDB, PostgreSQL, Java, Tailwind CSS, and Three.js
                </span>
                <br />
                building production-ready SaaS architectures.
              </p>

              {/* 🚀 Featured Project */}
              <div className="mt-6 p-6 rounded-2xl bg-black/30 border border-white/10">
                <h4 className="text-xl font-bold mb-2 text-blue-400">
                  🚀 Featured Work
                </h4>
                <p className="opacity-80">
                  Built a Golf Charity Subscription Platform with authentication, subscription system, and protected dashboard using MERN + Stripe integration.
                </p>
              </div>
            </div>

            {/* Career Goals */}
            <div className="glass p-8 rounded-3xl">
              <h4 className="text-2xl font-bold mb-6 opacity-90">
                Career Goals
              </h4>

              <p className="text-lg leading-relaxed opacity-85">
                My goal is to become a top-tier software engineer capable of designing and delivering scalable SaaS products used by thousands of users.  
                I am continuously improving my skills in system design, backend architecture, and modern frontend development.
              </p>
            </div>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -10 }}
                    className="glass p-8 rounded-2xl text-center hover:shadow-2xl transition-all group"
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xl group-hover:scale-110 transition-all">
                      <Icon className="w-8 h-8 text-white" />
                    </div>

                    <div className="text-3xl font-black text-transparent bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text mb-2">
                      {stat.value}
                    </div>

                    <div className="opacity-80 text-sm">{stat.label}</div>
                  </motion.div>
                )
              })}
            </div>

            {/* Resume Button */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="glass-dark p-8 rounded-3xl text-center"
            >
              <a
                href="/Ritesh.pdf"
                download
                className="inline-flex items-center gap-3 bg-gradient-to-r from-emerald-500 to-teal-600 px-8 py-5 rounded-2xl font-bold text-lg hover:from-emerald-600 hover:to-teal-700 shadow-2xl transition-all"
              >
                <DownloadIcon className="w-6 h-6" />
                Download Resume
              </a>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About