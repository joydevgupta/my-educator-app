import { StrictMode, useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme/theme.ts';

// ✅ Preloader Component with Progress Percentage
const Preloader = ({ onComplete }: { onComplete: () => void }) => {
  const [fadeOut, setFadeOut] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress (0% → 100% over 3s)
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 5;
      });
    }, 150); // Increase progress every 150ms

    // Start fade-out after 3 seconds
    setTimeout(() => {
      setFadeOut(true);
    }, 3000);

    // Fully remove loader after 5 seconds
    setTimeout(() => {
      onComplete();
    }, 5000);

    return () => clearInterval(progressInterval); // Cleanup interval
  }, [onComplete]);

  return (
    <div className={`preloader ${fadeOut ? 'fade-out' : ''}`}>
      <div className="preloader-content">
        <img
          src={`${import.meta.env.BASE_URL}edufinitelogo.webp`}
          alt="Edufinite Logo"
          className="preloader-logo"
        />
        <div className="progress-text">{progress}%</div>
      </div>
    </div>
  );
};

// ✅ Root Initialization
const rootElement = document.getElementById('root');

// ✅ Render Preloader Before React App
if (rootElement) {
  rootElement.innerHTML = '<div id="preload"></div>';
  const preloadRoot = createRoot(document.getElementById('preload')!);

  preloadRoot.render(
    <StrictMode>
      <Preloader
        onComplete={() => {
          preloadRoot.unmount(); // Remove preloader
          createRoot(rootElement).render(
            <StrictMode>
              <ThemeProvider theme={theme}>
                <App />
              </ThemeProvider>
            </StrictMode>
          );
        }}
      />
    </StrictMode>
  );
}
