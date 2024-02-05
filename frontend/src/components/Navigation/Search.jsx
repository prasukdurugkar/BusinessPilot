
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import React from 'react'
// import { Input } from "@/components/ui/input"

import { IoIosSearch } from "react-icons/io";

const Search = () => {
    return (
            <div className=" flex w-full max-w-sm items-center space-x-2 ">
                <Input className="search-input" type="text" placeholder="Search" />
                <Button type="submit"><IoIosSearch /></Button>
            </div>
    )

}

export default Search


