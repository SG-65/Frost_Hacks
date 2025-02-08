import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import JobListings from './pages/JobListings'
import JobSeekerProfile from './pages/JobSeekerProfile'
import EmployerDashboard from './pages/EmployerDashboard'
import JobSeekerDashboard from './pages/JobSeekerDashboard'
import Login from './pages/Login'
import Register from './pages/Register'
import UserProfile from './pages/UserProfile'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/jobs" element={<JobListings />} />
          <Route path="/profile/:id" element={<JobSeekerProfile />} />
          <Route path="/employer/dashboard" element={<EmployerDashboard />} />
          <Route path="/jobseeker/dashboard" element={<JobSeekerDashboard />} />
          <Route path="/profile/edit" element={<UserProfile />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
