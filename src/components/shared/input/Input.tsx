import React from "react";
import styles from "./input.module.scss";

interface Props {
  classes: string | null;
  type: string;
  id: string;
  value: string;
  onBlur: (event: React.FocusEvent<HTMLInputElement, Element>) => void;
  onChange: (event: React.FocusEvent<HTMLInputElement, Element>) => void;
}
const Input: React.FC<Props> = (props) => {
  return (
    <div className={`${styles.formControl} ${props.classes}`}>
      <label htmlFor="name">Name:</label>
      <input
        type={props.type}
        id={props.id}
        value={props.value}
        onBlur={props.onBlur}
        onChange={props.onChange}
      />
    </div>
  );
};

export default Input;
