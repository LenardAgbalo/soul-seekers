import { Link } from "react-router-dom";
import "./login.scss";
import { AuthContext } from "../../context/authContext";
import { useContext } from "react";

const Login = () => {
  const { login } = useContext(AuthContext);
  const handelLogin = () => {
    login();
  };
  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Soul Seekers</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum quam
            minima perspiciatis nihil autem savoluptatibus quidempiente
            voluptatibus quidemvoluptatibus quidem.
          </p>
          <span>Don't you have an account?</span>
          <Link to="/register">
            <button>Register</button>
          </Link>
        </div>

        <div className="right">
          <h1>Login</h1>
          <form action="">
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button className="" onClick={handelLogin}>
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
//https://www.youtube.com/watch?v=FweHcYHkt9A&ab_channel=LamaDev
