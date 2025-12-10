import { useState } from 'react';
import axios from 'axios';

function Newsletter() {
  // State to store email input
  const [email, setEmail] = useState('');

  // Handle newsletter subscription
  const handleSubscribe = async (e) => {
    e.preventDefault();
    
    try {
      // Send email to backend
      const response = await axios.post('http://localhost:5000/api/newsletter', { email });
      console.log('Newsletter subscription:', response.data);
      alert('Successfully subscribed to newsletter!');
      setEmail('');  // Clear input
    } catch (error) {
      console.error('Error subscribing:', error);
      if (error.response?.data?.message === 'Email already subscribed') {
        alert('This email is already subscribed!');
      } else {
        alert('Error subscribing. Please try again.');
      }
    }
  };

  return (
    <section 
      className="py-5" 
      style={{ 
        backgroundImage: 'url(/newspaper.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '300px',
        position: 'relative'
      }}
    >
      {/* Overlay for better text readability */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
      }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="row justify-content-center text-center mb-4">
          <div className="col-md-8">
            <h3 className="text-white mb-4">
              Learn more about our listing process, as well as our additional staging and design work.
            </h3>
            {/* Learn More button */}
            <button 
              className="btn"
              style={{
                backgroundColor: 'white',
                color: '#333',
                padding: '12px 40px',
                borderRadius: '5px',
                border: 'none',
                fontWeight: '500'
              }}
            >
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Bottom blue bar with Subscribe section */}
      <div style={{ 
        backgroundColor: '#2563eb', 
        padding: '20px 0',
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 2
      }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h5 className="text-white mb-0">Subscribe Us</h5>
            </div>
            <div className="col-md-6">
              {/* Newsletter subscription form */}
              <form onSubmit={handleSubscribe} className="d-flex">
                <input
                  type="email"
                  className="form-control me-2"
                  placeholder="Enter Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  style={{
                    padding: '10px 15px',
                    borderRadius: '5px',
                    border: 'none'
                  }}
                />
                <button 
                  type="submit" 
                  className="btn"
                  style={{
                    backgroundColor: 'white',
                    color: '#2563eb',
                    fontWeight: 'bold',
                    padding: '10px 30px',
                    borderRadius: '5px',
                    whiteSpace: 'nowrap'
                  }}
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Newsletter;
