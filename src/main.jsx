import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import Loader from './components/common/Loader.jsx'
import NavContext from './context/NavContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Loader>
        <NavContext>
          <App />
        </NavContext>
      </Loader>
    </BrowserRouter>
  </StrictMode>,
)
