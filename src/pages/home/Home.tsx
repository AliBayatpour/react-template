import React from "react";
import Input from "../../components/shared/input/Input";
import useInput from "../../hooks/use-input";
import styles from "./home.module.scss";

const Home: React.FC = () => {
  const isNotEmpty = (value: string) => value.trim() !== "";
  const isEmail = (value: string) => value.includes("@");
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput(isNotEmpty);
  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput(isEmail);

  let formIsValid = false;
  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  //* SUBMIT FORM FUNCTION
  const formSubmissionHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!enteredNameIsValid) {
      return;
    }
    resetNameInput();
    resetEmailInput();
  };

  return (
    <div className="container">
      <form onSubmit={formSubmissionHandler}>
        <Input
          type="text"
          id="name"
          name="Name"
          value={enteredName}
          onBlur={nameBlurHandler}
          onChange={nameChangeHandler}
          hasError={nameHasError}
        />
        <Input
          type="text"
          id="email"
          name="Email"
          value={enteredEmail}
          onBlur={emailBlurHandler}
          onChange={emailChangeHandler}
          hasError={emailHasError}
        />

        <button
          className={`${styles["submitBut"]} ${
            !formIsValid && styles["submitBut--disabled"]
          }`}
          disabled={!formIsValid}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Home;
