import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import "bootstra/dist/css/bootstrap.css.map"
import "bootstrap/dist7js/bootstrap.min.js"
import "@fortawesome/fontawesome-free/css/all.css"
import "node_modules/bootstrap-icons/font/bootstrap-icons.css"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
