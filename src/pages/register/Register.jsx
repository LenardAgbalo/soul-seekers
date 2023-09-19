import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./register.scss";

const Register = () => {
  // Step 1: Define initial form data state and state setter
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
  });

  // Step 2: Function to handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Step 3: Function to handle form submission
  const handleRegistration = (e) => {
    e.preventDefault();

    // Extract form values from the formData state
    const { name, email, username, password } = formData;

    // Get the existing user data from local storage or initialize as an empty array
    const existingUserData = JSON.parse(localStorage.getItem("user")) ?? [];

    // Calculate the next user ID by incrementing the maximum ID found in existing data
    const nextUserId =
      existingUserData.reduce(
        (max, user) => (user.id > max ? user.id : max),
        0
      ) + 1;

    // Create a new user object with the generated ID and set a default profilePicture
    const newUser = {
      id: nextUserId,
      nextUserId: nextUserId,
      name,
      email,
      username,
      password,
      profilePicture:
        "https://cdn.hswstatic.com/gif/play/0b7f4e9b-f59c-4024-9f06-b3dc12850ab7-1920-1080.jpg",
    };

    // Push the new user object to the existing data
    existingUserData.push(newUser);

    // Store the updated user data back in local storage
    localStorage.setItem("user", JSON.stringify(existingUserData));

    // Optional: Display a message to indicate that data was saved
    alert("Form data saved to local storage!");

    // Reset the form fields
    setFormData({
      name: "",
      email: "",
      username: "",
      password: "",
    });
  };

  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>Infinity Vibe</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum quam
            minima perspiciatis nihil autem sapiente voluptatibus quidem
            incidunt repellat quisquam. Dolorum animi sint perspiciatis vel nem.
          </p>
          <span>Do you have an account?</span>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>

        <div className="right">
          <h1>Register</h1>
          <form onSubmit={handleRegistration}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleInputChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleInputChange}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleInputChange}
            />

            <button type="submit">Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
