import React, { useState, useEffect } from 'react';
import * as yup from 'yup';
import axios from 'axios';
import registerFormSchema from '../validation/registerFormSchema';

const initialFormValues = {
  first_name: '',
  last_name: '',
  email: '',
  username: '',
  password: '',
};

const initialFormErrors = {
  first_name: '',
  last_name: '',
  email: '',
  username: '',
  password: '',
};

const initialUser = [];
const initialDisabled = true;

export default function Register(props) {
  // slice of state to hold the user to submit
  const [user, setUser] = useState(initialUser);
  // slice of state to hold the current form values
  const [formValues, setFormValues] = useState(initialFormValues);
  // slice of state to hold the errors, which update based on validation
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  // slice of state to determine button clickability
  const [disabled, setDisabled] = useState(initialDisabled);

  const postNewUser = (newUser) => {
    console.log(newUser);
    // axios
    //   // post the new user (form data) to the /users endpoint
    //   .post('endpoint goes here', newUser)
    //   .then((res) => {
    //     // do something with the data and setUser
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
      .reach(registerFormSchema, name)
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
    const newUser = {
      username: formValues.username.trim(),
      first_name: formValues.first_name.trim(),
      last_name: formValues.last_name.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
    };
    postNewUser(newUser);
  };

  useEffect(() => {
    registerFormSchema.isValid(formValues).then((valid) => {
      // if the form values meet validation, enable the button
      setDisabled(!valid);
    });
  }, [formValues]);

  return (
    <form onSubmit={onSubmit}>
      <h2>New User Sign-Up</h2>
      <label>
        First Name:&nbsp;
        <input
          name="first_name"
          type="text"
          onChange={onInputChange}
          value={formValues.first_name}
        />
      </label>
      <label>
        Last Name:&nbsp;
        <input
          name="last_name"
          type="text"
          onChange={onInputChange}
          value={formValues.last_name}
        />
      </label>
      <label>
        Email:&nbsp;
        <input
          name="email"
          type="email"
          onChange={onInputChange}
          value={formValues.email}
        />
      </label>
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
        <div>{formErrors.first_name}</div>
        <div>{formErrors.last_name}</div>
        <div>{formErrors.email}</div>
        <div>{formErrors.username}</div>
        <div>{formErrors.password}</div>
      </div>
    </form>
  );
}
