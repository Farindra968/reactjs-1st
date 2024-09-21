import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Buttom from './components/Buttom.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Buttom />
    <App />
  </StrictMode>,
)
