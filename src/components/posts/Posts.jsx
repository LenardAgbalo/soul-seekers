import "./posts.scss";
import Post from "../post/Post";
import AddPost from "../addPost/AddPost";
import React, { useState } from "react";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  // useEffect(() => {
  // Retrieve the data from localStorage using the key 'postsData'
  //   const postsData = localStorage.getItem("posts");

  //   if (postsData) {
  // Parse the JSON string back to an array
  //     const parsedPosts = JSON.parse(postsData);
  //     setPosts(parsedPosts);
  //   }
  // }, []);

  // Function to add a new post to the state and localStorage
  const addNewPost = (newPost) => {
    // Create a new array by spreading the existing posts and adding the new one
    const updatedPosts = [...posts, newPost];
    setPosts(updatedPosts);

    // Store the updated posts in localStorage
    localStorage.setItem("postsData", JSON.stringify(updatedPosts));
  };

  return (
    <div className="posts">
      <AddPost addNewPost={addNewPost} />
      {/*       
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))} */}

      <Post></Post>
    </div>
  );
};

export default Posts;
