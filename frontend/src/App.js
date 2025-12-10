// Import React Router for navigation between pages
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import our page components
import Home from './pages/Home';
import Admin from './pages/Admin';

function App() {
  return (
    // Router enables navigation between different pages
    <Router>
      <Routes>
        {/* Home page route - shows landing page */}
        <Route path="/" element={<Home />} />
        
        {/* Admin page route - shows admin dashboard */}
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </Router>
  );
}

export default App;
