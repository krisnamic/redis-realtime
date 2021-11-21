import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import {RealtimeProvider} from '@space-kit/redis-realtime-react'

ReactDOM.render(
  <React.StrictMode>
    <RealtimeProvider baseUrl="localhost:5000" db="mycustomdb" secure={false}>
      <App/>
    </RealtimeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
