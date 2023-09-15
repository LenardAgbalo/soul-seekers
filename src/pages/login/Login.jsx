import "./login.scss";

const Login = () => {
  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Soul Seekers</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum quam
            minima perspiciatis nihil autem sapiente voluptatibus quidem
            incidunt repellat quisquam. Dolorum animi sint perspiciatis vel
            nemo, quos id voluptatum voluptate.
          </p>
          <span>Dont you have an account?</span>
          <button>Register</button>
        </div>

        <div className="right">
          <h1>Login</h1>
          <form action="">
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button className="">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
//https://www.youtube.com/watch?v=FweHcYHkt9A&ab_channel=LamaDev
