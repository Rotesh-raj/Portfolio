import { motion } from 'framer-motion'
import { useState } from 'react'
import { useInView } from 'react-intersection-observer'
import emailjs from 'emailjs-com'
import { Mail, User, MessageCircle, Send } from 'lucide-react'

const Contact = () => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const [status, setStatus] = useState('')

  // ✅ ONLY ONE FUNCTION
  const handleSubmit = (e) => {
    e.preventDefault()

    setStatus('Sending...')

    emailjs.send(
      "service_73qyabe",
      "template_3xd6cos",
      {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
      },
      "aJX5xeFXa7cdBFE3W"
    )
    .then(() => {
      setStatus("Message sent successfully! 🚀")
      setFormData({ name: '', email: '', message: '' })
    })
    .catch((error) => {
      console.error(error)
      setStatus("Failed to send message ❌")
    })
  }

  return (
    <section id="contact" className="py-32 bg-gradient-to-b from-slate-900 to-black">

      <div className="max-w-6xl mx-auto px-6">

        {/* HEADER */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-green-400 mb-4">
            Contact Me
          </h2>

          <p className="text-lg opacity-80">
            Send me a message — I’ll reply on email 📩
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">

          {/* LEFT SIDE */}
          <div className="glass p-10 rounded-3xl space-y-6">

            <h3 className="text-3xl font-bold text-green-400 mb-6">
              Get In Touch
            </h3>

            {/* Email */}
            <div className="flex items-center gap-4 p-5 glass-dark rounded-2xl">
              <Mail className="w-6 h-6 text-green-400" />
              <a href="mailto:roteshraj.dev@gmail.com">
                roteshraj.dev@gmail.com
              </a>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-4 p-5 glass-dark rounded-2xl">
              📞
              <a href="tel:+917856804213">
                +91 7856804213
              </a>
            </div>

            {/* SOCIAL ICONS */}
            <div className="flex justify-center gap-6 pt-6">

              <a href="https://github.com/Rotesh-raj" target="_blank" rel="noopener noreferrer">
                <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" className="w-6 h-6" />
              </a>

              <a href="https://www.linkedin.com/in/rotesh-raj/" target="_blank" rel="noopener noreferrer">
                <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" className="w-6 h-6" />
              </a>

              <a href="https://www.instagram.com/rotesh_raj/" target="_blank" rel="noopener noreferrer">
                <img src="https://cdn-icons-png.flaticon.com/512/174/174855.png" className="w-6 h-6" />
              </a>

            </div>

          </div>

          {/* RIGHT SIDE FORM */}
          <div className="glass p-10 rounded-3xl">

            <form onSubmit={handleSubmit} className="space-y-6">

              {/* Name */}
              <div>
                <label className="flex items-center gap-2 mb-2">
                  <User className="w-5 h-5" />
                  Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full p-4 rounded-xl bg-white/10 outline-none"
                />
              </div>

              {/* Email */}
              <div>
                <label className="flex items-center gap-2 mb-2">
                  <Mail className="w-5 h-5" />
                  Email
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full p-4 rounded-xl bg-white/10 outline-none"
                />
              </div>

              {/* Message */}
              <div>
                <label className="flex items-center gap-2 mb-2">
                  <MessageCircle className="w-5 h-5" />
                  Message
                </label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full p-4 rounded-xl bg-white/10 outline-none"
                />
              </div>

              {/* Submit */}
              <button className="w-full bg-green-500 p-4 rounded-xl flex justify-center items-center gap-2 hover:bg-green-600">
                <Send className="w-5 h-5" />
                Send Message
              </button>

              {/* Status */}
              {status && (
                <p className="text-center text-green-400">{status}</p>
              )}

            </form>

          </div>

        </div>
      </div>
    </section>
  )
}

export default Contact