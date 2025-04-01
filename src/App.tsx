// src/App.tsx
import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import NavBar from './components/NavBar/NavBar';
// ^ Make sure this NavBar uses LinkBehavior for active route highlighting

// Lazy load each page (your existing approach)
const Home = lazy(() => import('./pages/Home/Home'));
const About = lazy(() => import('./pages/About/About'));
const Courses = lazy(() => import('./pages/Courses/Courses'));

function App() {
  // For GitHub Pages or production base path
  const isProd = import.meta.env.MODE === 'production';

  return (
    <div className="appContainer">
      <BrowserRouter basename={isProd ? '/my-educator-app' : '/'}>
        {/* Render NavBar here */}
        <NavBar />

        {/* Provide a fallback for lazy-loaded components */}
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
