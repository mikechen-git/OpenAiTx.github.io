import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import './i18n'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter 
      basename="/OpenAiTx.github.io"
      future={{
        v7_relativeSplatPath: true,
        v7_startTransition: true
      }}
    >
      <App />
    </BrowserRouter>
  </React.StrictMode>,
) 