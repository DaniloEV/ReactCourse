import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import CounterComponent from './components/CounterComponent.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <CounterComponent counter={7}></CounterComponent>
  </React.StrictMode>,
)
