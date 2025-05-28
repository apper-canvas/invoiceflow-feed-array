import { motion } from 'framer-motion'
import { toast } from 'react-toastify'
import Header from '../components/Header'
import ApperIcon from '../components/ApperIcon'

const Features = () => {
  const handleStartTrial = () => {
    toast.success('Starting your 14-day free trial! Check your email for setup instructions.')
  }

  return (
    <div className="min-h-screen bg-mesh">
      {/* Header */}
      <Header />

      {/* Intro Section */}
      <section className="relative py-12 sm:py-20 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1 
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-surface-900 dark:text-surface-100 mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              Powerful Features for{' '}
              <span className="text-gradient">IT Professionals</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl sm:text-2xl text-surface-600 dark:text-surface-300 mb-12 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              Streamline your billing process, eliminate manual errors, and get paid faster with our comprehensive suite of tools designed specifically for IT service companies. Focus on what you do best while we handle the paperwork.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Invoice Generator Feature Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="neu-card p-8 sm:p-12">
              <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-8 lg:space-y-0 lg:space-x-12">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 bg-gradient-to-br from-primary to-secondary rounded-3xl flex items-center justify-center shadow-lg">
                    <ApperIcon name="FileText" className="w-12 h-12 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 text-center lg:text-left">
                  <h2 className="text-3xl sm:text-4xl font-bold text-surface-900 dark:text-surface-100 mb-4">
                    Professional Invoice Generator
                  </h2>
                  
                  <p className="text-lg text-surface-600 dark:text-surface-300 mb-8 leading-relaxed">
                    Create stunning, professional invoices in minutes with our intelligent invoice generator. Features automatic calculations, customizable templates, instant PDF generation, and seamless client communication. Built specifically for IT service providers who need to bill for complex projects, hourly work, and recurring services.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-accent/20 rounded-lg flex items-center justify-center">
                        <ApperIcon name="Check" className="w-5 h-5 text-accent" />
                      </div>
                      <span className="text-surface-700 dark:text-surface-300">Automatic calculations</span>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-accent/20 rounded-lg flex items-center justify-center">
                        <ApperIcon name="Check" className="w-5 h-5 text-accent" />
                      </div>
                      <span className="text-surface-700 dark:text-surface-300">Professional templates</span>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-accent/20 rounded-lg flex items-center justify-center">
                        <ApperIcon name="Check" className="w-5 h-5 text-accent" />
                      </div>
                      <span className="text-surface-700 dark:text-surface-300">Instant PDF generation</span>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-accent/20 rounded-lg flex items-center justify-center">
                        <ApperIcon name="Check" className="w-5 h-5 text-accent" />
                      </div>
                      <span className="text-surface-700 dark:text-surface-300">Client communication</span>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <motion.button
                    onClick={handleStartTrial}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-primary text-lg px-8 py-4 rounded-xl flex items-center space-x-3 mx-auto lg:mx-0 shadow-lg hover:shadow-xl transition-shadow duration-300"
                  >
                    <ApperIcon name="Zap" className="w-5 h-5" />
                    <span>Try Free for 14 Days</span>
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Additional Features Preview */}
      <section className="py-12 sm:py-16 lg:py-20 bg-surface-50/50 dark:bg-surface-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-surface-900 dark:text-surface-100 mb-4">
              Coming Soon: More Powerful Features
            </h2>
            <p className="text-xl text-surface-600 dark:text-surface-300 max-w-3xl mx-auto">
              We're continuously building features to make your IT business more efficient
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                icon: 'RefreshCw',
                title: 'Recurring Billing',
                description: 'Automate subscription and retainer billing with smart recurring invoice generation.',
                color: 'from-purple-500 to-purple-600',
                status: 'Coming Soon'
              },
              {
                icon: 'BarChart3',
                title: 'Real-Time Reports',
                description: 'Advanced analytics and reporting to track business performance and growth.',
                color: 'from-orange-500 to-orange-600',
                status: 'Coming Soon'
              },
              {
                icon: 'Users',
                title: 'Advanced Client Management',
                description: 'Comprehensive client relationship management with project tracking.',
                color: 'from-green-500 to-green-600',
                status: 'Coming Soon'
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                className="card p-6 relative overflow-hidden group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                    {feature.status}
                  </span>
                </div>
                
                <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <ApperIcon name={feature.icon} className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold text-surface-900 dark:text-surface-100 mb-2">
                  {feature.title}
                </h3>
                
                <p className="text-surface-600 dark:text-surface-300">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-surface-900 dark:bg-surface-950 text-surface-300 py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                  <ApperIcon name="Zap" className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-white">InvoiceFlow</span>
              </div>
              <p className="text-surface-400 mb-4">
                Professional invoicing platform designed specifically for IT services companies.
              </p>
              <div className="flex space-x-4">
                <ApperIcon name="Twitter" className="w-5 h-5 hover:text-primary cursor-pointer transition-colors duration-200" />
                <ApperIcon name="Linkedin" className="w-5 h-5 hover:text-primary cursor-pointer transition-colors duration-200" />
                <ApperIcon name="Github" className="w-5 h-5 hover:text-primary cursor-pointer transition-colors duration-200" />
              </div>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Product</h3>
              <ul className="space-y-2">
                <li><a href="/features" className="hover:text-primary transition-colors duration-200">Features</a></li>
                <li><a href="#" className="hover:text-primary transition-colors duration-200">Pricing</a></li>
                <li><a href="#" className="hover:text-primary transition-colors duration-200">Security</a></li>
                <li><a href="#" className="hover:text-primary transition-colors duration-200">Integrations</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Support</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-primary transition-colors duration-200">Help Center</a></li>
                <li><a href="#" className="hover:text-primary transition-colors duration-200">Contact Us</a></li>
                <li><a href="#" className="hover:text-primary transition-colors duration-200">API Docs</a></li>
                <li><a href="#" className="hover:text-primary transition-colors duration-200">Status</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-surface-800 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
            <p className="text-surface-400">© 2024 InvoiceFlow. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 sm:mt-0">
              <a href="#" className="text-surface-400 hover:text-primary transition-colors duration-200">Privacy</a>
              <a href="#" className="text-surface-400 hover:text-primary transition-colors duration-200">Terms</a>
              <a href="#" className="text-surface-400 hover:text-primary transition-colors duration-200">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Features