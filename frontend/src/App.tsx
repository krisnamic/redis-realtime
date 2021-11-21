import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { useRealtime } from '@space-kit/redis-realtime-react'

function App() {
  const { publisher, subscribe } = useRealtime()
  const { setDb } = publisher('text')
  const { data = '', isLoading } = subscribe('text')

  const onChange = (e: any) => {
    setDb(e.target.value)
  }

  return (
    <input value={data} placeholder="Type something here" onChange={onChange}/>
  )
}

export default App
