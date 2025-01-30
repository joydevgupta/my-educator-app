// App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Courses from './pages/Courses/Courses';
import './App.css'; // keep if you have a minimal reset
import { Typography } from '@mui/material';

function App() {
  return (
    <div className="appContainer">
      {/* MUI Typography used here */}
      <Typography variant="h2" gutterBottom>
        My Educator App
      </Typography>

      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<Courses />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
