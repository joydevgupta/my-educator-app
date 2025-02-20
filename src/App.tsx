// App.tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Courses from './pages/Courses/Courses';
import './App.css';
import { Typography } from '@mui/material';

function App() {
  // Check if we’re in production mode (for GitHub Pages)
  const isProd = import.meta.env.MODE === 'production';

  return (
    <div className="appContainer">
      {/* <Typography variant="h1" gutterBottom className="multiColor">
        <span>E</span>
        <span>D</span>
        <span>U</span>
        <span>F</span>
        <span>I</span>
        <span>N</span>
        <span>I</span>
        <span>T</span>
        <span>E</span>
      </Typography> */}

      {/* Use BrowserRouter with a conditional basename */}
      <BrowserRouter basename={isProd ? '/my-educator-app' : '/'}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<Courses />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
