import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";
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

  //form Id from formspark: https://dashboard.formspark.io/workspaces/T57Vw1Sh/forms/hBjgobgE/settings
  const formId = "hBjgobgE";
  const formSparkUrl = "https://submit-form.com/hBjgobgE";

  const { name, email, message } = formState;

  const [errorMessage, setErrorMessage] = useState("");

  function handleChange(e) {
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      console.log(isValid);
      // isValid conditional statement
      if (!isValid) {
        setErrorMessage("Your email is invalid.");
      } else {
        if (!e.target.value.length) {
          setErrorMessage(`${e.target.name} is required.`);
        } else {
          setErrorMessage("");
        }
      }
    }
    //we're using the setFormState function to update the formState value for the name property.
    //We assign the value taken from the input field in the UI with e.target.value and assign this value to the
    //property formState.name. We use the spread operator, ...formState, so we can retain the other key-value pairs in this object. Without the spread operator,
    //the formState object would be overwritten to only contain the name: value key pair.
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }

    console.log("errorMessage", errorMessage);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("formState: ", formState);

    const payload = formState;

    try {
      const result = axios.post(formSparkUrl, payload);
      console.log("result: ", result);
    } catch (error) {
      console.log("error: ", error);
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
            placeholder="First Name & Last Name"
            defaultValue={name}
            onBlur={handleChange}
            name="name"
          />
        </div>
        <div class="form-floating mb-3">
          <label for="floatingInput">Your Email address:</label>
          <input
            type="text"
            class="form-control"
            id="floatingInput"
            placeholder="Your Email"
            defaultValue={email}
            onBlur={handleChange}
            name="email"
          />
        </div>

        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            class="form-control"
            name="message"
            placeholder="Don't be shy!"
            defaultValue={message}
            onBlur={handleChange}
            rows="5"
          />

          {/* only want this message to appear if the errorMessage contains an error message. We can condition this render in JSX with the following conditional statement:  */}
          {errorMessage && (
            <div>
              <p className="error-text">{errorMessage}</p>
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
