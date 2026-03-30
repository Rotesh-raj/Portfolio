import { motion } from 'framer-motion'
import * as Icons from "lucide-react"
import { useInView } from 'react-intersection-observer'

// ✅ Safe Icons
const TargetIcon = Icons.Target || (() => <span />)
const RocketIcon = Icons.Rocket || (() => <span />)
const StarIcon = Icons.Star || (() => <span />)

const Goals = () => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  const goals = [
    {
      title: 'Become a Strong Full Stack Engineer',
      description:
        'Deeply master MERN stack and Java backend to build scalable, production-ready applications with clean architecture and high performance.',
      icon: TargetIcon,
    },
    {
      title: 'Build Real SaaS Products',
      description:
        'Design and launch real-world SaaS platforms with authentication, subscriptions, dashboards, and scalable APIs.',
      icon: RocketIcon,
    },
    {
      title: 'Master System Design & Backend Architecture',
      description:
        'Develop strong expertise in system design, database optimization, and backend scalability for high-traffic applications.',
      icon: StarIcon,
    },
  ]

  return (
    <section id="goals" className="py-32 bg-gradient-to-t from-slate-950 to-slate-900/50">
      <div className="max-w-5xl mx-auto px-6">

        {/* 🔥 Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <h2 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-rose-400 via-pink-500 to-orange-500 bg-clip-text text-transparent mb-6">
            Career Vision
          </h2>

          <p className="text-xl opacity-90 max-w-3xl mx-auto leading-relaxed">
            Focused on becoming a high-impact software engineer by building scalable systems, real-world SaaS products, and continuously improving technical depth.
          </p>
        </motion.div>

        {/* 🔥 Timeline Style Layout */}
        <div className="relative space-y-12">

          {/* Vertical Line */}
          <div className="absolute left-6 top-0 bottom-0 w-[2px] bg-gradient-to-b from-rose-500 to-transparent opacity-30" />

          {goals.map((goal, index) => {
            const Icon = goal.icon

            return (
              <motion.div
                key={goal.title}
                initial={{ opacity: 0, x: -50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative pl-16 group"
              >

                {/* 🔥 Icon Node */}
                <div className="absolute left-0 top-2 w-12 h-12 rounded-xl bg-gradient-to-br from-rose-500 to-pink-500 flex items-center justify-center shadow-xl group-hover:scale-110 transition">
                  <Icon className="w-6 h-6 text-white" />
                </div>

                {/* 🔥 Card */}
                <div className="glass-dark p-8 rounded-2xl border border-white/10 hover:border-rose-500/30 hover:bg-gradient-to-br hover:from-rose-500/5 transition-all">

                  <h3 className="text-2xl font-bold mb-3 group-hover:text-rose-400 transition">
                    {goal.title}
                  </h3>

                  <p className="opacity-85 leading-relaxed">
                    {goal.description}
                  </p>

                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Goals