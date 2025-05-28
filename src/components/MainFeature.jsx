import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { toast } from 'react-toastify'
import ApperIcon from './ApperIcon'
import { format, addDays } from 'date-fns'

const MainFeature = () => {
  const [activeFeature, setActiveFeature] = useState('invoice-creator')
  const [isCreating, setIsCreating] = useState(false)
  
  // Invoice Creator State
  const [invoice, setInvoice] = useState({
    client: '',
    invoiceNumber: `INV-${Date.now().toString().slice(-6)}`,
    issueDate: format(new Date(), 'yyyy-MM-dd'),
    dueDate: format(addDays(new Date(), 30), 'yyyy-MM-dd'),
    items: [{ description: '', quantity: 1, rate: 0, amount: 0 }],
    notes: '',
    subtotal: 0,
    tax: 0,
    total: 0
  })

  // Client Manager State
  const [clients, setClients] = useState([
    {
      id: 1,
      companyName: 'TechCorp Solutions',
      contactName: 'John Smith',
      email: 'john@techcorp.com',
      phone: '+1 (555) 123-4567',
      status: 'Active',
      totalInvoices: 12,
      totalRevenue: 24500
    },
    {
      id: 2,
      companyName: 'Digital Innovations',
      contactName: 'Sarah Johnson',
      email: 'sarah@digital-inn.com',
      phone: '+1 (555) 987-6543',
      status: 'Active',
      totalInvoices: 8,
      totalRevenue: 15800
    }
  ])

  const [newClient, setNewClient] = useState({
    companyName: '',
    contactName: '',
    email: '',
    phone: ''
  })

  // Dashboard State
  const [dashboardData] = useState({
    totalClients: 24,
    activeInvoices: 18,
    pendingPayments: 12,
    monthlyRevenue: 45680,
    recentActivity: [
      { id: 1, type: 'payment', description: 'Payment received from TechCorp Solutions', amount: 2500, time: '2 hours ago' },
      { id: 2, type: 'invoice', description: 'Invoice sent to Digital Innovations', amount: 1800, time: '4 hours ago' },
      { id: 3, type: 'client', description: 'New client added: StartupXYZ', amount: null, time: '1 day ago' }
    ]
  })

  const features = [
    {
      id: 'invoice-creator',
      title: 'Smart Invoice Creator',
      description: 'Create professional invoices with automatic calculations and PDF generation',
      icon: 'FileText',
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: 'client-manager',
      title: 'Client Management',
      description: 'Organize and track your client relationships with detailed profiles',
      icon: 'Users',
      color: 'from-green-500 to-green-600'
    },
    {
      id: 'dashboard',
      title: 'Business Dashboard',
      description: 'Monitor your business performance with real-time analytics and insights',
      icon: 'BarChart3',
      color: 'from-purple-500 to-purple-600'
    }
  ]

  const calculateItemAmount = (quantity, rate) => {
    return quantity * rate
  }

  const calculateTotals = (items) => {
    const subtotal = items.reduce((sum, item) => sum + item.amount, 0)
    const tax = subtotal * 0.1 // 10% tax
    const total = subtotal + tax
    return { subtotal, tax, total }
  }

  const updateInvoiceItem = (index, field, value) => {
    const updatedItems = [...invoice.items]
    updatedItems[index][field] = value
    
    if (field === 'quantity' || field === 'rate') {
      updatedItems[index].amount = calculateItemAmount(
        updatedItems[index].quantity,
        updatedItems[index].rate
      )
    }
    
    const totals = calculateTotals(updatedItems)
    setInvoice(prev => ({
      ...prev,
      items: updatedItems,
      ...totals
    }))
  }

  const addInvoiceItem = () => {
    setInvoice(prev => ({
      ...prev,
      items: [...prev.items, { description: '', quantity: 1, rate: 0, amount: 0 }]
    }))
  }

  const removeInvoiceItem = (index) => {
    if (invoice.items.length > 1) {
      const updatedItems = invoice.items.filter((_, i) => i !== index)
      const totals = calculateTotals(updatedItems)
      setInvoice(prev => ({
        ...prev,
        items: updatedItems,
        ...totals
      }))
    }
  }

  const generateInvoice = async () => {
    setIsCreating(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    toast.success('Invoice generated successfully! PDF ready for download.')
    setIsCreating(false)
    
    // Reset form
    setInvoice({
      client: '',
      invoiceNumber: `INV-${Date.now().toString().slice(-6)}`,
      issueDate: format(new Date(), 'yyyy-MM-dd'),
      dueDate: format(addDays(new Date(), 30), 'yyyy-MM-dd'),
      items: [{ description: '', quantity: 1, rate: 0, amount: 0 }],
      notes: '',
      subtotal: 0,
      tax: 0,
      total: 0
    })
  }

  const addClient = () => {
    if (!newClient.companyName || !newClient.contactName || !newClient.email) {
      toast.error('Please fill in all required fields')
      return
    }

    const client = {
      id: clients.length + 1,
      ...newClient,
      status: 'Active',
      totalInvoices: 0,
      totalRevenue: 0
    }

    setClients(prev => [client, ...prev])
    setNewClient({ companyName: '', contactName: '', email: '', phone: '' })
    toast.success('Client added successfully!')
  }

  const deleteClient = (id) => {
    setClients(prev => prev.filter(client => client.id !== id))
    toast.success('Client removed successfully!')
  }

  const renderInvoiceCreator = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="space-y-6"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Invoice Details */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-surface-900 dark:text-surface-100">Invoice Details</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-surface-700 dark:text-surface-300 mb-2">
                Client
              </label>
              <select
                value={invoice.client}
                onChange={(e) => setInvoice(prev => ({ ...prev, client: e.target.value }))}
                className="input-field"
              >
                <option value="">Select a client</option>
                {clients.map(client => (
                  <option key={client.id} value={client.companyName}>
                    {client.companyName}
                  </option>
                ))}
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-surface-700 dark:text-surface-300 mb-2">
                Invoice Number
              </label>
              <input
                type="text"
                value={invoice.invoiceNumber}
                onChange={(e) => setInvoice(prev => ({ ...prev, invoiceNumber: e.target.value }))}
                className="input-field"
                readOnly
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-surface-700 dark:text-surface-300 mb-2">
                Issue Date
              </label>
              <input
                type="date"
                value={invoice.issueDate}
                onChange={(e) => setInvoice(prev => ({ ...prev, issueDate: e.target.value }))}
                className="input-field"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-surface-700 dark:text-surface-300 mb-2">
                Due Date
              </label>
              <input
                type="date"
                value={invoice.dueDate}
                onChange={(e) => setInvoice(prev => ({ ...prev, dueDate: e.target.value }))}
                className="input-field"
              />
            </div>
          </div>
        </div>

        {/* Invoice Summary */}
        <div className="neu-card p-6">
          <h3 className="text-lg font-semibold text-surface-900 dark:text-surface-100 mb-4">Invoice Summary</h3>
          
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-surface-600 dark:text-surface-300">Subtotal:</span>
              <span className="font-medium">${invoice.subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-surface-600 dark:text-surface-300">Tax (10%):</span>
              <span className="font-medium">${invoice.tax.toFixed(2)}</span>
            </div>
            <div className="border-t border-surface-200 dark:border-surface-700 pt-3">
              <div className="flex justify-between text-lg font-bold">
                <span>Total:</span>
                <span className="text-primary">${invoice.total.toFixed(2)}</span>
              </div>
            </div>
          </div>
          
          <button
            onClick={generateInvoice}
            disabled={!invoice.client || invoice.items.some(item => !item.description) || isCreating}
            className="w-full mt-6 btn-primary disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
          >
            {isCreating ? (
              <>
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>Generating...</span>
              </>
            ) : (
              <>
                <ApperIcon name="Download" className="w-4 h-4" />
                <span>Generate Invoice</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Invoice Items */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-surface-900 dark:text-surface-100">Invoice Items</h3>
          <button
            onClick={addInvoiceItem}
            className="btn-secondary flex items-center space-x-2"
          >
            <ApperIcon name="Plus" className="w-4 h-4" />
            <span>Add Item</span>
          </button>
        </div>
        
        <div className="space-y-4">
          {invoice.items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="card p-4"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 items-end">
                <div className="sm:col-span-2 lg:col-span-2">
                  <label className="block text-sm font-medium text-surface-700 dark:text-surface-300 mb-2">
                    Description
                  </label>
                  <input
                    type="text"
                    value={item.description}
                    onChange={(e) => updateInvoiceItem(index, 'description', e.target.value)}
                    placeholder="Service description..."
                    className="input-field"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-surface-700 dark:text-surface-300 mb-2">
                    Quantity
                  </label>
                  <input
                    type="number"
                    value={item.quantity}
                    onChange={(e) => updateInvoiceItem(index, 'quantity', parseFloat(e.target.value) || 0)}
                    min="1"
                    className="input-field"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-surface-700 dark:text-surface-300 mb-2">
                    Rate ($)
                  </label>
                  <input
                    type="number"
                    value={item.rate}
                    onChange={(e) => updateInvoiceItem(index, 'rate', parseFloat(e.target.value) || 0)}
                    min="0"
                    step="0.01"
                    className="input-field"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-surface-700 dark:text-surface-300 mb-2">
                    Amount
                  </label>
                  <div className="input-field bg-surface-50 dark:bg-surface-700 text-surface-600 dark:text-surface-300">
                    ${item.amount.toFixed(2)}
                  </div>
                </div>
                
                <div>
                  <button
                    onClick={() => removeInvoiceItem(index)}
                    disabled={invoice.items.length === 1}
                    className="w-full p-3 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <ApperIcon name="Trash2" className="w-4 h-4 mx-auto" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Notes */}
      <div>
        <label className="block text-sm font-medium text-surface-700 dark:text-surface-300 mb-2">
          Notes (Optional)
        </label>
        <textarea
          value={invoice.notes}
          onChange={(e) => setInvoice(prev => ({ ...prev, notes: e.target.value }))}
          placeholder="Additional notes or payment terms..."
          rows={3}
          className="input-field resize-none"
        />
      </div>
    </motion.div>
  )

  const renderClientManager = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="space-y-6"
    >
      {/* Add New Client */}
      <div className="neu-card p-6">
        <h3 className="text-lg font-semibold text-surface-900 dark:text-surface-100 mb-4">Add New Client</h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <input
            type="text"
            value={newClient.companyName}
            onChange={(e) => setNewClient(prev => ({ ...prev, companyName: e.target.value }))}
            placeholder="Company Name *"
            className="input-field"
          />
          <input
            type="text"
            value={newClient.contactName}
            onChange={(e) => setNewClient(prev => ({ ...prev, contactName: e.target.value }))}
            placeholder="Contact Name *"
            className="input-field"
          />
          <input
            type="email"
            value={newClient.email}
            onChange={(e) => setNewClient(prev => ({ ...prev, email: e.target.value }))}
            placeholder="Email Address *"
            className="input-field"
          />
          <div className="flex space-x-2">
            <input
              type="tel"
              value={newClient.phone}
              onChange={(e) => setNewClient(prev => ({ ...prev, phone: e.target.value }))}
              placeholder="Phone Number"
              className="input-field flex-1"
            />
            <button
              onClick={addClient}
              className="btn-primary px-4"
            >
              <ApperIcon name="Plus" className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Clients List */}
      <div>
        <h3 className="text-lg font-semibold text-surface-900 dark:text-surface-100 mb-4">
          Client Directory ({clients.length})
        </h3>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {clients.map((client) => (
            <motion.div
              key={client.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="card p-6 hover:shadow-lg transition-shadow duration-200"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
                    <ApperIcon name="Building2" className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-surface-900 dark:text-surface-100">
                      {client.companyName}
                    </h4>
                    <p className="text-sm text-surface-600 dark:text-surface-300">
                      {client.contactName}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2">
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    client.status === 'Active' 
                      ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                      : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                  }`}>
                    {client.status}
                  </span>
                  <button
                    onClick={() => deleteClient(client.id)}
                    className="p-1 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded"
                  >
                    <ApperIcon name="Trash2" className="w-4 h-4" />
                  </button>
                </div>
              </div>
              
              <div className="space-y-2 mb-4">
                <div className="flex items-center space-x-2 text-sm text-surface-600 dark:text-surface-300">
                  <ApperIcon name="Mail" className="w-4 h-4" />
                  <span>{client.email}</span>
                </div>
                {client.phone && (
                  <div className="flex items-center space-x-2 text-sm text-surface-600 dark:text-surface-300">
                    <ApperIcon name="Phone" className="w-4 h-4" />
                    <span>{client.phone}</span>
                  </div>
                )}
              </div>
              
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-surface-200 dark:border-surface-700">
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary">{client.totalInvoices}</p>
                  <p className="text-xs text-surface-600 dark:text-surface-300">Invoices</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-accent">${client.totalRevenue.toLocaleString()}</p>
                  <p className="text-xs text-surface-600 dark:text-surface-300">Revenue</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )

  const renderDashboard = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="space-y-6"
    >
      {/* Key Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          {
            label: 'Total Clients',
            value: dashboardData.totalClients,
            icon: 'Users',
            color: 'from-blue-500 to-blue-600',
            change: '+12%'
          },
          {
            label: 'Active Invoices',
            value: dashboardData.activeInvoices,
            icon: 'FileText',
            color: 'from-green-500 to-green-600',
            change: '+8%'
          },
          {
            label: 'Pending Payments',
            value: dashboardData.pendingPayments,
            icon: 'Clock',
            color: 'from-orange-500 to-orange-600',
            change: '-5%'
          },
          {
            label: 'Monthly Revenue',
            value: `$${dashboardData.monthlyRevenue.toLocaleString()}`,
            icon: 'DollarSign',
            color: 'from-purple-500 to-purple-600',
            change: '+23%'
          }
        ].map((metric, index) => (
          <motion.div
            key={metric.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="neu-card p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`w-12 h-12 bg-gradient-to-r ${metric.color} rounded-xl flex items-center justify-center`}>
                <ApperIcon name={metric.icon} className="w-6 h-6 text-white" />
              </div>
              <span className={`text-sm font-medium ${
                metric.change.startsWith('+') 
                  ? 'text-green-600 dark:text-green-400' 
                  : 'text-red-600 dark:text-red-400'
              }`}>
                {metric.change}
              </span>
            </div>
            <h3 className="text-2xl font-bold text-surface-900 dark:text-surface-100 mb-1">
              {metric.value}
            </h3>
            <p className="text-sm text-surface-600 dark:text-surface-300">
              {metric.label}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Charts and Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Revenue Chart Placeholder */}
        <div className="card p-6">
          <h3 className="text-lg font-semibold text-surface-900 dark:text-surface-100 mb-4">
            Revenue Trend (Last 6 Months)
          </h3>
          <div className="h-64 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <ApperIcon name="TrendingUp" className="w-12 h-12 text-primary mx-auto mb-2" />
              <p className="text-surface-600 dark:text-surface-300">Chart visualization would go here</p>
              <p className="text-sm text-surface-500">Revenue trending upward by 23%</p>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="card p-6">
          <h3 className="text-lg font-semibold text-surface-900 dark:text-surface-100 mb-4">
            Recent Activity
          </h3>
          <div className="space-y-4">
            {dashboardData.recentActivity.map((activity) => (
              <div key={activity.id} className="flex items-center space-x-3 p-3 bg-surface-50 dark:bg-surface-700 rounded-lg">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  activity.type === 'payment' 
                    ? 'bg-green-100 dark:bg-green-900/30'
                    : activity.type === 'invoice'
                    ? 'bg-blue-100 dark:bg-blue-900/30'
                    : 'bg-purple-100 dark:bg-purple-900/30'
                }`}>
                  <ApperIcon 
                    name={
                      activity.type === 'payment' ? 'DollarSign' :
                      activity.type === 'invoice' ? 'FileText' : 'UserPlus'
                    } 
                    className={`w-4 h-4 ${
                      activity.type === 'payment' 
                        ? 'text-green-600 dark:text-green-400'
                        : activity.type === 'invoice'
                        ? 'text-blue-600 dark:text-blue-400'
                        : 'text-purple-600 dark:text-purple-400'
                    }`}
                  />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-surface-900 dark:text-surface-100">
                    {activity.description}
                  </p>
                  <p className="text-xs text-surface-500">{activity.time}</p>
                </div>
                {activity.amount && (
                  <span className="font-semibold text-primary">
                    ${activity.amount.toLocaleString()}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {[
          {
            title: 'Create Invoice',
            description: 'Generate a new invoice for a client',
            icon: 'Plus',
            action: () => setActiveFeature('invoice-creator')
          },
          {
            title: 'Add Client',
            description: 'Register a new client in your system',
            icon: 'UserPlus',
            action: () => setActiveFeature('client-manager')
          },
          {
            title: 'View Reports',
            description: 'Access detailed business analytics',
            icon: 'BarChart3',
            action: () => toast.info('Reports feature coming soon!')
          }
        ].map((action) => (
          <motion.button
            key={action.title}
            onClick={action.action}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="card p-6 text-left hover:shadow-lg transition-all duration-200 group"
          >
            <div className="flex items-center space-x-3 mb-3">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                <ApperIcon name={action.icon} className="w-5 h-5 text-white" />
              </div>
              <h4 className="font-semibold text-surface-900 dark:text-surface-100">
                {action.title}
              </h4>
            </div>
            <p className="text-sm text-surface-600 dark:text-surface-300">
              {action.description}
            </p>
          </motion.button>
        ))}
      </div>
    </motion.div>
  )

  return (
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-8"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-surface-900 dark:text-surface-100 mb-4">
          Experience the Power of <span className="text-gradient">InvoiceFlow</span>
        </h2>
        <p className="text-xl text-surface-600 dark:text-surface-300 mb-8">
          Interactive demo of our core features
        </p>

        {/* Feature Selector */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {features.map((feature) => (
            <button
              key={feature.id}
              onClick={() => setActiveFeature(feature.id)}
              className={`flex items-center space-x-2 px-4 py-3 rounded-xl transition-all duration-200 ${
                activeFeature === feature.id
                  ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg scale-105'
                  : 'bg-white/80 dark:bg-surface-800/80 text-surface-600 dark:text-surface-300 hover:bg-surface-100 dark:hover:bg-surface-700'
              }`}
            >
              <ApperIcon name={feature.icon} className="w-5 h-5" />
              <span className="font-medium">{feature.title}</span>
            </button>
          ))}
        </div>
      </motion.div>

      {/* Feature Content */}
      <div className="neu-card p-6 sm:p-8">
        <AnimatePresence mode="wait">
          {activeFeature === 'invoice-creator' && renderInvoiceCreator()}
          {activeFeature === 'client-manager' && renderClientManager()}
          {activeFeature === 'dashboard' && renderDashboard()}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default MainFeature