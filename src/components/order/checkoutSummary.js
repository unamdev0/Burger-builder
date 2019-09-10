import React from "react";
import Burger from "../Burger/Burger";
import Button from "../UI/Button/Button";

const checkoutSUmmary = props => {
  return (
    <div>
      <h1>Hope you enjoy it!!</h1>
      <div style={{ width: "300px", height: "300px", margin: "auto" }}>
        <Burger ingredients={props.ingredients} />
      </div>
      <Button btnType="Danger">Cancel</Button>
      <Button btnType="Success">Continue</Button>
    </div>
  );
};
