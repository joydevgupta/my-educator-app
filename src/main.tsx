// src/main.tsx
import { StrictMode, useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme/theme.ts';

// Your preloader remains the same...
const Preloader = ({ onComplete }: { onComplete: () => void }) => {
  const [fadeOut, setFadeOut] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 5;
      });
    }, 150);

    setTimeout(() => {
      setFadeOut(true);
    }, 3000);

    setTimeout(() => {
      onComplete();
    }, 5000);

    return () => clearInterval(progressInterval);
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

const rootElement = document.getElementById('root');

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
