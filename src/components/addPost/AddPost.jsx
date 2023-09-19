import React, { useState, useEffect } from "react";
import "./addpost.scss";

const PostForm = () => {
  const [userProfile, setUserProfile] = useState({
    name: "",
    profilePicture: "",
  });

  useEffect(() => {
    // Retrieve user data from local storage
    const storedUserData = JSON.parse(localStorage.getItem("user"));

    // Find the user with ID 1
    const userWithId1 = Array.isArray(storedUserData)
      ? storedUserData.find((user) => user.id === 1)
      : null;

    // Set the user profile if found or use empty strings
    if (userWithId1) {
      setUserProfile(userWithId1);
    }
  }, []);

  const [post, setPost] = useState({
    image: "",
    desc: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPost({
      ...post,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    // Retrieve the existing posts from local storage
    const existingPosts = JSON.parse(localStorage.getItem("posts")) || [];

    // Find the maximum idPost in the existing posts or default to 0 if no posts exist
    const maxIdPost = existingPosts.reduce(
      (max, post) => (post.idPost > max ? post.idPost : max),
      0
    );

    // Calculate the new idPost (auto-increment) starting from the maximum idPost
    const newIdPost = maxIdPost + 1;

    // Create a new post object with the form data and the calculated idPost and userProfile.id
    const newPost = {
      id: userProfile.id,
      idPost: newIdPost,
      userId: userProfile.id,
      img: post.image,
      name: userProfile.name,
      profilePicture: userProfile.profilePicture,
      desc: post.desc,
    };

    // Add the new post to the existing posts array
    existingPosts.push(newPost);

    // Store the updated posts array back in local storage
    localStorage.setItem("posts", JSON.stringify(existingPosts));

    // Clear the form fields
    setPost({
      image: "",
      name: "",
      profilePicture: "",
      desc: "",
    });

    console.log("Submitted Post:", newPost);
    // Refresh the page to display the new post
    window.location.reload();
  };
  return (
    <div className="createPost">
      <div className="container">
        <h2>Create a New Post</h2>

        <form onSubmit={handleSubmit}>
          <div className="content">
            <div className="item">
              <label>Image URL:</label>
              <input
                type="text"
                name="image"
                value={post.image}
                onChange={handleChange}
              />
            </div>

            <div className="item">
              <label htmlFor="desc">Description:</label>
              <textarea
                name="desc"
                value={post.desc}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit">Post</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostForm;
