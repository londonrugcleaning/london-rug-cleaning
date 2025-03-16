
import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx'
import './index.css'

// Add performance measurement
if (process.env.NODE_ENV === 'development') {
  const reportWebVitals = async () => {
    const { onCLS, onFID, onLCP } = await import('web-vitals');
    onCLS(console.log);
    onFID(console.log);
    onLCP(console.log);
  };
  reportWebVitals();
}

const rootElement = document.getElementById('root')
if (!rootElement) throw new Error('Failed to find the root element')

const root = createRoot(rootElement)
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
