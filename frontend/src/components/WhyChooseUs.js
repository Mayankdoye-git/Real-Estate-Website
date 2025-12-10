function WhyChooseUs() {
  return (
    <section className="py-5" style={{ backgroundColor: '#f8f9fa', position: 'relative', overflow: 'hidden' }}>
      {/* Decorative elements */}
      <div style={{
        position: 'absolute',
        top: '20px',
        right: '50px',
        width: '20px',
        height: '20px',
        backgroundColor: '#2563eb',
        borderRadius: '50%'
      }}></div>

      <div className="container">
        {/* Section heading */}
        <div className="text-center mb-5">
          <h2 className="fw-bold" style={{ color: '#2563eb' }}>Why Choose Us?</h2>
          <div style={{
            width: '80px',
            height: '4px',
            backgroundColor: '#2563eb',
            margin: '10px auto'
          }}></div>
        </div>

        {/* Three columns */}
        <div className="row text-center mb-5">
          {/* Potential ROI */}
          <div className="col-md-4 mb-4">
            <div className="mb-3">
              <div style={{
                width: '60px',
                height: '60px',
                backgroundColor: '#e3f2fd',
                borderRadius: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto'
              }}>
                <i className="bi bi-house" style={{ fontSize: '30px', color: '#2563eb' }}></i>
              </div>
            </div>
            <h5 className="fw-bold mb-3" style={{ color: '#2563eb' }}>Potential ROI</h5>
            <p className="text-muted">
              Unleash your property's "wow factor" with our expert home staging services. We'll help you attract more buyers, sell faster, and maximize your profit potential.
            </p>
          </div>

          {/* Design */}
          <div className="col-md-4 mb-4">
            <div className="mb-3">
              <div style={{
                width: '60px',
                height: '60px',
                backgroundColor: '#e3f2fd',
                borderRadius: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto'
              }}>
                <i className="bi bi-palette" style={{ fontSize: '30px', color: '#2563eb' }}></i>
              </div>
            </div>
            <h5 className="fw-bold mb-3" style={{ color: '#2563eb' }}>Design</h5>
            <p className="text-muted">
              Our design services are all about creating a cohesive, stylish look that appeals to a wide range of buyers and showcasing your home's best features.
            </p>
          </div>

          {/* Marketing */}
          <div className="col-md-4 mb-4">
            <div className="mb-3">
              <div style={{
                width: '60px',
                height: '60px',
                backgroundColor: '#e3f2fd',
                borderRadius: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto'
              }}>
                <i className="bi bi-megaphone" style={{ fontSize: '30px', color: '#2563eb' }}></i>
              </div>
            </div>
            <h5 className="fw-bold mb-3" style={{ color: '#2563eb' }}>Marketing</h5>
            <p className="text-muted">
              Our marketing services are designed to get your property in front of the right buyers, at the right time, to maximize your sale price and minimize time on market.
            </p>
          </div>
        </div>

       

        {/* Image gallery section */}
        <div className="row mt-5 position-relative justify-content-center align-items-end">
          {/* Decorative blue circles */}
          <div style={{
            position: 'absolute',
            left: '-100px',
            bottom: '0',
            width: '250px',
            height: '250px',
            backgroundColor: '#e3f2fd',
            borderRadius: '50%',
            opacity: '0.5',
            zIndex: 0
          }}></div>

          <div style={{
            position: 'absolute',
            right: '-50px',
            bottom: '100px',
            width: '150px',
            height: '150px',
            backgroundColor: '#e3f2fd',
            borderRadius: '50%',
            opacity: '0.3',
            zIndex: 0
          }}></div>

          <div className="col-md-3 mb-3" style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ position: 'relative' }}>
              <img 
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=350&h=250&fit=crop" 
                alt="Property 1"
                className="img-fluid"
                style={{ 
                  borderRadius: '10px',
                  width: '100%',
                  height: '250px',
                  objectFit: 'cover'
                }}
              />
              <div style={{
                position: 'absolute',
                top: '-20px',
                left: '-20px',
                width: '50px',
                height: '50px',
                backgroundColor: '#ff6b35',
                borderRadius: '5px'
              }}></div>
            </div>
          </div>

          <div className="col-md-4 mb-3" style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ position: 'relative' }}>
              <img 
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&h=350&fit=crop" 
                alt="Property 2"
                className="img-fluid"
                style={{ 
                  borderRadius: '10px',
                  width: '100%',
                  height: '350px',
                  objectFit: 'cover'
                }}
              />
              <div style={{
                position: 'absolute',
                top: '-20px',
                right: '-20px',
                width: '50px',
                height: '50px',
                backgroundColor: '#2563eb',
                borderRadius: '5px'
              }}></div>
            </div>
          </div>

          <div className="col-md-3 mb-3" style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ position: 'relative' }}>
              <img 
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=350&h=250&fit=crop" 
                alt="Property 3"
                className="img-fluid"
                style={{ 
                  borderRadius: '10px',
                  width: '100%',
                  height: '250px',
                  objectFit: 'cover'
                }}
              />
              <div style={{
                position: 'absolute',
                top: '-20px',
                right: '-20px',
                width: '50px',
                height: '50px',
                backgroundColor: '#ff6b35',
                borderRadius: '5px'
              }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
