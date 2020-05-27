import React, { useState, useEffect } from 'react';
import * as yup from 'yup';
import axios from 'axios';
import loginFormSchema from '../validation/loginFormSchema';

const initialFormValues = {
  username: '',
  password: '',
};

const initialFormErrors = {
  username: '',
  password: '',
};

const initialLoggedInUser = [];
const initialDisabled = true;

export default function Login(props) {
  // slice of state to hold the user to submit
  const [loggedInUser, setLoggedInUser] = useState(initialLoggedInUser);
  // slice of state to hold the current form values
  const [formValues, setFormValues] = useState(initialFormValues);
  // slice of state to hold the errors, which update based on validation
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  // slice of state to determine button clickability
  const [disabled, setDisabled] = useState(initialDisabled);

  const loginUser = (user) => {
    console.log(user);
    // axios
    //   // post the sign-in info (form data) to the /login endpoint
    //   .post('endpoint goes here', user)
    //   .then((res) => {
    //      // do something with the data and setLoggedInUser
    //     // reset the form values on success
    //     setFormValues(initialFormValues);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  };

  const onInputChange = (evt) => {
    // Grab the values from the form as the user types
    const { name } = evt.target;
    const { value } = evt.target;

    //display validation based on which value is being updated
    yup
      .reach(loginFormSchema, name)
      .validate(value)
      .then((valid) => {
        setFormErrors({
          ...formErrors,
          [name]: '',
        });
      })
      .catch((err) => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0],
        });
      });

    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const onSubmit = (evt) => {
    evt.preventDefault();

    // put all the entered form values into an object, and send that over to the server
    const user = {
      username: formValues.username.trim(),
      password: formValues.password.trim(),
    };
    loginUser(user);
  };

  useEffect(() => {
    loginFormSchema.isValid(formValues).then((valid) => {
      // if the form values meet validation, enable the button
      setDisabled(!valid);
    });
  }, [formValues]);

  return (
    <form onSubmit={onSubmit}>
      <h2>Sign-In</h2>
      <label>
        Username:&nbsp;
        <input
          name="username"
          type="text"
          onChange={onInputChange}
          value={formValues.username}
        />
      </label>
      <label>
        Password:&nbsp;
        <input
          name="password"
          type="password"
          onChange={onInputChange}
          value={formValues.password}
        />
      </label>

      <button disabled={disabled}>Submit</button>
      <div className="errors">
        <div>{formErrors.username}</div>
        <div>{formErrors.password}</div>
      </div>
    </form>
  );
}
