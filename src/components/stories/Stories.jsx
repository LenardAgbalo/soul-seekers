import React, { useEffect, useState } from "react";
import "./stories.scss";

const Stories = () => {
  const [userData, setUserData] = useState(null);
  useEffect(() => {
    // Retrieve user data from local storage
    const storedUsers = JSON.parse(localStorage.getItem("user"));

    // Find the user with userId 1
    const user = storedUsers.find((u) => u.userId === 1);

    // Set the user data in state
    setUserData(user);
  }, []);

  //TEMPORARY
  const stories = [
    {
      id: 1,
      name: "Allan Bernardo",
      img: "https://images.unsplash.com/photo-1603481588273-2f908a9a7a1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8&w=1000&q=80",
    },

    {
      id: 2,
      name: "Mark Marcos",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdTG-raDHi62O3ne8UCnSDrc1dUnR2GRwOuk0Dg0FxwM4ocMLCIIBw2qUQKjcJ8_Rq7Ds&usqp=CAU",
    },

    {
      id: 3,
      name: "Demi Yang",
      img: "https://media.istockphoto.com/id/1431301157/photo/multiracial-group-of-friends-taking-selfie-picture-outdoors-millennial-people-having-fun-on.webp?b=1&s=170667a&w=0&k=20&c=6KIFOHwgdGmdmRSXKLnRTvgVntKCg0iSEJxSCPEy9Sc=",
    },

    {
      id: 4,
      name: "Kim Lopez",
      img: "https://image.cnbcfm.com/api/v1/image/104476327-softerve.jpg?v=1529475136",
    },
    {
      id: 5,
      name: "Paula Rivera",
      img: "https://hips.hearstapps.com/hmg-prod/images/woman-hiking-at-red-rock-canyon-during-sunset-with-royalty-free-image-1601478369.jpg",
    },
  ];
  return (
    <div className="stories">
      <div className="story">
        <img src={userData ? userData.profilePicture : ""} alt="" />
        <span>{userData ? userData.name : ""}</span>
        <button>+</button>
      </div>
      {stories.map((story) => (
        <div className="story" key={story.id}>
          <img src={story.img} alt="" />
          <span>{story.name}</span>
        </div>
      ))}
    </div>
  );
};

export default Stories;
