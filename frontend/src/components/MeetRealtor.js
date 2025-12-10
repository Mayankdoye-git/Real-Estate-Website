function MeetRealtor() {
  return (
    <section className="py-5" style={{ backgroundColor: 'white', position: 'relative' }}>
      {/* Blue circle decoration */}
      <div style={{
        position: 'absolute',
        top: '50px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '20px',
        height: '20px',
        backgroundColor: '#2563eb',
        borderRadius: '50%'
      }}></div>

      {/* Orange circle decoration */}
      <div style={{
        position: 'absolute',
        bottom: '100px',
        right: '100px',
        width: '15px',
        height: '15px',
        backgroundColor: '#ff6b35',
        borderRadius: '50%'
      }}></div>

      <div className="container">
        <div className="row align-items-center">
          {/* Left side - Text */}
          <div className="col-md-6">
            <h2 className="fw-bold mb-4" style={{ color: '#2563eb' }}>
              Not Your Average Realtor
            </h2>
            <p className="text-muted" style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
              We provide a complete service for the sale, purchase or rental of real estate. 
              We have been operating in Madrid and Barcelona more than 15 years, 
              with a successful track record in the real estate industry.
            </p>
          </div>

          {/* Right side - Images */}
          <div className="col-md-6">
            <div className="row">
              <div className="col-6 mb-3">
                <img 
                  src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=300&h=300&fit=crop" 
                  alt="Realtor 1"
                  className="img-fluid"
                  style={{ 
                    borderRadius: '10px',
                    width: '100%',
                    height: '200px',
                    objectFit: 'cover'
                  }}
                />
              </div>
              <div className="col-6 mb-3">
                <img 
                  src="https://randomuser.me/api/portraits/men/32.jpg" 
                  alt="Realtor 2"
                  className="img-fluid rounded-circle"
                  style={{ 
                    width: '150px',
                    height: '150px',
                    objectFit: 'cover',
                    border: '5px solid white',
                    boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                  }}
                />
              </div>
              <div className="col-12">
                <img 
                  src="https://randomuser.me/api/portraits/women/44.jpg" 
                  alt="Realtor 3"
                  className="img-fluid rounded-circle"
                  style={{ 
                    width: '120px',
                    height: '120px',
                    objectFit: 'cover',
                    border: '5px solid white',
                    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                    marginLeft: '30%'
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MeetRealtor;
