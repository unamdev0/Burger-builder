import React, { Component } from "react";
import Spinner from "../../../components/UI/Spinner/Spinner";
import Button from "../../../components/UI/Button/Button";
import styles from "./ContactData.css";
import orderInstance from "../../../axios-order";
import Input from "../../../components/UI/Input/Input";

class ContactData extends Component {
  state = {
    orderDetails: {
      name: {
        value: "",
        name: "name",
        type: "text",
        placeholder: "Your Name"
      },
      email: {
        value: "",
        name: "email",
        type: "email",
        placeholder: "Your E-mail"
      },
      address: {
        value: "",
        name: "address",
        type: "text",
        placeholder: "Your Address"
      }
    },
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
    this.props.history.push("/");
  };

  render() {
    let formElement = [];
    for (let key in this.state.orderDetails) {
      formElement.push(this.state.orderDetails[key]);
    }
    let form = (
      <form>
        {formElement.map(element => {
          return (
            <Input
              label={element.name}
              type={element.type}
              placeholder={element.placeholder}
              name={element.name}
            />
          );
        })}
        <Button btnType="Success" clicked={this.order}>
          Order
        </Button>
      </form>
    );
    if (this.state.loading) {
      form = <Spinner />;
    }
    return (
      <div className={styles.ContactData}>
        <h4>Enter your details</h4>
        {form}
      </div>
    );
  }
}

export default ContactData;
