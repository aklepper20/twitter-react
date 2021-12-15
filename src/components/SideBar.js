import React from "react";
import "../css/SideBar.css";
import TwitterIcon from "@mui/icons-material/Twitter";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import SideBarOption from "./SideBarOption";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ListAltIcon from "@mui/icons-material/ListAlt";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Button from "@mui/material/Button";

function SideBar() {
  const sideBarObj = [
    ["Home", <HomeIcon />, "sidebarOption--active"],
    ["Explore", <SearchIcon />],
    ["Notifications", <NotificationsNoneIcon />],
    ["Messages", <MailOutlineIcon />],
    ["Bookmarks", <BookmarkBorderIcon />],
    ["Lists", <ListAltIcon />],
    ["Profile", <PermIdentityIcon />],
    ["More", <MoreHorizIcon />],
  ];
  return (
    <div className="sidebar">
      <TwitterIcon className="twitter__icon" />
      {sideBarObj.map((obj) => {
        return <SideBarOption text={obj[0]} Icon={obj[1]} active={obj[2]} />;
      })}
      <Button variant="outlined" className="sidebar__tweet" sx={{ width: 1 }}>
        Tweet
      </Button>
    </div>
  );
}

export default SideBar;
