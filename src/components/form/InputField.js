import React from "react";
import { ErrorMessage } from "@hookform/error-message";

// This component provides form input text field.
function InputField({ label, name, type, register, rules, errors }) {
  return (
    <div className="padding-top-bottom">
      <label className="padding-1em">{label}</label>
      <input type={type} name={name} {...register(name, rules)} />
      <ErrorMessage
        errors={errors}
        name={name}
        render={({ messages }) =>
          messages &&
          Object.entries(messages).map(([type, message]) => (
            <p className="error" key={type}>
              {message}
            </p>
          ))
        }
      />
    </div>
  );
}

export default InputField;
