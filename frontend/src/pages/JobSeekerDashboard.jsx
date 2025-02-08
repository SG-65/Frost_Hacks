import { useState } from 'react'
import { Link } from 'react-router-dom'

function JobSeekerDashboard() {
  const [activeTab, setActiveTab] = useState('applications')

  // Dummy data - would come from backend in real application
  const dashboardData = {
    profile: {
      name: 'John Doe',
      title: 'Professional Plumber',
      rating: 4.8,
      totalJobs: 45,
      earnings: '₹52,000',
      availability: 'Available'
    },
    applications: [
      {
        id: 1,
        jobTitle: 'Bathroom Renovation',
        employer: 'Rahul Sharma',
        status: 'Under Review',
        date: '2024-03-01',
        location: 'Mumbai',
        budget: '₹5000'
      },
      {
        id: 2,
        jobTitle: 'Kitchen Sink Installation',
        employer: 'Priya Patel',
        status: 'Accepted',
        date: '2024-03-05',
        location: 'Mumbai',
        budget: '₹2500'
      }
    ],
    completedJobs: [
      {
        id: 3,
        jobTitle: 'Pipe Repair',
        employer: 'Amit Kumar',
        date: '2024-02-20',
        location: 'Mumbai',
        payment: '₹1500',
        rating: 5,
        review: 'Excellent work, very professional and punctual.'
      }
    ]
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Profile Overview */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">{dashboardData.profile.name}</h1>
            <p className="text-gray-600">{dashboardData.profile.title}</p>
            <div className="flex items-center mt-2">
              <span className="text-yellow-400">★</span>
              <span className="ml-1 text-gray-600">{dashboardData.profile.rating}</span>
              <span className="mx-2">•</span>
              <span className="text-gray-600">{dashboardData.profile.totalJobs} jobs completed</span>
            </div>
          </div>
          <div className="text-right">
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${
              dashboardData.profile.availability === 'Available' 
                ? 'bg-green-100 text-green-800'
                : 'bg-red-100 text-red-800'
            }`}>
              {dashboardData.profile.availability}
            </span>
            <p className="mt-2 text-gray-600">Total Earnings: {dashboardData.profile.earnings}</p>
          </div>
        </div>
        <div className="mt-4 flex justify-end">
          <Link to="/profile/edit" className="text-blue-600 hover:text-blue-800">
            Edit Profile
          </Link>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200 mb-6">
        <nav className="-mb-px flex space-x-8">
          <button
            className={`${
              activeTab === 'applications'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            } whitespace-nowrap py-4 px-1 border-b-2 font-medium`}
            onClick={() => setActiveTab('applications')}
          >
            Applications
          </button>
          <button
            className={`${
              activeTab === 'completed'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            } whitespace-nowrap py-4 px-1 border-b-2 font-medium`}
            onClick={() => setActiveTab('completed')}
          >
            Completed Jobs
          </button>
        </nav>
      </div>

      {/* Content */}
      <div className="space-y-6">
        {activeTab === 'applications' ? (
          dashboardData.applications.map((application) => (
            <div key={application.id} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-xl font-semibold text-gray-900">{application.jobTitle}</h2>
                  <div className="mt-2 space-y-2">
                    <p className="text-gray-600">👤 Employer: {application.employer}</p>
                    <p className="text-gray-600">📍 {application.location}</p>
                    <p className="text-gray-600">💰 Budget: {application.budget}</p>
                    <p className="text-gray-600">📅 Applied: {application.date}</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className={`px-2.5 py-0.5 rounded text-sm font-medium ${
                    application.status === 'Accepted'
                      ? 'bg-green-100 text-green-800'
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {application.status}
                  </span>
                </div>
              </div>
            </div>
          ))
        ) : (
          dashboardData.completedJobs.map((job) => (
            <div key={job.id} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-xl font-semibold text-gray-900">{job.jobTitle}</h2>
                  <div className="mt-2 space-y-2">
                    <p className="text-gray-600">👤 Employer: {job.employer}</p>
                    <p className="text-gray-600">📍 {job.location}</p>
                    <p className="text-gray-600">💰 Payment: {job.payment}</p>
                    <div className="flex items-center">
                      <span className="text-yellow-400">{'★'.repeat(job.rating)}</span>
                      <span className="text-gray-400">{'★'.repeat(5-job.rating)}</span>
                    </div>
                    <p className="text-gray-600 italic">"{job.review}"</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="bg-green-100 text-green-800 text-sm font-medium px-2.5 py-0.5 rounded">
                    Completed
                  </span>
                  <p className="mt-2 text-sm text-gray-500">Completed on {job.date}</p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default JobSeekerDashboard 