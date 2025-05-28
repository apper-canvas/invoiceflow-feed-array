import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import ApperIcon from '../components/ApperIcon'

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-24 h-24 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-8"
        >
          <ApperIcon name="AlertTriangle" className="w-12 h-12 text-white" />
        </motion.div>
        
        <h1 className="text-6xl sm:text-8xl font-bold text-gradient mb-4">404</h1>
        <h2 className="text-2xl sm:text-3xl font-semibold text-surface-900 dark:text-surface-100 mb-4">
          Page Not Found
        </h2>
        <p className="text-lg text-surface-600 dark:text-surface-300 mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>
        
        <Link
          to="/"
          className="btn-primary inline-flex items-center space-x-2 text-lg px-8 py-4 rounded-xl"
        >
          <ApperIcon name="ArrowLeft" className="w-5 h-5" />
          <span>Back to Home</span>
        </Link>
      </motion.div>
    </div>
  )
}

export default NotFound