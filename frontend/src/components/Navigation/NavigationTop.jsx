import React from "react";
import AvatarProfile from "./Avatar";
import Search from "./Search";
import NewItemButton from "./Buttons/NewItemButton";

const NavigationTop = () => {
  return (
    <nav className=" h-12 flex justify-between px-10 bg-gray-100 align-middle m-1 rounded-md">
      {/* <LogoButton /> */}
      <AvatarProfile />
      <Search />
      <NewItemButton />
      <AvatarProfile />
    </nav>
  );
};

export default NavigationTop;
