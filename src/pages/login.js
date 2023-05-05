import React from "react";

export function Login(props) {
  return (
    <div className="container login-container">
      <div className="row">
        <div className="col-md-4"></div>
        <div className="col-md-4 login-form">
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
              <input className="button" type="button" value="Login" />
            </div>
            <div className="padding-top-bottom">
              <input className="button" type="button" value="Sign Up" />
            </div>
          </form>
        </div>
        <div className="col-md-4"></div>
      </div>
    </div>
  );
}
