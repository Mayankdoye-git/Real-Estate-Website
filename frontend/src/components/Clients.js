import { useState, useEffect } from 'react';
import axios from 'axios';

function Clients() {
  // State to store client testimonials
  const [clients, setClients] = useState([]);

  useEffect(() => {
    fetchClients();
  }, []);

  // Fetch clients from backend
  const fetchClients = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/clients');
      console.log('Clients fetched:', response.data);
      setClients(response.data);
    } catch (error) {
      console.error('Error fetching clients:', error);
    }
  };

  return (
    <section id="clients" className="py-5" style={{ backgroundColor: 'white' }}>
      <div className="container">
        {/* Section heading */}
        <div className="text-center mb-5">
          <h2 className="fw-bold mb-3" style={{ color: '#2563eb' }}>Happy Clients</h2>
        </div>

        {/* Blue circle decoration */}
        <div className="text-center mb-4">
          <span 
            className="d-inline-block rounded-circle" 
            style={{ 
              width: '20px', 
              height: '20px', 
              backgroundColor: '#2563eb' 
            }}
          ></span>
        </div>
        
        <div className="row justify-content-center">
          {/* Display each client testimonial */}
          {clients.map((client) => (
            <div key={client._id} className="col-lg-2 col-md-4 col-sm-6 mb-4">
              <div className="card text-center h-100 border-0">
                <div className="card-body">
                  {/* Client image - circular */}
                  <img 
                    src={client.imageUrl} 
                    alt={client.name}
                    className="rounded-circle mb-3"
                    style={{ 
                      width: '80px', 
                      height: '80px', 
                      objectFit: 'cover',
                      border: '3px solid #e5e7eb'
                    }}
                  />
                  {/* Client review/testimonial */}
                  <p className="card-text text-muted small mb-3" style={{ fontSize: '0.85rem' }}>
                    {client.review.substring(0, 100)}...
                  </p>
                  {/* Client name */}
                  <h6 className="card-title fw-bold mb-1" style={{ color: '#2563eb' }}>
                    {client.name}
                  </h6>
                  {/* Client designation */}
                  <p className="text-muted small mb-0" style={{ fontSize: '0.8rem' }}>
                    {client.designation}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Clients;
