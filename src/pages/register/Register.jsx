import { Link } from "react-router-dom";
import "./register.scss";

const Register = () => {
  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>Soul Seekers</h1>
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
          <form action="">
            <input type="text" placeholder="Username" />
            <input type="email" placeholder="Email" />
            <input type="text" placeholder="Username" />
            <input type="text" placeholder="Name" />
            <button className="">Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
