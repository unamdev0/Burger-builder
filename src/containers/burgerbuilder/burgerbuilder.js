import React, { Component } from "react";
import Aux from "../../hoc/auxilary";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import styles from "./button.css";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import Backdrop from "../../components/UI/Backdrop/Backdrop";
import orderInstance from "../../axios-order";
import Spinner from "../../components/UI/Spinner/Spinner";
import Axios from "axios";

const INGRIEDIENT_PRICES = {
  salad: 15,
  meat: 45,
  cheese: 30,
  bacon: 40
};
class burgerbuilder extends Component {
  state = {
    ingredients: null,
    totalPrice: 0,
    purchasable: false,
    OrderSummary: true,
    loading: false
  };

  componentDidMount() {
    Axios.get("https://react-app-3608f.firebaseio.com/ingredients.json").then(
      response => {
        console.log(response);
        this.setState({ ingredients: response.data });
      }
    );
  }

  addIngredient = type => {
    const oldIngriedientCount = this.state.ingredients[type];
    const newIngriedientCount = oldIngriedientCount + 1;
    const updateIngriedient = {
      ...this.state.ingredients
    };
    updateIngriedient[type] = newIngriedientCount;
    const newPrice = INGRIEDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const updatedPrice = oldPrice + newPrice;

    this.setState({
      ingredients: updateIngriedient,
      totalPrice: updatedPrice
    });
    this.buyItems(updatedPrice);
  };

  removeIngredient = type => {
    const oldIngriedientCount = this.state.ingredients[type];
    const newIngriedientCount = oldIngriedientCount - 1;
    var updateIngriedient = {
      ...this.state.ingredients
    };

    updateIngriedient[type] = newIngriedientCount;
    const newPrice = INGRIEDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    if (this.state.ingredients[type] > 0) {
      var updatedPrice = oldPrice - newPrice;
    } else {
      updatedPrice = oldPrice;
    }
    if (updatedPrice < 0) {
      updatedPrice = 0;
    }
    if (updateIngriedient[type] < 0) {
      updateIngriedient[type] = 0;
    }
    this.setState({
      ingredients: updateIngriedient,
      totalPrice: updatedPrice
    });
    this.buyItems(updatedPrice);
  };

  buyItems = updatedPrice => {
    if (updatedPrice > 0) {
      this.setState({ purchasable: true });
    } else {
      this.setState({ purchasable: false });
    }
  };

  order = () => {
    this.setState({ OrderSummary: false });
  };

  cancelOrder = () => {
    this.setState({ OrderSummary: true });
  };
  purchaseConfirm = () => {
    var queryParams = "";
    for (let i in this.state.ingredients) {
      queryParams += i + "=" + this.state.ingredients[i] + "&";
    }
    queryParams = queryParams.substring(0, queryParams.length- 1);
    console.log(queryParams);

    this.props.history.push({ pathname: "/checkout", search: queryParams });
  };

  render() {
    let order = (
      <OrderSummary
        cancelOrder={this.cancelOrder}
        purchaseConfirm={this.purchaseConfirm}
        totalPrice={this.state.totalPrice}
        ingredients={this.state.ingredients}
      />
    );
    if (this.state.loading || !this.state.ingredients) {
      order = <Spinner />;
    }
    let burger = <Spinner />;
    if (this.state.ingredients) {
      burger = (
        <Aux>
          <Burger ingredients={this.state.ingredients} />
          <BuildControls
            totalPrice={this.state.totalPrice}
            ingredientsAdded={this.addIngredient}
            purchasable={this.state.purchasable}
            ingredientRemoved={this.removeIngredient}
          />
        </Aux>
      );
    }
    return (
      <Aux>
        <Backdrop clicked={this.cancelOrder} show={!this.state.OrderSummary} />
        <Modal isVisible={this.state.OrderSummary}>{order}</Modal>
        {burger}
        <button
          className={styles.OrderButton}
          disabled={!this.state.purchasable}
          onClick={this.order}
        >
          Buy
        </button>
      </Aux>
    );
  }
}

export default burgerbuilder;
