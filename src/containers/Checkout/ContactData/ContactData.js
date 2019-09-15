import React, { Component } from "react";
import Button from "../../../components/UI/Button/Button";
import styles from "./ContactData.css";
import orderInstance from "../../../axios-order";

class ContactData extends Component {
  state = {
    name: "",
    email: "",
    address: "",
    loading: false
  };

  order = event => {
    event.preventDefault();
    console.log(this.props.ingredients);
    this.setState({ loading: true });
    const orderSum = {
      ingredients: this.props.ingredients,
      price: this.props.totalPrice,
      owner: {
        Name: "Udit-New",
        Address: "VIT university"
      },
      deliveryOption: "Fast"
    };
    orderInstance.post("/order.json", orderSum).then(respone => {
      this.setState({ loading: false });
    });
  };

  render() {
    return (
      <div className={styles.ContactData}>
        <h4>Enter your details</h4>
        <form>
          <input type="text" name="name" placeholder="Your Name"></input>
          <input type="email" name="email" placeholder="Your email"></input>
          <input type="text" name="address" placeholder="Your Address"></input>
          <Button btnType="Success" clicked={this.order}>
            Order
          </Button>
        </form>
      </div>
    );
  }
}

export default ContactData;
