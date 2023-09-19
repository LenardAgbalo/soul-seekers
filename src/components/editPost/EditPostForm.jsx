import React, { useState, useEffect } from "react";
import CloseIcon from "@mui/icons-material/Close";
import CheckIcon from "@mui/icons-material/Check";
import "./editpostform.scss";

const EditPostForm = ({ idPost, setIsEditing }) => {
  // State variables to hold the input values
  const [img, setImageLink] = useState("");
  const [desc, setDescription] = useState("");

  // Function to load data from localStorage and populate the form
  useEffect(() => {
    const postData = JSON.parse(localStorage.getItem("posts")) || [];
    const postToUpdate = postData.find((post) => post.idPost === idPost);
    if (postToUpdate) {
      setImageLink(postToUpdate.img);
      setDescription(postToUpdate.desc);

      // Log the name and id to the console
    }
  }, [idPost]);

  const handleSave = () => {
    // Load the existing data from localStorage
    const postData = JSON.parse(localStorage.getItem("posts")) || [];

    const postIndex = postData.findIndex((post) => post.idPost === idPost);

    if (postIndex !== -1) {
      // Update the post
      const postToUpdate = postData[postIndex];
      postData[postIndex] = {
        idPost: idPost,
        img,
        desc,
        id: postToUpdate.id,
        name: postToUpdate.name,
        profilePicture: postToUpdate.profilePicture,
        userId: postToUpdate.userId,
      };

      // Save the updated data back to localStorage
      localStorage.setItem("posts", JSON.stringify(postData));
    }

    // Close the form
    setIsEditing(false);
    window.location.reload();
  };

  return (
    <div className="editpostform">
      <div className="container">
        <div className="post">
          <label htmlFor="">Image Url:</label>
          <input
            type="text"
            placeholder="Image Link"
            value={img}
            onChange={(e) => setImageLink(e.target.value)}
            className="input-field"
          />
          <label htmlFor="">Description:</label>
          <input
            type="text"
            placeholder="Description"
            value={desc}
            onChange={(e) => setDescription(e.target.value)}
            className="input-field"
          />
        </div>

        <div className="actions">
          <CloseIcon
            className="item close-icon"
            onClick={() => setIsEditing(false)} // Close the form
          />
          <CheckIcon
            className="item check-icon"
            onClick={handleSave} // Call handleSave when Save is clicked
          />
        </div>
      </div>
    </div>
  );
};

export default EditPostForm;
