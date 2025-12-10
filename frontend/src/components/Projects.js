// Import React hooks
import { useState, useEffect } from 'react';
// Import axios for making HTTP requests
import axios from 'axios';

function Projects() {
  // State to store projects fetched from backend
  const [projects, setProjects] = useState([]);

  // useEffect runs when component loads
  useEffect(() => {
    fetchProjects();
  }, []);

  // Function to fetch projects from backend
  const fetchProjects = async () => {
    try {
      // Make GET request to backend API
      const response = await axios.get('http://localhost:5000/api/projects');
      console.log('Projects fetched:', response.data);
      // Update state with fetched projects
      setProjects(response.data);
    } catch (error) {
      console.error('Error fetching projects:', error);
    }
  };

  return (
    <section id="projects" className="py-5" style={{ backgroundColor: '#f8f9fa' }}>
      <div className="container">
        {/* Section heading */}
        <div className="text-center mb-5">
          <h2 className="fw-bold mb-3" style={{ color: '#2563eb' }}>Our Projects</h2>
          <p className="text-muted">
            We know what buyers are looking for and suggest projects that will bring<br />
            clients top dollar for the sale of their homes.
          </p>
        </div>
        
        {/* Bootstrap grid to display projects */}
        <div className="row justify-content-center">
          {/* Loop through projects array and display each project */}
          {projects.map((project) => (
            <div key={project._id} className="col-lg-2 col-md-4 col-sm-6 mb-4">
              {/* Bootstrap card component */}
              <div className="card h-100 border-0 shadow-sm">
                {/* Project image */}
                <img 
                  src={project.imageUrl} 
                  className="card-img-top" 
                  alt={project.title}
                  style={{ height: '180px', objectFit: 'cover' }}
                />
                <div className="card-body text-center">
                  {/* Project title */}
                  <h6 className="card-title fw-bold mb-2" style={{ color: '#2563eb' }}>
                    {project.title}
                  </h6>
                  {/* Project description */}
                  <p className="card-text text-muted small mb-3">
                    {project.description.substring(0, 50)}...
                  </p>
                  {/* Read More button */}
                  <button 
                    className="btn btn-sm w-100"
                    style={{
                      backgroundColor: '#ff6b35',
                      color: 'white',
                      border: 'none',
                      fontWeight: 'bold'
                    }}
                  >
                    Read More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination dots */}
        <div className="text-center mt-4">
          <span className="badge rounded-pill me-2" style={{ backgroundColor: '#ff6b35', width: '12px', height: '12px' }}></span>
          <span className="badge rounded-pill" style={{ backgroundColor: '#d1d5db', width: '12px', height: '12px' }}></span>
        </div>
      </div>
    </section>
  );
}

export default Projects;
