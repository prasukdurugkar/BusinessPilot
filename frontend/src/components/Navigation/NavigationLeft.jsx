import React from "react";
import NavigationButton from "./Buttons/NavigationButton";
import { HiHome } from "react-icons/hi2";
import { MdGroups } from "react-icons/md";
import { MdOutlineInventory } from "react-icons/md";
import { AiOutlineStock } from "react-icons/ai";
import { Link } from "react-router-dom/dist";

const Navigation = () => {
  return (
    <nav className="left-nav d-flex bg-gray-100 mt-2 rounded-md mx-2">
      <div className="mt-10">
        <Link to="/">
          <NavigationButton name={"Home"} icon={<HiHome />} />
        </Link>
        <Link to="/inventory">
          <NavigationButton name={"Inventory"} icon={<MdOutlineInventory />} />
        </Link>
        <Link to="/finance">
          <NavigationButton name={"Finance"} icon={<AiOutlineStock />} />
        </Link>
        <Link to="/employee">
          <NavigationButton name={"Employee"} icon={<MdGroups />} />
        </Link>
        <Link to="/contact">
          <NavigationButton name={"Contact"} />
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;
