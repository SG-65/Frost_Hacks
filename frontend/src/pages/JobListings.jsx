import { useState } from 'react'

function JobListings() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  // Dummy data for demonstration
  const jobs = [
    {
      id: 1,
      title: 'Professional Plumber',
      category: 'Plumbing',
      provider: 'John Doe',
      rating: 4.8,
      price: '₹500/hour',
      location: 'Mumbai',
      experience: '5 years'
    },
    {
      id: 2,
      title: 'Math Tutor',
      category: 'Tutoring',
      provider: 'Sarah Smith',
      rating: 4.9,
      price: '₹400/hour',
      location: 'Delhi',
      experience: '3 years'
    },
    {
      id: 3,
      title: 'Expert Electrician',
      category: 'Electrical',
      provider: 'Mike Johnson',
      rating: 4.7,
      price: '₹600/hour',
      location: 'Bangalore',
      experience: '7 years'
    }
  ]

  const categories = ['all', 'Plumbing', 'Tutoring', 'Electrical', 'Cleaning', 'Baking', 'Painting']

  const filteredJobs = jobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.location.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || job.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Search and Filter Section */}
      <div className="mb-8 space-y-4">
        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="text"
            placeholder="Search by service or location..."
            className="flex-1 p-2 border border-gray-300 rounded-md"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <select
            className="p-2 border border-gray-300 rounded-md"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {categories.map(category => (
              <option key={category} value={category}>
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Job Listings */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredJobs.map(job => (
          <div key={job.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-900">{job.title}</h3>
                <p className="text-gray-600">{job.provider}</p>
              </div>
              <span className="bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded">
                {job.category}
              </span>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center">
                <span className="text-yellow-400">★</span>
                <span className="ml-1 text-gray-600">{job.rating}</span>
              </div>
              <p className="text-gray-600">📍 {job.location}</p>
              <p className="text-gray-600">💼 {job.experience}</p>
              <p className="text-gray-900 font-semibold">{job.price}</p>
            </div>
            
            <button className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors">
              Contact Provider
            </button>
          </div>
        ))}
      </div>

      {filteredJobs.length === 0 && (
        <div className="text-center py-8">
          <p className="text-gray-600">No services found matching your criteria.</p>
        </div>
      )}
    </div>
  )
}

export default JobListings 