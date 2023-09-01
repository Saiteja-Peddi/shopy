import React from "react";
// import { Link, useNavigate } from "react-router-dom";

function Signup(props) {
  // const navigate = useNavigate();

  // const handleLoginClick = () => {
  //   navigate("/");
  // };

  return (
    <div className="container login-container">
      <div className="row">
        <div className="col-md-3.5"></div>
        <div className="col-md-5 login-form">
          <form>
            <div className="padding-top-bottom">
              <label className="padding-1em">Username</label>
              <input type="text" />
            </div>
            <div className="padding-top-bottom">
              <label className="padding-1em">Password</label>
              <input type="password" />
            </div>
            <div className="padding-top-bottom">
              <label className="padding-1em">Confirm Password</label>
              <input type="password" />
            </div>
            <div className="padding-top-bottom">
              <button className="button">Sign Up</button>
            </div>
            <div className="padding-top-bottom">
              <p>
                Already have an account? <Link to="/">Login</Link>
              </p>
            </div>
          </form>
        </div>
        <div className="col-md-3.5"></div>
      </div>
    </div>
  );
}

export default Signup;
