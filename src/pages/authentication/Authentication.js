import React from "react";
import { useState } from "react";
import LoginForm from "./LoginForm.js";
import SignupForm from "./SignupForm.js";

function Authentication(props) {
  const [signUpFlag, setSignUpFlag] = useState(false);
  const navSignUp = () => {
    setSignUpFlag(!signUpFlag);
  };

  return (
    <>
      {signUpFlag ? (
        <SignupForm onNavSignUp={navSignUp} />
      ) : (
        <LoginForm onNavSignUp={navSignUp} />
      )}
    </>
  );
}

export default Authentication;
