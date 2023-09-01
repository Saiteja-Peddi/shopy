import React from "react";
// import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Login(props) {
  // const navigate = useNavigate();
  const [loginFlag, setLoginFlag] = useState(true);

  // const handleSignupClick = () => {
  //   navigate("/signup");
  // };

  const handleSignUpClick = () => {
    setLoginFlag(!loginFlag);
  };

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

            {!loginFlag && (
              <div className="padding-top-bottom">
                <label className="padding-1em">Confirm Password</label>
                <input type="password" />
              </div>
            )}

            <div className="padding-top-bottom">
              {loginFlag && <button className="button">Login</button>}
              {!loginFlag && <button className="button">Sign Up</button>}
            </div>

            {loginFlag && (
              <div className="padding-top-bottom">
                <button className="button" onClick={handleSignUpClick}>
                  Create New Account
                </button>
              </div>
            )}

            {!loginFlag && (
              <div className="padding-top-bottom">
                <p>
                  Already have an account?{" "}
                  <a href="#" onClick={handleSignUpClick}>
                    Login
                  </a>
                </p>
              </div>
            )}
          </form>
        </div>
        <div className="col-md-3.5"></div>
      </div>
    </div>
  );
}

export default Login;
