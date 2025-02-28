import { StrictMode, useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme/theme.ts';

// ✅ Preloader Component with Spinner
const Preloader = ({ onComplete }: { onComplete: () => void }) => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Show logo for 3 seconds, then start fade-out
    setTimeout(() => {
      setFadeOut(true);
    }, 3000);

    // Fully remove loader after 5 seconds
    setTimeout(() => {
      onComplete();
    }, 4000);
  }, [onComplete]);

  return (
    <div className={`preloader ${fadeOut ? 'fade-out' : ''}`}>
      <div className="preloader-content">
        <img
          src="/edufinitelogo.png"
          alt="Educator Platform Logo"
          className="preloader-logo"
        />
        <div className="spinner"></div>
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
