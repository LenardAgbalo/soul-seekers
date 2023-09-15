import React, { useContext } from "react";
import "./navbar.scss";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import NightlightOutlinedIcon from "@mui/icons-material/NightlightOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { AuthContext } from "../../context/authContext";

const NabVar = () => {
  const { toggle, darkMode } = useContext(DarkModeContext);
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="left">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span>Social Media</span>
          {/* <img
            src="https://scontent.fmnl17-2.fna.fbcdn.net/v/t39.30808-6/272789869_1934018020136535_2787715431033159137_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=a2f6c7&_nc_eui2=AeGFadcsycHi0pG_bHmG0cqCYDnNGzcfUNxgOc0bNx9Q3PwC9DAIGrNuv7Ohsq3knXajZ9rmmNlZ9G4HPhmL81M8&_nc_ohc=tYKhhU5diaUAX932qTd&_nc_ht=scontent.fmnl17-2.fna&oh=00_AfAe87ywQxDsocRe11O2FVfEK5HNtUQltgr1a87MT4cYQQ&oe=6508CA5D"
            alt=""
          /> */}
        </Link>
        <HomeOutlinedIcon />
        {darkMode ? (
          <WbSunnyOutlinedIcon onClick={toggle} />
        ) : (
          <NightlightOutlinedIcon onClick={toggle} />
        )}
        <GridViewOutlinedIcon />
        <div className="search">
          <SearchOutlinedIcon />
          <input type="text" placeholder="Search" />
        </div>
      </div>
      <div className="right">
        <PermIdentityOutlinedIcon />
        <EmailOutlinedIcon />
        <NotificationsActiveOutlinedIcon />
        <div className="user">
          <img src={currentUser.profilePicture} alt="user" />
          <span>{currentUser.name}</span>
        </div>
      </div>
    </div>
  );
};

export default NabVar;
