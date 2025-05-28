import Header from '../components/Header'

const Pricing = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-surface-50 to-surface-100 dark:from-surface-900 dark:to-surface-800">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gradient mb-4">Pricing Plans</h1>
          <p className="text-lg text-surface-600 dark:text-surface-300 mb-8">
            Choose the perfect plan for your IT service business
          </p>
          <div className="bg-white dark:bg-surface-800 rounded-xl p-8 shadow-card">
            <h2 className="text-2xl font-semibold mb-4">Coming Soon</h2>
            <p className="text-surface-600 dark:text-surface-300">
              Our pricing plans are being finalized. Check back soon for competitive rates.
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Pricing