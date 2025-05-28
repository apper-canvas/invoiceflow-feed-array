import Header from '../components/Header'

const Login = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-surface-50 to-surface-100 dark:from-surface-900 dark:to-surface-800">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-md mx-auto">
          <div className="bg-white dark:bg-surface-800 rounded-xl p-8 shadow-card">
            <h1 className="text-3xl font-bold text-center text-gradient mb-8">Welcome Back</h1>
            <form className="space-y-6">
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
                  placeholder="Enter your password"
                  required
                />
              </div>
              <div className="flex items-center justify-between">
                <label className="flex items-center">
                  <input type="checkbox" className="rounded border-surface-300 text-primary focus:ring-primary" />
                  <span className="ml-2 text-sm text-surface-600 dark:text-surface-400">Remember me</span>
                </label>
                <a href="#" className="text-sm text-primary hover:text-primary-dark">
                  Forgot password?
                </a>
              </div>
              <button type="submit" className="btn-primary w-full">
                Sign In
              </button>
            </form>
            <div className="mt-6 text-center">
              <p className="text-sm text-surface-600 dark:text-surface-400">
                Don't have an account?{' '}
                <a href="/signup" className="text-primary hover:text-primary-dark font-medium">
                  Sign up
                </a>
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Login