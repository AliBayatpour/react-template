import React from "react";
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

  const nameInputclasses = nameHasError ? styles["formControl--invalid"] : null;
  const emailInputclasses = emailHasError
    ? styles["formControl--invalid"]
    : null;
  return (
    <div className="container">
      <form onSubmit={formSubmissionHandler}>
        <div className={`${styles.formControl} ${nameInputclasses}`}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={enteredName}
            onBlur={nameBlurHandler}
            onChange={nameChangeHandler}
          />
        </div>
        <div className={`${styles.formControl} ${emailInputclasses}`}>
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            value={enteredEmail}
            onBlur={emailBlurHandler}
            onChange={emailChangeHandler}
          />
          {emailHasError && (
            <p className={styles.errorText}>Email is not valid</p>
          )}
        </div>
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
