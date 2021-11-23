import React, { useState } from "react";
import {
  validateEmail,
  validateName,
  validateMessage,
} from "../../utils/helpers";
import axios from "axios";

function ContactForm() {
  //the Hook that'll manage the form data
  //A feature of this Hook is the ability to initialize the values of the state. In this case,
  // we want to clear the input fields on the component loading. Thus, we'll set the initial state to empty strings, to get the following expression:
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  //form Id from formspark: https://dashboard.formspark.io/
  const formId = "hBjgobgE";
  const formSparkUrl = `https://submit-form.com/${formId}`;

  const { name, email, message } = formState;

  const [errorMessage, setErrorMessage] = useState("");

  const [successMessage, setSuccessMessage] = useState("");

  function verifyForm(e) {
    //Email Validation
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      // isValid conditional statement
      if (!isValid) {
        setErrorMessage("Your email is invalid.");
      } else {
        if (!e.target.value) {
          setErrorMessage(`${e.target.name} is required.`);
        } else {
          setErrorMessage("");
        }
      }
    }

    //Name Validation
    if (e.target.name === "name") {
      const isValid = validateName(e.target.value);
      // isValid conditional statement
      if (!isValid) {
        setErrorMessage("Your name is required.");
      } else {
        if (!e.target.value) {
          setErrorMessage(`${e.target.name} is required.`);
        } else {
          setErrorMessage("");
        }
      }
    }

    //Message Validation
    if (e.target.name === "message") {
      const isValid = validateMessage(e.target.value);
      // isValid conditional statement
      if (!isValid) {
        setErrorMessage("Your message is required.");
      }
    }

    //we're using the setFormState function to update the formState value for the name property.
    //We assign the value taken from the input field in the UI with e.target.value and assign this value to the
    //property formState.name. We use the spread operator, ...formState, so we can retain the other key-value pairs in this object. Without the spread operator,
    //the formState object would be overwritten to only contain the name: value key pair.
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    const payload = formState;
    if (!errorMessage) {
      try {
        axios.post(formSparkUrl, payload);
      } catch (error) {
        alert("Uh Oh looks like there was an error: ", error);
      }
      setSuccessMessage("**Thank You!  I'll be in touch shortly!**");
    }
  }

  // JSX
  return (
    <section className="light-txt container">
      <h1>Contact me</h1>
      <form id="contact-form" onSubmit={handleSubmit}>
        <div class="form-floating mb-3">
          <label for="floatingInput">Your Name:</label>
          <input
            type="text"
            class="form-control"
            id="floatingInput"
            onBlur={verifyForm}
            placeholder="First Name & Last Name"
            defaultValue={name}
            name="name"
          />
        </div>
        <div class="form-floating mb-3">
          <label for="floatingInput">Your Email address:</label>
          <input
            type="text"
            class="form-control"
            id="floatingInput"
            onBlur={verifyForm}
            placeholder="Your Email"
            defaultValue={email}
            name="email"
          />
        </div>

        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            class="form-control"
            name="message"
            onBlur={verifyForm}
            id="floatingInput"
            placeholder="Don't be shy!"
            defaultValue={message}
            rows="5"
          />

          {/* only want this message to appear if the errorMessage contains an error message. We can condition this render in JSX with the following conditional statement:  */}
          {errorMessage && (
            <div>
              <p className="error-text">{errorMessage}</p>
            </div>
          )}
          {successMessage && (
            <div>
              <p className="success-text">{successMessage}</p>
            </div>
          )}

          <button type="submit" class="btn btn-primary p-2 m-2">
            Submit
          </button>
        </div>
      </form>
    </section>
  );
}

export default ContactForm;
