import React from "react";
import { useForm } from "react-hook-form";
import { InputField } from "../../components/form";
import { useNavigate } from "react-router-dom";
import { fetchData } from "../../services";
function LoginForm(props) {
  // Navigate is used to navigate between pages.
  const navigate = useNavigate();

  // userForm is hook from react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ criteriaMode: "all", mode: "all" });

  const onSubmit = (data) => {
    console.log(data);
    fetchData("users.json").then((res) => console.log(res));
    navigate("/wall");
  };

  return (
    <div className="container login-container">
      <div className="row">
        <div className="col-md-4"></div>
        <div className="col-md-4 login-form">
          <form onSubmit={handleSubmit(onSubmit)}>
            <InputField
              label="Username"
              name="username"
              type="text"
              register={register}
              rules={{
                required: "This field is required",
                minLength: { value: 10, message: "Minimum length 10" },
              }}
              errors={errors}
            />

            <InputField
              label="Password"
              name="password"
              type="password"
              register={register}
              rules={{ required: "This field is required" }}
              errors={errors}
            />

            <div class="form-button-div">
              <button className="button" type="submit">
                Login
              </button>
            </div>
          </form>
          <div className="form-button-div">
            <button className="button" onClick={props.onNavSignUp}>
              Create New Account
            </button>
          </div>
        </div>
        <div className="col-md-4"></div>
      </div>
    </div>
  );
}

export default LoginForm;
