import React, { Component } from "react";
import Spinner from "../../../components/UI/Spinner/Spinner";
import Button from "../../../components/UI/Button/Button";
import styles from "./ContactData.css";
import orderInstance from "../../../axios-order";
import Input from "../../../components/UI/Input/Input";
import { connect } from "react-redux";

class ContactData extends Component {
  componentDidMount() {
    console.log(this.props);
  }
  state = {
    orderDetails: {
      name: {
        value: "",
        name: "name",
        type: "text",
        placeholder: "Your Name",
        valid: false
      },
      email: {
        value: "",
        name: "email",
        type: "email",
        placeholder: "Your E-mail",
        valid: false
      },
      address: {
        value: "",
        name: "address",
        type: "text",
        placeholder: "Your Address",
        valid: false
      }
    },
    loading: false
  };

  order = event => {
    event.preventDefault();
    let final_values = {};
    for (let formElement in this.state.orderDetails) {
      final_values[
        this.state.orderDetails[formElement].name
      ] = this.state.orderDetails[formElement].value;
    }
    console.log(final_values);
    this.setState({ loading: true });
    const orderSum = {
      ingredients: this.props.ings,
      price: this.props.price,
      owner: final_values,
      deliveryOption: "Fast"
    };
    orderInstance.post("/order.json", orderSum).then(respone => {
      this.setState({ loading: false });
    });
    this.props.history.push("/");
  };

  inputChangeHandler(event, inputName) {
    this.state.orderDetails[inputName].value = event.target.value;
  }

  render() {
    let formElement = [];
    for (let key in this.state.orderDetails) {
      formElement.push(this.state.orderDetails[key]);
    }
    let form = (
      <form onSubmit={this.order}>
        {formElement.map(element => {
          return (
            <Input
              label={element.name}
              type={element.type}
              placeholder={element.placeholder}
              name={element.name}
              changed={event => {
                this.inputChangeHandler(event, element.name);
              }}
            />
          );
        })}
        <Button btnType="Success">Order</Button>
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

const mapStateToProps = state => {
  return { ings: state.ingredients, price: state.totalPrice };
};

export default connect(mapStateToProps)(ContactData);
