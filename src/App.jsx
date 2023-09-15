import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import "./style.scss";
import {
  createBrowserRouter,
  RouterProvider,
  //Route,
  Outlet,
  Navigate,
} from "react-router-dom";
import NabVar from "./components/navBar/NavBar";
import LeftBar from "./components/leftBar/LeftBar";
import RightBar from "./components/rightBar/RightBar";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import { AuthContext } from "./context/authContext";

function App() {
  const { currentUser } = useContext(AuthContext);
  //means they not login yet

  const { darkMode } = useContext(DarkModeContext);
  // console.log(darkMode);
  const Layout = () => {
    return (
      <div className={`theme-${darkMode ? "dark" : "light"}`}>
        <NabVar />
        <div style={{ display: "flex" }}>
          <LeftBar />
          <div style={{ flex: 6 }}>
            <Outlet />
          </div>

          <RightBar />
        </div>
      </div>
    );
  };
  // User Shuodn see new feed if not login- It will direct to login
  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />; //If no current user they will navigate to login
    }
    return children;
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        //Inside this will be protected by function ProtectedRoute
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      ),
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/profile/:id",
          element: <Profile />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
