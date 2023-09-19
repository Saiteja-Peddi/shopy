import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { fetchData } from "../services";
function Login(props) {
  const navigate = useNavigate();
  const [loginFlag, setLoginFlag] = useState(true);

  const navToWall = (login) => {
    if (login) {
      fetchData("users.json").then((res) => console.log(res));
    }
    navigate("/wall");
  };

  const navSignUpLoginClick = () => {
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
              {loginFlag && (
                <button className="button" onClick={() => navToWall(true)}>
                  Login
                </button>
              )}
              {!loginFlag && (
                <button className="button" onClick={() => navToWall(false)}>
                  Sign Up
                </button>
              )}
            </div>

            {loginFlag && (
              <div className="padding-top-bottom">
                <button className="button" onClick={navSignUpLoginClick}>
                  Create New Account
                </button>
              </div>
            )}

            {!loginFlag && (
              <div className="padding-top-bottom">
                <p>
                  Already have an account?{" "}
                  <a href="#" onClick={navSignUpLoginClick}>
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
