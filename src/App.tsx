import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header/Header'
import LoginPage from './components/header/loginPage/index.tsx'

function App() {
  const [count, setCount] = useState(0)

  return (

    <div style={{ width: '100%' }}>
      <LoginPage></LoginPage>

    </div>


  )
}

export default App
