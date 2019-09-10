import React from "react";
import Burger from "../Burger/Burger";
import Button from "../UI/Button/Button";

const checkoutSUmmary = props => {
  return (
    <div style={{textAlign:"center"}}>
      <h1>Hope you enjoy it!!</h1>
      <div style={{ width: "100%", height: "300px", margin: "auto" }}>
        <Burger ingredients={props.ingredients} />
      </div>
      <Button  clicked={props.cancel} btnType="Danger">Cancel</Button>
      <Button clicked ={props.continue} btnType="Success">Continue</Button>
    </div>
  );
};

export default checkoutSUmmary;
