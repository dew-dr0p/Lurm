import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Home from './Pages/Home'
import Upload from './Pages/Upload';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=" bg-[#F2F2F2] h-screen w-screen">
      <Home/>
      
    </div>
  )
}

export default App