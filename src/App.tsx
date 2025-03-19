import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

// Lazy-load each page component
const Home = lazy(() => import('./pages/Home/Home'));
const About = lazy(() => import('./pages/About/About'));
const Courses = lazy(() => import('./pages/Courses/Courses'));

function App() {
  // Check if we’re in production mode (for GitHub Pages)
  const isProd = import.meta.env.MODE === 'production';

  return (
    <div className="appContainer">
      <BrowserRouter basename={isProd ? '/my-educator-app' : '/'}>
        {/* Provide a fallback for when lazy modules are loading */}
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/courses" element={<Courses />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
