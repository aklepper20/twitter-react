import React from "react";
import "../css/SideBarOption.css";

function SideBarOption({ active, text, Icon }) {
  console.log(active);
  return (
    <div className={`sidebarOption ${active && "sidebarOption--active"}`}>
      {Icon}
      <h2>{text}</h2>
    </div>
  );
}

export default SideBarOption;
