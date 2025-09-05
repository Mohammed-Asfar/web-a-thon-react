import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div>
      <App />
      <footer className="bg-black/70 py-5 text-center text-xs relative z-30">
        <p>© 2025 Web-a-thon. All rights reserved.</p>
      </footer>
    </div>
  </StrictMode>,
)
