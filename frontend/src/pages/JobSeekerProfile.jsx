import { useState } from 'react'
import { useParams } from 'react-router-dom'

function JobSeekerProfile() {
  const { id } = useParams()
  
  // Dummy data - this would come from your backend in a real application
  const profile = {
    name: 'John Doe',
    title: 'Professional Plumber',
    rating: 4.8,
    totalReviews: 127,
    location: 'Mumbai, Maharashtra',
    experience: '5 years',
    hourlyRate: '₹500/hour',
    about: 'Experienced plumber specializing in residential and commercial plumbing services. Available for emergency repairs and maintenance work.',
    skills: ['Pipe Repair', 'Drain Cleaning', 'Water Heater Installation', 'Bathroom Fixtures', 'Emergency Repairs'],
    availability: 'Monday to Saturday, 8 AM - 6 PM',
    languages: ['English', 'Hindi', 'Marathi'],
    reviews: [
      {
        id: 1,
        user: 'Priya Singh',
        rating: 5,
        date: '2024-02-15',
        comment: 'Excellent service! Fixed our leaking pipe quickly and professionally.'
      },
      {
        id: 2,
        user: 'Rahul Kumar',
        rating: 4,
        date: '2024-02-10',
        comment: 'Very knowledgeable and punctual. Would recommend.'
      }
    ]
  }

  const [showContact, setShowContact] = useState(false)

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Profile Header */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{profile.name}</h1>
            <p className="text-xl text-gray-600">{profile.title}</p>
            <div className="flex items-center mt-2">
              <span className="text-yellow-400 text-xl">★</span>
              <span className="ml-1 text-gray-600">{profile.rating}</span>
              <span className="ml-2 text-gray-500">({profile.totalReviews} reviews)</span>
            </div>
          </div>
          <button
            onClick={() => setShowContact(true)}
            className="mt-4 md:mt-0 bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700"
          >
            Contact Provider
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Main Info */}
        <div className="md:col-span-2 space-y-6">
          {/* About Section */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">About</h2>
            <p className="text-gray-600">{profile.about}</p>
          </div>

          {/* Skills Section */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Skills</h2>
            <div className="flex flex-wrap gap-2">
              {profile.skills.map((skill, index) => (
                <span
                  key={index}
                  className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Reviews Section */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Reviews</h2>
            <div className="space-y-4">
              {profile.reviews.map((review) => (
                <div key={review.id} className="border-b pb-4 last:border-b-0">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-semibold">{review.user}</p>
                      <div className="flex items-center">
                        <span className="text-yellow-400">{'★'.repeat(review.rating)}</span>
                        <span className="text-gray-400">{'★'.repeat(5-review.rating)}</span>
                      </div>
                    </div>
                    <span className="text-gray-500 text-sm">{review.date}</span>
                  </div>
                  <p className="mt-2 text-gray-600">{review.comment}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar Info */}
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Details</h2>
            <div className="space-y-3">
              <div>
                <p className="text-gray-500">Location</p>
                <p className="font-medium">📍 {profile.location}</p>
              </div>
              <div>
                <p className="text-gray-500">Experience</p>
                <p className="font-medium">💼 {profile.experience}</p>
              </div>
              <div>
                <p className="text-gray-500">Rate</p>
                <p className="font-medium">💰 {profile.hourlyRate}</p>
              </div>
              <div>
                <p className="text-gray-500">Availability</p>
                <p className="font-medium">📅 {profile.availability}</p>
              </div>
              <div>
                <p className="text-gray-500">Languages</p>
                <p className="font-medium">🗣 {profile.languages.join(', ')}</p>
              </div>
            </div>
          </div>

          {showContact && (
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
              <div className="space-y-3">
                <p>📱 +91 98765 43210</p>
                <p>📧 john.doe@example.com</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default JobSeekerProfile 