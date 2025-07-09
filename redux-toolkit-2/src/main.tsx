import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { setUpStore } from './store/store.ts'
import './scss/main.scss'
import App from './App.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={setUpStore()}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>,
)
