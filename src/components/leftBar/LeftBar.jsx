import { Link } from "react-router-dom";
import "./leftbar.scss";
import Friends from "../../assets/friends.png";
import Groups from "../../assets/group.png";
import Market from "../../assets/marketplace.png";
import Watch from "../../assets/watchvideo.png";
import Memories from "../../assets/watch.png";
import Events from "../../assets/events.png";
import Gaming from "../../assets/gaming.png";
import Gallery from "../../assets/gallery.png";
import Videos from "../../assets/video.png";
import Messages from "../../assets/message.png";
// import Fund from "../../assets/fund.png";
// import Courses from "../../assets/course.png";
// import Tutorial from "../../assets/tutorial.png";
// import { useContext } from "react";
// import { AuthContext } from "../../context/authContext";
import React, { useEffect, useState } from "react";

const LeftBar = () => {
  // const { currentUser } = useContext(AuthContext);
  const [userData, setUserData] = useState(null);
  useEffect(() => {
    // Retrieve user data from local storage
    const storedUsers = JSON.parse(localStorage.getItem("user"));

    // Find the user with userId 1
    const user = storedUsers.find((u) => u.userId === 1);

    // Set the user data in state
    setUserData(user);
  }, []);
  return (
    <div className="leftBar">
      <div className="container">
        <div className="menu">
          <div className="user">
            {/* <img src={currentUser.profilePicture} alt="user" />
            <span>{currentUser.name}</span> */}
            <img src={userData ? userData.profilePicture : ""} alt="user" />

            <span>
              <div className="">
                <Link
                  to={userData ? `/profile/${userData.userId}` : "/"}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <span className="name">
                    {userData ? userData.name : "Loading..."}
                  </span>
                </Link>
              </div>
            </span>
          </div>
          <div className="item">
            <img src={Friends} alt="" />
            <span>Friends</span>
          </div>
          <div className="item">
            <img src={Groups} alt="" />
            <span>Groups</span>
          </div>
          <div className="item">
            <img src={Market} alt="" />
            <span>Marketplace</span>
          </div>
          <div className="item">
            <img src={Watch} alt="" />
            <span>Watch</span>
          </div>
          <div className="item">
            <img src={Memories} alt="" />
            <span>Memories</span>
          </div>
        </div>
        <hr />
        <div className="menu">
          <span>Your shorcuts</span>
          <div className="item">
            <img src={Events} alt="" />
            <span>Events</span>
          </div>
          <div className="item">
            <img src={Gaming} alt="" />
            <span>Gaming</span>
          </div>
          <div className="item">
            <img src={Gallery} alt="" />
            <span>Gallery</span>
          </div>
          <div className="item">
            <img src={Videos} alt="" />
            <span>Videos</span>
          </div>
          <div className="item">
            <img src={Messages} alt="" />
            <span>Messages</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBar;
