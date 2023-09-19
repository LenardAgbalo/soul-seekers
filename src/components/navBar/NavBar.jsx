import React, { useContext, useEffect, useState } from "react";
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

const NabVar = () => {
  const { toggle, darkMode } = useContext(DarkModeContext);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Retrieve user data from local storage
    const storedUsers = JSON.parse(localStorage.getItem("user"));

    // Find the user with userId 1
    const user = storedUsers.find((u) => u.userId === 1);
    //

    // Set the user data in state
    setUserData(user);
  }, []);

  return (
    <div className="navbar">
      <div className="left">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span>Infinity Vibe</span>
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
          <img src={userData ? userData.profilePicture : ""} alt="user" />
          <span>{userData ? userData.name : ""}</span>
        </div>
      </div>
    </div>
  );
};

export default NabVar;
