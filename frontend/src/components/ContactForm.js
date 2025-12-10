import { useState } from 'react';
import axios from 'axios';

function ContactForm() {
  // State to store form input values
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    city: ''
  });

  // Handle input changes
  const handleChange = (e) => {
    // Update the specific field that changed
    setFormData({
      ...formData,  // Keep other fields unchanged
      [e.target.name]: e.target.value  // Update the changed field
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();  // Prevent page reload
    
    try {
      // Send form data to backend
      const response = await axios.post('http://localhost:5000/api/contacts', formData);
      console.log('Contact form submitted:', response.data);
      alert('Thank you! We will contact you soon.');
      
      // Clear the form after successful submission
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        city: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Error submitting form. Please try again.');
    }
  };

  return (
    <section 
      id="contact" 
      className="py-5" 
      style={{ 
        backgroundImage: 'url(/consulting_service.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '500px',
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
        backgroundColor: 'rgba(0, 0, 0, 0.3)'
      }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="row align-items-center">
          {/* Left side - Form */}
          <div className="col-md-5">
            <div 
              className="card" 
              style={{ 
                backgroundColor: 'rgba(52, 73, 108, 0.9)',
                border: 'none',
                borderRadius: '10px'
              }}
            >
              <div className="card-body p-4">
                <h3 className="text-white text-center mb-4">Get a Free Consultation</h3>
                
                {/* Contact form */}
                <form onSubmit={handleSubmit}>
                  {/* Full Name input */}
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Full Name"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      style={{
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        border: '1px solid rgba(255, 255, 255, 0.3)',
                        color: 'white',
                        padding: '12px'
                      }}
                    />
                  </div>
                  
                  {/* Email input */}
                  <div className="mb-3">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter Email Address"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      style={{
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        border: '1px solid rgba(255, 255, 255, 0.3)',
                        color: 'white',
                        padding: '12px'
                      }}
                    />
                  </div>
                  
                  {/* Phone input */}
                  <div className="mb-3">
                    <input
                      type="tel"
                      className="form-control"
                      placeholder="Mobile Number"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      style={{
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        border: '1px solid rgba(255, 255, 255, 0.3)',
                        color: 'white',
                        padding: '12px'
                      }}
                    />
                  </div>
                  
                  {/* City input */}
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Area, City"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      required
                      style={{
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        border: '1px solid rgba(255, 255, 255, 0.3)',
                        color: 'white',
                        padding: '12px'
                      }}
                    />
                  </div>
                  
                  {/* Submit button */}
                  <button 
                    type="submit" 
                    className="btn w-100"
                    style={{
                      backgroundColor: '#ff6b35',
                      color: 'white',
                      padding: '12px',
                      fontWeight: 'bold',
                      border: 'none'
                    }}
                  >
                    Get Quick Quote
                  </button>
                </form>
              </div>
            </div>
          </div>
          
          {/* Right side - Text */}
          <div className="col-md-7">
            <h1 className="text-white fw-bold mb-4" style={{ fontSize: '3rem', lineHeight: '1.2' }}>
              Consultation,<br />
              Design,<br />
              & Marketing
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
