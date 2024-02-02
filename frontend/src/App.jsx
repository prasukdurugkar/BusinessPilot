import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavigationLeft from './components/Navigation/NavigationLeft'
import { FaBeer } from 'react-icons/fa'
import NavigationTop from './components/Navigation/NavigationTop'
import { Button } from "@/components/ui/button"
import InventoryTable from './components/Table/InventoryTable'


function App() {
  return(
  <body  className=''>
    <NavigationTop />

    <div className="dashboard">

    <NavigationLeft />


    <InventoryTable/>
  
    </div>

    
  </body>
  )
}

export default App
