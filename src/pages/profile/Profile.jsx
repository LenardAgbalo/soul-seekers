import "./profile.scss";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PinterestIcon from "@mui/icons-material/Pinterest";
import PlaceIcon from "@mui/icons-material/Place";
import LanguageIcon from "@mui/icons-material/Language";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { EmailOutlined, Instagram } from "@mui/icons-material";
import Posts from "../../components/posts/Posts";
import React, { useEffect, useState } from "react";

const Profile = () => {
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
    <div className="profile">
      <div className="images">
        <img
          className="cover"
          src="https://i.pinimg.com/originals/3e/2a/f6/3e2af664e061013a3d05aa99fa20c1d4.jpg"
          alt=""
        />
        <img
          className="profilePicture"
          src={userData ? userData.profilePicture : ""}
          alt=""
        />
      </div>
      <div className="profileContainer">
        <div className="uInfo">
          <div className="left">
            <a href="http://facebook.com">
              <FacebookOutlinedIcon fontSize="medium" />
            </a>
            <a href="http://facebook.com">
              <Instagram fontSize="medium" />
            </a>
            <a href="http://facebook.com">
              <TwitterIcon fontSize="medium" />
            </a>
            <a href="http://facebook.com">
              <LinkedInIcon fontSize="medium" />
            </a>
            <a href="http://facebook.com">
              <PinterestIcon fontSize="medium" />
            </a>
          </div>
          <div className="center">
            <span> {userData ? userData.name : "Loading..."}</span>
            <div className="info">
              <div className="item">
                <PlaceIcon />
                <span>USA</span>
              </div>
              <div className="item">
                <LanguageIcon />
                <span> {userData ? userData.email : "Loading..."}</span>
              </div>
            </div>
            <button>Follow</button>
          </div>
          <div className="right">
            <EmailOutlined />
            <MoreVertIcon />
          </div>
        </div>
        <Posts />
      </div>
    </div>
  );
};

export default Profile;
