import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header/Header'
import { LandingPage } from './api/landing-page/pages/LandingPage'
import ModalPessoas from './components/ModalPessoas'

function App() {
  const [count, setCount] = useState(0)

  return (
    
  <div style={{width: '100%'}}>
    <LandingPage />
    <ModalPessoas />

  </div>
    
    
  )
}

export default App
