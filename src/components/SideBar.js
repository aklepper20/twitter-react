import React from "react";
import "../css/SideBar.css";
import TwitterIcon from "@mui/icons-material/Twitter";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SideBarOption from "./SideBarOption";

function SideBar() {
  const sideBarObj = [
    ["Home", <HomeIcon />],
    ["Explore", <SearchIcon />],
    ["Notifications", <NotificationsNoneIcon />],
  ];
  return (
    <div className="sidebar">
      <TwitterIcon />
      {sideBarObj.map((obj) => {
        return <SideBarOption text={obj[0]} Icon={obj[1]} />;
      })}
    </div>
  );
}

export default SideBar;
