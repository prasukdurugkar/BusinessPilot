import React from "react";

const NavigationButton = (props) => {
  return (
    <div className=" flex gap-1 left-nav-btn align-middle justify-center m-4 hover:bg-white px-8s py-2 rounded-md">
      <span className="m-1">{props.icon}</span>
      <p>{props.name}</p>
    </div>
  );
};

export default NavigationButton;
