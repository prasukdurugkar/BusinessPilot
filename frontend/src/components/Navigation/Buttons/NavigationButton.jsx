import React from 'react'
import { HiHome } from "react-icons/hi2";
import { MdOutlineInventory } from "react-icons/md";


const NavigationButton = () => {
    return (
        <div className='left-nav-container'>

            <div className='left-nav-btn'>
                <HiHome />
                <p>Home</p>
            </div>

            <div className='left-nav-btn'>
                <MdOutlineInventory />
                <p>Inventory</p>
            </div>
            <div className='left-nav-btn'>
                <MdOutlineInventory />
                <p>Inventory</p>
            </div>
            <div className='left-nav-btn'>
                <MdOutlineInventory />
                <p>Inventory</p>
            </div>
        </div>
    )
}

export default NavigationButton