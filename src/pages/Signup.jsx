import Header from '../components/Header'

const Signup = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-surface-50 to-surface-100 dark:from-surface-900 dark:to-surface-800">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-md mx-auto">
          <div className="bg-white dark:bg-surface-800 rounded-xl p-8 shadow-card">
            <h1 className="text-3xl font-bold text-center text-gradient mb-8">Get Started</h1>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-surface-700 dark:text-surface-300 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="input-field"
                  placeholder="Enter your full name"
                  required
                />
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-surface-700 dark:text-surface-300 mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  className="input-field"
                  placeholder="Enter your company name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-surface-700 dark:text-surface-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="input-field"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-surface-700 dark:text-surface-300 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="input-field"
                  placeholder="Create a password"
                  required
                />
              </div>
              <div>
                <label className="flex items-center">
                  <input type="checkbox" className="rounded border-surface-300 text-primary focus:ring-primary" required />
                  <span className="ml-2 text-sm text-surface-600 dark:text-surface-400">
                    I agree to the{' '}
                    <a href="#" className="text-primary hover:text-primary-dark">
                      Terms of Service
                    </a>{' '}
                    and{' '}
                    <a href="#" className="text-primary hover:text-primary-dark">
                      Privacy Policy
                    </a>
                  </span>
                </label>
              </div>
              <button type="submit" className="btn-primary w-full">
                Start Free Trial
              </button>
            </form>
            <div className="mt-6 text-center">
              <p className="text-sm text-surface-600 dark:text-surface-400">
                Already have an account?{' '}
                <a href="/login" className="text-primary hover:text-primary-dark font-medium">
                  Sign in
                </a>
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Signup