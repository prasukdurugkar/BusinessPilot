import React from 'react'
import NavigationLeft from './Navigation/NavigationLeft'
import NavigationTop from './Navigation/NavigationTop'
import InventoryTable from './Table/InventoryTable'



function Inventory() {
    return (
        <>

            <div className="dashboard ">
                 <NavigationTop />
                <div className='flex'>
                <NavigationLeft  />
                <InventoryTable />
                </div>



            </div>
        </>
    )
}

export default Inventory