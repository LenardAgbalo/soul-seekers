import React from "react";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
const RemovePost = ({ idPost }) => {
  const handleDeleteClick = () => {
    const confirmation = window.confirm(
      "Are you sure you want to remove this post?"
    );

    if (confirmation) {
      // Search for the post with matching idPost in local storage
      const localPosts = JSON.parse(localStorage.getItem("posts")) || [];
      const updatedPosts = localPosts.filter((post) => post.idPost !== idPost);

      // Update the local storage with the updated data
      localStorage.setItem("posts", JSON.stringify(updatedPosts));

      // Reload the page or perform any other necessary updates
      window.location.reload();
    }
  };

  return (
    <div className="removePost">
      <DeleteForeverIcon
        className="item delete-button"
        style={{ color: "#db3a34ff" }}
        onClick={handleDeleteClick}
      />
    </div>
  );
};

export default RemovePost;
