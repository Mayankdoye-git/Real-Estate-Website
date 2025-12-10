import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Admin() {  // State for projects
  const [projects, setProjects] = useState([]);
  const [projectForm, setProjectForm] = useState({
    imageUrl: '',
    title: '',
    description: ''
  });

  // State for clients
  const [clients, setClients] = useState([]);
  const [clientForm, setClientForm] = useState({
    imageUrl: '',
    name: '',
    designation: '',
    review: ''
  });

  // State for contacts and newsletter
  const [contacts, setContacts] = useState([]);
  const [subscribers, setSubscribers] = useState([]);

  // Fetch all data when component loads
  useEffect(() => {
    fetchProjects();
    fetchClients();
    fetchContacts();
    fetchSubscribers();
  }, []);

  // Fetch functions
  const fetchProjects = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/projects');
      setProjects(response.data);
    } catch (error) {
      console.error('Error fetching projects:', error);
    }
  };

  const fetchClients = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/clients');
      setClients(response.data);
    } catch (error) {
      console.error('Error fetching clients:', error);
    }
  };

  const fetchContacts = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/contacts');
      setContacts(response.data);
    } catch (error) {
      console.error('Error fetching contacts:', error);
    }
  };

  const fetchSubscribers = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/newsletter');
      setSubscribers(response.data);
    } catch (error) {
      console.error('Error fetching subscribers:', error);
    }
  };

  // Handle project form submission
  const handleProjectSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/projects', projectForm);
      alert('Project added successfully!');
      setProjectForm({ imageUrl: '', title: '', description: '' });
      fetchProjects();
    } catch (error) {
      console.error('Error adding project:', error);
      alert('Error adding project');
    }
  };

  // Handle client form submission
  const handleClientSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/clients', clientForm);
      alert('Client added successfully!');
      setClientForm({ imageUrl: '', name: '', designation: '', review: '' });
      fetchClients();
    } catch (error) {
      console.error('Error adding client:', error);
      alert('Error adding client');
    }
  };

  // Delete project
  const deleteProject = async (id) => {
    if (window.confirm('Are you sure you want to delete this project?')) {
      try {
        await axios.delete(`http://localhost:5000/api/projects/${id}`);
        alert('Project deleted!');
        fetchProjects();
      } catch (error) {
        console.error('Error deleting project:', error);
      }
    }
  };

  // Delete client
  const deleteClient = async (id) => {
    if (window.confirm('Are you sure you want to delete this client?')) {
      try {
        await axios.delete(`http://localhost:5000/api/clients/${id}`);
        alert('Client deleted!');
        fetchClients();
      } catch (error) {
        console.error('Error deleting client:', error);
      }
    }
  };

  return (
    <div>
      {/* Admin Navbar */}
      <nav className="navbar navbar-dark bg-dark">
        <div className="container">
          <span className="navbar-brand">RealTrust Admin Panel</span>
          <Link to="/" className="btn btn-light btn-sm">Back to Home</Link>
        </div>
      </nav>

      <div className="container my-5">
        {/* Add Project Section */}
        <div className="card mb-4">
          <div className="card-header bg-primary text-white">
            <h4>Add New Project</h4>
          </div>
          <div className="card-body">
            <form onSubmit={handleProjectSubmit}>
              <div className="mb-3">
                <label className="form-label">Project Image URL</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="https://example.com/image.jpg"
                  value={projectForm.imageUrl}
                  onChange={(e) => setProjectForm({...projectForm, imageUrl: e.target.value})}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Project Title</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter project title"
                  value={projectForm.title}
                  onChange={(e) => setProjectForm({...projectForm, title: e.target.value})}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Project Description</label>
                <textarea
                  className="form-control"
                  rows="3"
                  placeholder="Enter project description"
                  value={projectForm.description}
                  onChange={(e) => setProjectForm({...projectForm, description: e.target.value})}
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Add Project</button>
            </form>
          </div>
        </div>

        {/* Projects List */}
        <div className="card mb-4">
          <div className="card-header bg-success text-white">
            <h4>All Projects</h4>
          </div>
          <div className="card-body">
            <div className="table-responsive">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>Image</th>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {projects.map((project) => (
                    <tr key={project._id}>
                      <td>
                        <img src={project.imageUrl} alt={project.title} style={{width: '80px', height: '60px', objectFit: 'cover'}} />
                      </td>
                      <td>{project.title}</td>
                      <td>{project.description}</td>
                      <td>
                        <button 
                          className="btn btn-danger btn-sm"
                          onClick={() => deleteProject(project._id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Add Client Section */}
        <div className="card mb-4">
          <div className="card-header bg-primary text-white">
            <h4>Add New Client</h4>
          </div>
          <div className="card-body">
            <form onSubmit={handleClientSubmit}>
              <div className="mb-3">
                <label className="form-label">Client Image URL</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="https://example.com/image.jpg"
                  value={clientForm.imageUrl}
                  onChange={(e) => setClientForm({...clientForm, imageUrl: e.target.value})}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Client Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter client name"
                  value={clientForm.name}
                  onChange={(e) => setClientForm({...clientForm, name: e.target.value})}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Designation</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="e.g., CEO, Designer"
                  value={clientForm.designation}
                  onChange={(e) => setClientForm({...clientForm, designation: e.target.value})}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Review/Testimonial</label>
                <textarea
                  className="form-control"
                  rows="3"
                  placeholder="Enter client review"
                  value={clientForm.review}
                  onChange={(e) => setClientForm({...clientForm, review: e.target.value})}
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Add Client</button>
            </form>
          </div>
        </div>

        {/* Clients List */}
        <div className="card mb-4">
          <div className="card-header bg-success text-white">
            <h4>All Clients</h4>
          </div>
          <div className="card-body">
            <div className="table-responsive">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Designation</th>
                    <th>Review</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {clients.map((client) => (
                    <tr key={client._id}>
                      <td>
                        <img src={client.imageUrl} alt={client.name} style={{width: '50px', height: '50px', borderRadius: '50%', objectFit: 'cover'}} />
                      </td>
                      <td>{client.name}</td>
                      <td>{client.designation}</td>
                      <td>{client.review}</td>
                      <td>
                        <button 
                          className="btn btn-danger btn-sm"
                          onClick={() => deleteClient(client._id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Contact Messages */}
        <div className="card mb-4">
          <div className="card-header bg-info text-white">
            <h4>Contact Form Messages</h4>
          </div>
          <div className="card-body">
            <div className="table-responsive">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>Full Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>City</th>
                    <th>Date</th>
                  </tr>
                </thead>
                <tbody>
                  {contacts.map((contact) => (
                    <tr key={contact._id}>
                      <td>{contact.fullName}</td>
                      <td>{contact.email}</td>
                      <td>{contact.phone}</td>
                      <td>{contact.city}</td>
                      <td>{new Date(contact.createdAt).toLocaleDateString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Newsletter Subscribers */}
        <div className="card mb-4">
          <div className="card-header bg-warning">
            <h4>Newsletter Subscribers</h4>
          </div>
          <div className="card-body">
            <div className="table-responsive">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>Email</th>
                    <th>Subscribed Date</th>
                  </tr>
                </thead>
                <tbody>
                  {subscribers.map((subscriber) => (
                    <tr key={subscriber._id}>
                      <td>{subscriber.email}</td>
                      <td>{new Date(subscriber.createdAt).toLocaleDateString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admin;