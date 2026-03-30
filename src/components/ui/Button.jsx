import { cn } from '../../utils.js'
import { motion } from 'framer-motion'
const buttonVariants = (variant = 'default', size = 'default') => {
  const base = 'glass inline-flex items-center justify-center rounded-2xl font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 disabled:pointer-events-none disabled:opacity-50'
  
  const variants = {
    default: 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 shadow-lg hover:shadow-xl hover:scale-105',
    destructive: 'bg-red-500 hover:bg-red-600 text-white',
    outline: 'border border-white/30 bg-transparent hover:bg-white/10',
    ghost: 'hover:bg-white/10',
  }
  
  const sizes = {
    default: 'h-12 px-6 py-3',
    sm: 'h-10 rounded-xl px-4',
    lg: 'h-14 rounded-3xl px-8',
    icon: 'h-10 w-10',
  }
  
  return `${base} ${variants[variant] || variants.default} ${sizes[size] || sizes.default}`
}

const Button = ({ className, variant = 'default', size = 'default', children, ...props }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={cn(buttonVariants(variant, size), className)}
      {...props}
    >
      {children}
    </motion.button>
  )
}

export { Button }

