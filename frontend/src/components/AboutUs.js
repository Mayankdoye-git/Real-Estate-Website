function AboutUs() {
  return (
    <section className="py-5" style={{ backgroundColor: 'white' }}>
      <div className="container">
        {/* Section heading */}
        <div className="text-center mb-5">
          <h2 className="fw-bold" style={{ color: '#2563eb' }}>About Us</h2>
          <div style={{
            width: '80px',
            height: '4px',
            backgroundColor: '#2563eb',
            margin: '10px auto'
          }}></div>
        </div>

        {/* Content */}
        <div className="row justify-content-center">
          <div className="col-md-8 text-center">
            <p className="text-muted mb-4" style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
              If there's one thing we've learned over the years, it's that exceptional customer service and a 
              commitment to work hard, do what we say, and follow through. We provide quality service to 
              build relationships with clients and, more importantly, maintain those relationships 
              by communicating effectively.
            </p>

            {/* Learn More button */}
            <button 
              className="btn"
              style={{
                backgroundColor: 'transparent',
                color: '#2563eb',
                border: '2px solid #2563eb',
                padding: '10px 40px',
                fontWeight: 'bold',
                borderRadius: '5px'
              }}
            >
              LEARN MORE
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
