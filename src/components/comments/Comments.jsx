// import { useContext } from "react";
import "./comments.scss";
// import { AuthContext } from "../../context/authContext";
import React, { useEffect, useState } from "react";

const Comments = () => {
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
  //Temporary

  const comments = [
    {
      id: 1,
      name: "Lenard Agbalo",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quas nemo cumque voluptatibus repellendus delect",
      userId: 1,
      profilePicture:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
    },
  ];

  return (
    <div className="comments">
      <div className="write">
        <img src={userData ? userData.profilePicture : ""} alt="" />
        <input type="text" placeholder="Write a comment" />
        <button>Send</button>
      </div>
      {comments.map((comment) => (
        <div className="comment">
          <img src={comment.profilePicture} alt="" />
          <div className="info">
            <span>{comment.name}</span>
            <p>{comment.desc}</p>
          </div>
          <span className="date">1 hour ago</span>
        </div>
      ))}
    </div>
  );
};

export default Comments;
