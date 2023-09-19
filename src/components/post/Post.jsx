import "./post.scss";
import {
  FavoriteBorderOutlined,
  FavoriteOutlined,
  TextsmsOutlined,
  ShareOutlined,
} from "@mui/icons-material";

import { Link } from "react-router-dom";
import Comments from "../comments/Comments";
import { useState, useEffect } from "react";
import RemovePost from "../deletePost/RemovePost"; // Adjust the import path as needed
import EditPost from "../editPost/EditPost";

const Post = () => {
  const [commentOpen, setCommentOpen] = useState(false);
  const [liked, setLiked] = useState(false); // Use a single liked state
  const [posts, setPosts] = useState([]);

  // Step 1: Retrieve the data from local storage
  useEffect(() => {
    const localData = JSON.parse(localStorage.getItem("posts")) || [];
    setPosts(localData);
  }, []);

  // You need to map over your posts and render them here
  const renderedPosts = posts.map((post, index) => (
    <div className="post" key={index}>
      {/* <UpdatingPost /> */}
      <div className="container">
        <div className="user">
          <div className="userInfo">
            <img src={post.profilePicture} alt={post.userName} />
            <div className="details">
              <Link
                to={`/profile/${post.userId}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <span className="name">{post.name}</span>
              </Link>
              <span className="date">1 min ago</span>
            </div>
          </div>
          <div className="actions">
            <EditPost className="item" idPost={post.idPost} />
            <RemovePost className="item" idPost={post.idPost} />
          </div>
        </div>
        <div className="content">
          <p>{post.desc}</p>
          <img src={post.img} alt="" />
        </div>
        <div className="info">
          <div className="item" onClick={() => setLiked(!liked)}>
            {liked ? <FavoriteOutlined /> : <FavoriteBorderOutlined />}
            {liked ? "13 Likes" : "12 Likes"}
          </div>
          <div className="item" onClick={() => setCommentOpen(!commentOpen)}>
            <TextsmsOutlined />
            {commentOpen ? "13 Comments" : "12 Comments"}
          </div>
          <div className="item">
            <ShareOutlined /> 12 Share
          </div>
        </div>
        {commentOpen && <Comments />}
      </div>
    </div>
  ));

  return <>{renderedPosts}</>;
};

export default Post;
