import { Link } from 'react-router-dom'

function Home() {
  const services = [
    { title: 'Plumbing', icon: '🔧' },
    { title: 'Tutoring', icon: '📚' },
    { title: 'Baking', icon: '🍪' },
    { title: 'Electrical', icon: '⚡' },
    { title: 'Cleaning', icon: '🧹' },
    { title: 'Painting', icon: '🎨' },
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="py-12 md:py-20">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            Find Skilled Service Providers
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Connect with trusted professionals for all your household needs
          </p>
          <div className="flex justify-center gap-4">
            <Link
              to="/jobs"
              className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700"
            >
              Find Services
            </Link>
            <Link
              to="/jobseeker/dashboard"
              className="bg-white text-blue-600 border border-blue-600 px-6 py-3 rounded-md hover:bg-blue-50"
            >
              Become a Provider
            </Link>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-12">
        <h2 className="text-3xl font-bold text-center mb-12">Popular Services</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center"
            >
              <div className="text-4xl mb-2">{service.icon}</div>
              <h3 className="font-semibold">{service.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home 