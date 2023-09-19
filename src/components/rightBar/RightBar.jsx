import "./righbar.scss";
import React, { useEffect, useState } from "react";

const RightBar = () => {
  const [suggestedUsers, setSuggestedUsers] = useState([]);

  useEffect(() => {
    // Retrieve user data from local storage
    const storedUserData = localStorage.getItem("user"); // Update the key

    if (storedUserData) {
      const userDataArray = JSON.parse(storedUserData);

      // Filter out users with id not equal to 1
      const filteredUsers = userDataArray.filter((user) => user.id !== 1);

      setSuggestedUsers(filteredUsers); // Set the filtered user data array to the state
    }
  }, []);

  return (
    <div className="rightBar">
      <div className="container">
        <div className="item">
          <span>Suggestions For You</span>
          {suggestedUsers.map((user, index) => (
            <div className="user" key={index}>
              <div className="userInfo">
                <img src={user.profilePicture} alt={user.name} />
                <span>{user.name}</span>
              </div>
              <div className="buttons">
                <button>Follow</button>
                <button>Dismiss</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RightBar;
