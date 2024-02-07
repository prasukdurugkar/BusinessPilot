import { Button } from "@/components/ui/button";
import React from "react";
import { IoIosAdd } from "react-icons/io";
import { MdOutlineAdd } from "react-icons/md";
// import { Link } from "react-router-dom/dist";
import { Link } from "react-router-dom";

const NewItemButton = () => {
  return (
    <div>
      <Link to="/inventory/create">
        <Button className={"bg-blue-600"}>
          Create Item <MdOutlineAdd className="font-bold text-xl " />
        </Button>
      </Link>
    </div>
  );
};

export default NewItemButton;
