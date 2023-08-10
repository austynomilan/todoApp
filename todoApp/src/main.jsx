import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {TodoContextProvider} from './Context'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <TodoContextProvider>
    <React.StrictMode>
    <App />
  </React.StrictMode>
  </TodoContextProvider>
)
