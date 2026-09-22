import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Error from './components/Error'
import Weather from './components/Weather'

function App() {

  return (
    <div className='page'>
      <Header />
      <Weather />
    </div>
  )
}

export default App
