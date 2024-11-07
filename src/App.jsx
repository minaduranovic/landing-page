import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
  <>
  <div className="navbar">
    <div className='navbar-item'>Home</div>
    <div className='navbar-item'>About </div>
    <div className='navbar-item'>Details</div>
    <div className='navbar-item'>Contact us</div>
  </div>
  </> 
  )
}

export default App
