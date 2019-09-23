import React  from "react";
import styles from "./Input.css";

const Input = props => {
  return (
    <div className={styles.Input}> 
      <label className={styles.Label}>{props.label}</label>
      <input className={styles.InputElement} onChange ={props.changed} {...props} />
    </div>
  );
};

export default Input;
