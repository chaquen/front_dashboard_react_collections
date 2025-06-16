import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

// Import i18n configuration
import './i18n'

import App from './App'
import { basePath } from './context/constants'
import Preloader from './components/Preloader'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Suspense fallback={<Preloader />}>
      <BrowserRouter basename={basePath}>
        <App />
      </BrowserRouter>
    </Suspense>
  </StrictMode>,
)
