import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import MainFeature from '../components/MainFeature'
import Header from '../components/Header'

import ApperIcon from '../components/ApperIcon'

const Home = () => {
  const [activeTab, setActiveTab] = useState('dashboard')
  const [darkMode, setDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    document.documentElement.classList.toggle('dark')
  }

  const tabs = [
    {
      id: 'dashboard',
      label: 'Dashboard',
      icon: 'BarChart3',
      description: 'Overview of your business metrics'
    },
    {
      id: 'clients',
      label: 'Clients',
      icon: 'Users',
      description: 'Manage your client relationships'
    },
    {
      id: 'invoices',
      label: 'Invoices',
      icon: 'FileText',
      description: 'Create and track invoices'
    },
    {
      id: 'payments',
      label: 'Payments',
      icon: 'CreditCard',
      description: 'Monitor payment status'
    }
  ]

  return (
    <div className="min-h-screen bg-mesh">
      {/* Header */}
      <Header />



      {/* Hero Section */}
      <section className="relative py-12 sm:py-20 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h2 
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-surface-900 dark:text-surface-100 mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              Professional Invoicing for{' '}
              <span className="text-gradient">IT Services</span>
            </motion.h2>
            
            <motion.p 
              className="text-xl sm:text-2xl text-surface-600 dark:text-surface-300 mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              Streamline your billing process, manage clients effortlessly, and track payments with our cloud-based platform designed specifically for IT companies.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
            >
              <button className="btn-primary text-lg px-8 py-4 rounded-xl">
                Start 14-Day Free Trial
              </button>
              <button className="flex items-center space-x-2 text-surface-600 dark:text-surface-300 hover:text-primary transition-colors duration-200">
                <ApperIcon name="Play" className="w-5 h-5" />
                <span>Watch Demo</span>
              </button>
            </motion.div>

            {/* Feature Tabs */}
            <motion.div 
              className="max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.8 }}
            >
              <div className="flex flex-wrap justify-center gap-2 mb-8">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                      activeTab === tab.id
                        ? 'bg-primary text-white shadow-lg'
                        : 'bg-white/80 dark:bg-surface-800/80 text-surface-600 dark:text-surface-300 hover:bg-surface-100 dark:hover:bg-surface-700'
                    }`}
                  >
                    <ApperIcon name={tab.icon} className="w-4 h-4" />
                    <span className="hidden sm:inline">{tab.label}</span>
                  </button>
                ))}
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="glass-card p-6 sm:p-8 text-center"
                >
                  <div className="flex items-center justify-center mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center">
                      <ApperIcon 
                        name={tabs.find(tab => tab.id === activeTab)?.icon} 
                        className="w-8 h-8 text-white" 
                      />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-surface-900 dark:text-surface-100 mb-2">
                    {tabs.find(tab => tab.id === activeTab)?.label}
                  </h3>
                  <p className="text-surface-600 dark:text-surface-300">
                    {tabs.find(tab => tab.id === activeTab)?.description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Feature Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MainFeature />
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-12 sm:py-16 lg:py-20 bg-surface-50/50 dark:bg-surface-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-surface-900 dark:text-surface-100 mb-4">
              Everything You Need to Scale
            </h2>
            <p className="text-xl text-surface-600 dark:text-surface-300 max-w-3xl mx-auto">
              From client management to automated billing, we've got your business covered
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                icon: 'Users',
                title: 'Client Management',
                description: 'Organize client information, track project history, and maintain detailed profiles for better relationships.',
                color: 'from-blue-500 to-blue-600'
              },
              {
                icon: 'FileText',
                title: 'Smart Invoicing',
                description: 'Create professional invoices with templates, automatic calculations, and instant PDF generation.',
                color: 'from-green-500 to-green-600'
              },
              {
                icon: 'RefreshCw',
                title: 'Recurring Billing',
                description: 'Set up automated recurring invoices for subscriptions and retainer clients.',
                color: 'from-purple-500 to-purple-600'
              },
              {
                icon: 'TrendingUp',
                title: 'Business Analytics',
                description: 'Track revenue trends, payment patterns, and business performance with detailed reports.',
                color: 'from-orange-500 to-orange-600'
              },
              {
                icon: 'CreditCard',
                title: 'Payment Tracking',
                description: 'Monitor payment status, send automated reminders, and track overdue invoices.',
                color: 'from-red-500 to-red-600'
              },
              {
                icon: 'Shield',
                title: 'Secure & Reliable',
                description: 'Bank-level security with automated backups and 99.9% uptime guarantee.',
                color: 'from-indigo-500 to-indigo-600'
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                className="neu-card p-6 group hover:shadow-2xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
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

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="glass-card p-8 sm:p-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-surface-900 dark:text-surface-100 mb-4">
              Ready to Transform Your Billing?
            </h2>
            <p className="text-xl text-surface-600 dark:text-surface-300 mb-8">
              Join thousands of IT companies who trust InvoiceFlow for their invoicing needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary text-lg px-8 py-4 rounded-xl">
                Start Free Trial
              </button>
              <button className="btn-secondary text-lg px-8 py-4 rounded-xl">
                Schedule Demo
              </button>
            </div>
          </motion.div>
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
                <li><a href="#" className="hover:text-primary transition-colors duration-200">Features</a></li>
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

export default Home