import { Link } from "react-router-dom";
import "./login.scss";
import { AuthContext } from "../../context/authContext";
import { useContext } from "react";

const Login = () => {
  const { login } = useContext(AuthContext);

  const handleLogin = () => {
    login();
  };

  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Infinity Vibe</h1>
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
            <Link to="/">
              <button onClick={handleLogin}>Login</button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
