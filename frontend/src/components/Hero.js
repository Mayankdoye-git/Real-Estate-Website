function Hero() {
  return (
    <section 
      style={{ 
        backgroundImage: 'url(/consulting_service.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '600px',
        position: 'relative'
      }}
    >
      {/* Overlay */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.3)'
      }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="row align-items-center" style={{ minHeight: '600px' }}>
          {/* Left side - Text */}
          <div className="col-md-6">
            <h1 className="text-white fw-bold mb-4" style={{ fontSize: '3.5rem', lineHeight: '1.2' }}>
              Consultation,<br />
              Design,<br />
              & Marketing
            </h1>
          </div>
          
          {/* Right side - Form Card */}
          <div className="col-md-6">
            <div 
              className="card" 
              style={{ 
                backgroundColor: 'rgba(52, 73, 108, 0.95)',
                border: 'none',
                borderRadius: '10px',
                maxWidth: '400px',
                marginLeft: 'auto'
              }}
            >
              <div className="card-body p-4">
                <h3 className="text-white text-center mb-4">Get a Free Consultation</h3>
                
                {/* Contact form */}
                <form>
                  {/* Full Name input */}
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Full Name"
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
        </div>
      </div>
    </section>
  );
}

export default Hero;
