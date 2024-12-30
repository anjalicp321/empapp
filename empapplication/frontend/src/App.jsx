import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Add from './component/Add'
import View from './component/View'
import NavBar from './component/NavBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar/>
      

        <Routes>
          <Route path="/add" element={<Add/>}/>
            <Route path="/view" element={<View/>}/>
      
        </Routes>
    
      
    </>
  )
}

export default App
