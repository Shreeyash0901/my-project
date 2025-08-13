import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to Our React App</h1>
        <p className="text-lg text-gray-600 mb-6">
          This is a modern React application built with Vite, Tailwind CSS, and React Router v6.
        </p>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-blue-800 mb-2">Features</h3>
            <ul className="text-blue-700 space-y-1">
              <li>✅ React Router v6</li>
              <li>✅ Tailwind CSS</li>
              <li>✅ Responsive Design</li>
              <li>✅ Modern Components</li>
            </ul>
          </div>
          
          <div className="bg-green-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-green-800 mb-2">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/about" className="block text-green-700 hover:text-green-900">About Us</Link>
              <Link to="/services" className="block text-green-700 hover:text-green-900">Our Services</Link>
              <Link to="/contact" className="block text-green-700 hover:text-green-900">Contact</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
