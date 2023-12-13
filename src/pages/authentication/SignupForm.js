import React from "react";
import { useForm } from "react-hook-form";
import { InputField } from "../../components/form";
function SignupForm(props) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ criteriaMode: "all", mode: "all" });
  const onSubmit = (data) => {
    console.log(data);
  };

  const password = watch("password", "");
  return (
    <div className="container login-container">
      <div className="row">
        <div className="col-md-3.5"></div>
        <div className="col-md-5 login-form">
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
            <InputField
              label="Confirm Password"
              name="confirmPassword"
              type="password"
              register={register}
              rules={{
                required: "This field is required",
                validate: (value) =>
                  value === password || "Passwords do not match",
              }}
              errors={errors}
            />

            <div className="padding-top-bottom">
              <button className="button" type="submit">
                SignUp
              </button>
            </div>
          </form>
          <div className="padding-top-bottom">
            <p>
              Already have an account?{" "}
              <a href="#" onClick={props.onNavSignUp}>
                Login
              </a>
            </p>
          </div>
        </div>
        <div className="col-md-3.5"></div>
      </div>
    </div>
  );
}

export default SignupForm;
