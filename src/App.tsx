// src/App.tsx
import { lazy, Suspense } from 'react';
// Switch from BrowserRouter to HashRouter
import { HashRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import NavBar from './components/NavBar/NavBar';

// Lazy-load each page
const Home = lazy(() => import('./pages/Home/Home'));
const About = lazy(() => import('./pages/About/About'));
const Courses = lazy(() => import('./pages/Courses/Courses'));

function App() {
  return (
    <div className="appContainer">
      {/* We remove the basename logic. */}
      <HashRouter>
        <NavBar />

        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            {/* The slash-based paths remain the same, 
                but now they live behind # in the final URL. */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/courses" element={<Courses />} />
          </Routes>
        </Suspense>
      </HashRouter>
    </div>
  );
}

export default App;
