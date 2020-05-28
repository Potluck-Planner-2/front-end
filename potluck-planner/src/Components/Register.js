import React, { useState, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';
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

const initialDisabled = true;

export default function Register(props) {
  // slice of state to hold the current form values
  const [formValues, setFormValues] = useState(initialFormValues);
  // slice of state to hold the errors, which update based on validation
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  // slice of state to determine button clickability
  const [disabled, setDisabled] = useState(initialDisabled);

  let history = useHistory();

  const postNewUser = (newUser) => {
    axios
      // post the new user (form data) to the /users endpoint
      .post('https://potluck-planner-1111.herokuapp.com/api/users', newUser)
      .then((res) => {
        console.log(res);
        // navigate to the log in page so they can sign in with new account
        history.push('/login');
      })
      .catch((err) => {
        console.log(err);
      });
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
    <div>
      <h1>New User Registration</h1>
      <div className="navigation-container">
        <nav className="navigation">
          <Link to="/">Login</Link>
          <Link to="/register">Register</Link>
          <Link to="/potlucks">My Potlucks</Link>
          <Link to="/potlucks/create">Create a Potluck</Link>
          <Link to="/potlucks/invites">My Invites</Link>
        </nav>
      </div>
      <div className="form-container">
        <form onSubmit={onSubmit}>
          <label>
            First Name:&nbsp;
            <input
              name="first_name"
              type="text"
              onChange={onInputChange}
              value={formValues.first_name}
            />
          </label>
          <div className="form-error">{formErrors.first_name}</div>
          <label>
            Last Name:&nbsp;
            <input
              name="last_name"
              type="text"
              onChange={onInputChange}
              value={formValues.last_name}
            />
          </label>
          <div className="form-error">{formErrors.last_name}</div>
          <label>
            Email:&nbsp;
            <input
              name="email"
              type="email"
              onChange={onInputChange}
              value={formValues.email}
            />
          </label>
          <div className="form-error">{formErrors.email}</div>
          <label>
            Username:&nbsp;
            <input
              name="username"
              type="text"
              onChange={onInputChange}
              value={formValues.username}
            />
          </label>
          <div className="form-error">{formErrors.username}</div>
          <label>
            Password:&nbsp;
            <input
              name="password"
              type="password"
              onChange={onInputChange}
              value={formValues.password}
            />
          </label>
          <div className="form-error">{formErrors.password}</div>

          <button disabled={disabled}>Submit</button>
        </form>
      </div>
    </div>
  );
}
