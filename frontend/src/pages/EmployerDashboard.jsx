import { useState } from 'react'
import { Link } from 'react-router-dom'

function EmployerDashboard() {
  const [activeTab, setActiveTab] = useState('active')

  // Dummy data - would come from backend in real application
  const serviceRequests = {
    active: [
      {
        id: 1,
        title: 'Need Plumber for Bathroom Renovation',
        category: 'Plumbing',
        status: 'In Progress',
        date: '2024-03-01',
        location: 'Mumbai',
        budget: '₹5000',
        applications: 4
      },
      {
        id: 2,
        title: 'Home Tutor for Mathematics',
        category: 'Tutoring',
        status: 'Posted',
        date: '2024-03-05',
        location: 'Mumbai',
        budget: '₹800/hour',
        applications: 2
      }
    ],
    completed: [
      {
        id: 3,
        title: 'Kitchen Sink Repair',
        category: 'Plumbing',
        status: 'Completed',
        date: '2024-02-20',
        location: 'Mumbai',
        budget: '₹2000',
        provider: 'John Doe',
        rating: 5
      }
    ]
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Dashboard Header */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Employer Dashboard</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
          Post New Request
        </button>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-600">Active Requests</h3>
          <p className="text-3xl font-bold text-blue-600 mt-2">{serviceRequests.active.length}</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-600">Total Applications</h3>
          <p className="text-3xl font-bold text-blue-600 mt-2">
            {serviceRequests.active.reduce((sum, req) => sum + req.applications, 0)}
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-600">Completed Services</h3>
          <p className="text-3xl font-bold text-blue-600 mt-2">{serviceRequests.completed.length}</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200 mb-6">
        <nav className="-mb-px flex space-x-8">
          <button
            className={`${
              activeTab === 'active'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            } whitespace-nowrap py-4 px-1 border-b-2 font-medium`}
            onClick={() => setActiveTab('active')}
          >
            Active Requests
          </button>
          <button
            className={`${
              activeTab === 'completed'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            } whitespace-nowrap py-4 px-1 border-b-2 font-medium`}
            onClick={() => setActiveTab('completed')}
          >
            Completed
          </button>
        </nav>
      </div>

      {/* Service Requests List */}
      <div className="space-y-6">
        {activeTab === 'active' ? (
          serviceRequests.active.map((request) => (
            <div key={request.id} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-xl font-semibold text-gray-900">{request.title}</h2>
                  <div className="mt-2 space-y-2">
                    <p className="text-gray-600">📍 {request.location}</p>
                    <p className="text-gray-600">💰 Budget: {request.budget}</p>
                    <p className="text-gray-600">📅 Posted: {request.date}</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded">
                    {request.category}
                  </span>
                  <p className="mt-2 text-sm text-gray-500">{request.applications} applications</p>
                </div>
              </div>
              <div className="mt-4 flex justify-end space-x-4">
                <button className="text-blue-600 hover:text-blue-800">
                  View Applications
                </button>
                <button className="text-red-600 hover:text-red-800">
                  Close Request
                </button>
              </div>
            </div>
          ))
        ) : (
          serviceRequests.completed.map((request) => (
            <div key={request.id} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-xl font-semibold text-gray-900">{request.title}</h2>
                  <div className="mt-2 space-y-2">
                    <p className="text-gray-600">👤 Provider: {request.provider}</p>
                    <p className="text-gray-600">📍 {request.location}</p>
                    <p className="text-gray-600">💰 Budget: {request.budget}</p>
                    <p className="text-gray-600">⭐ Rating: {request.rating}/5</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="bg-green-100 text-green-800 text-sm font-medium px-2.5 py-0.5 rounded">
                    Completed
                  </span>
                  <p className="mt-2 text-sm text-gray-500">Completed on {request.date}</p>
                </div>
              </div>
              <div className="mt-4 flex justify-end">
                <Link to={`/profile/${request.id}`} className="text-blue-600 hover:text-blue-800">
                  View Provider Profile
                </Link>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default EmployerDashboard 