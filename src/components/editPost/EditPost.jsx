import React, { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import EditPostForm from "./EditPostForm";

const EditPost = ({ idPost }) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(!isEditing); // Toggle the editing state
  };

  return (
    <div className={`edit-post ${isEditing ? "editing" : ""}`}>
      {isEditing ? (
        <EditPostForm idPost={idPost} setIsEditing={setIsEditing} />
      ) : (
        <EditIcon onClick={handleEditClick} />
      )}
    </div>
  );
};

export default EditPost;
