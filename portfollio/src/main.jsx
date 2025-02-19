import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import Portfolio from './Component/Portfollio.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <Portfolio/> */}
  </StrictMode>,
)
