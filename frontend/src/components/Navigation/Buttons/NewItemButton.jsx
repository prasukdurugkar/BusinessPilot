import { Button } from "@/components/ui/button"
import React from 'react'
import { IoIosAdd } from "react-icons/io"
import { MdOutlineAdd } from "react-icons/md";

const NewItemButton = () => {
  return (
    <div>
    <Button className={"bg-blue-600"}>Create Item <MdOutlineAdd className="font-bold text-xl " /></Button>
    
    </div>
  )
}

export default NewItemButton