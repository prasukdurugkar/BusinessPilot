import React from 'react'
import NavigationButton from './Buttons/NavigationButton'
import { HiHome } from "react-icons/hi2";

import { MdOutlineInventory } from "react-icons/md";


const Navigation = () => {
  return (
    <nav className='left-nav d-flex bg-gray-100 mt-2 rounded-md mx-2'>
      <div className='mt-10'>
      <NavigationButton name ={'Home'} icon={<HiHome />}/>
      <NavigationButton name ={'Inventory'}  icon={<MdOutlineInventory/>}/>
      <NavigationButton name ={'Contact'}/>
      
      </div>
      
    </nav>

  )
}

export default Navigation