import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setcurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || []
  );

  // Set the user who logged in
  const login = () => {
    const newUser = {
      id: 1,
      name: "John Lenard",
      profilePicture:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww&w=1000&q=80",
      email: "lenardagbalo@gmail.com",
      password: "password",
      username: "JohnLenard",
      userId: 1,
    };

    // Find the index of the user with id 1 in the current array
    const userIndex = currentUser.findIndex((user) => user.id === 1);

    if (userIndex !== -1) {
      // If a user with id 1 exists, update that user
      const updatedUsers = [...currentUser];
      updatedUsers[userIndex] = newUser;
      setcurrentUser(updatedUsers);
      localStorage.setItem("user", JSON.stringify(updatedUsers));
    } else {
      // If not, add the new user to the array
      const updatedUsers = [...currentUser, newUser];
      setcurrentUser(updatedUsers);
      localStorage.setItem("user", JSON.stringify(updatedUsers));
    }
  };

  useEffect(() => {
    // Store the array of users in localStorage
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login }}>
      {children}
    </AuthContext.Provider>
  );
};
