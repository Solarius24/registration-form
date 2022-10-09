import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [values, setValue] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false)

  const firstNameInouttHandler = (e) => {
    setValue({ ...values, firstName: e.target.value });
  };

  const lastNameInouttHandler = (e) => {
    setValue({ ...values, lastName: e.target.value });
  };

  const emailInouttHandler = (e) => {
    setValue({ ...values, email: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if(values.firstName && values.lastName && values.email) {
        setValid(true)
    }
    setSubmitted(true);

  };

  return (
    <div>
      <form className="container" onSubmit={submitHandler}>
        <div className="title">USER REGISTRATION FORM</div>
        {submitted && valid ? (
          <div className="message">Success.Thank you for registration</div>
        ) : null}
        <input
          onChange={firstNameInouttHandler}
          value={values.firstName}
          type="text"
          placeholder="Enter First Name"
        />
        {submitted && !values.firstName ? (
          <span> Please enter valid first name</span>
        ) : null}

        <input
          onChange={lastNameInouttHandler}
          value={values.lastName}
          type="text"
          placeholder="Enter Last Name"
        />
        {submitted && !values.lastName ? (
          <span> Please enter valid last name</span>
        ) : null}

        <input
          onChange={emailInouttHandler}
          value={values.email}
          type="text"
          placeholder="Enter Email Address"
        />
        {submitted && !values.email ? (
          <span> Please enter valid email address</span>
        ) : null}

        <button>REGISTER</button>
      </form>
    </div>
  );
};

export default App;
