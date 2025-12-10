// Import Link from react-router-dom for navigation
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    // Bootstrap navbar component with custom styling
    <nav 
      className="navbar navbar-expand-lg navbar-light" 
      style={{ 
        backgroundColor: 'white',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        padding: '15px 0'
      }}
    >
      <div className="container">
        {/* Brand/Logo */}
        <Link 
          className="navbar-brand fw-bold" 
          to="/"
          style={{
            fontSize: '1.5rem',
            color: '#2563eb',
            letterSpacing: '0.5px'
          }}
        >
           RealTrust
        </Link>
        
        {/* Mobile menu toggle button */}
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
          style={{ border: 'none' }}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        {/* Navigation links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center">
            <li className="nav-item">
              <Link 
                className="nav-link" 
                to="/"
                style={{
                  color: '#333',
                  fontWeight: '500',
                  padding: '8px 16px',
                  transition: 'color 0.3s'
                }}
                onMouseOver={(e) => e.target.style.color = '#2563eb'}
                onMouseOut={(e) => e.target.style.color = '#333'}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <a 
                className="nav-link" 
                href="#projects"
                style={{
                  color: '#333',
                  fontWeight: '500',
                  padding: '8px 16px',
                  transition: 'color 0.3s'
                }}
                onMouseOver={(e) => e.target.style.color = '#2563eb'}
                onMouseOut={(e) => e.target.style.color = '#333'}
              >
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a 
                className="nav-link" 
                href="#clients"
                style={{
                  color: '#333',
                  fontWeight: '500',
                  padding: '8px 16px',
                  transition: 'color 0.3s'
                }}
                onMouseOver={(e) => e.target.style.color = '#2563eb'}
                onMouseOut={(e) => e.target.style.color = '#333'}
              >
                Testimonials
              </a>
            </li>
            <li className="nav-item">
              <a 
                className="nav-link" 
                href="#contact"
                style={{
                  color: '#333',
                  fontWeight: '500',
                  padding: '8px 16px',
                  transition: 'color 0.3s'
                }}
                onMouseOver={(e) => e.target.style.color = '#2563eb'}
                onMouseOut={(e) => e.target.style.color = '#333'}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
