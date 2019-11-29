import React, { Component } from "react";
import Aux from "../../hoc/auxilary";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import styles from "./button.css";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import Backdrop from "../../components/UI/Backdrop/Backdrop";
import Spinner from "../../components/UI/Spinner/Spinner";
import { connect } from "react-redux";
import * as actionTypes from "../../store/action";

const INGRIEDIENT_PRICES = {
  salad: 15,
  meat: 45,
  cheese: 30,
  bacon: 40
};
class burgerbuilder extends Component {
  state = {
    purchasable: false,
    OrderSummary: true,
    loading: false
  };

  componentDidMount() {
    console.log(this.props);
  }

  addIngredient = type => {
    const oldIngriedientCount = this.state.ingredients[type];
    const newIngriedientCount = oldIngriedientCount + 1;
    const updateIngriedient = {
      ...this.state.ingredients
    };
    updateIngriedient[type] = newIngriedientCount;
    const newPrice = INGRIEDIENT_PRICES[type];
    const oldPrice = this.props.price;
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
    const oldPrice = this.props.price;
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
    // var queryParams = "";
    // for (let i in this.state.ingredients) {
    //   queryParams += i + "=" + this.state.ingredients[i] + "&";
    // }
    // queryParams += "price=" + this.props.price;

    // this.props.history.push({ pathname: "/checkout", search: queryParams });
    this.props.history.push('/checkout')
  };

  render() {
    let order = (
      <OrderSummary
        cancelOrder={this.cancelOrder}
        purchaseConfirm={this.purchaseConfirm}
        totalPrice={this.props.price}
        ingredients={this.props.ings}
      />
    );
    if (this.state.loading || !this.props.ings) {
      order = <Spinner />;
    }
    let burger = <Spinner />;
    if (this.props.ings) {
      burger = (
        <Aux>
          <Burger ingredients={this.props.ings} />
          <BuildControls
            totalPrice={this.props.price}
            ingredientsAdded={this.props.onIngredientAdd}
            purchasable={this.props.purchasable}
            ingredientRemoved={this.props.onIngredientRemove}
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
          disabled={!this.props.purchasable}
          onClick={this.order}
        >
          Buy
        </button>
      </Aux>
    );
  }
}

const mapStatetoProps = state => {
  return { ings: state.ingredients, price: state.totalPrice,purchasable:state.purchasable };
};

const mapDispatchtoProps = dispatch => {
  return {
    onIngredientAdd: ing_name =>
      dispatch({ type: actionTypes.ADD_INGREDIENT, ingredientname: ing_name }),
    onIngredientRemove: ing_name =>
      dispatch({
        type: actionTypes.REMOVE_INGREDIENT,
        ingredientname: ing_name
      })
  };
};

export default connect(mapStatetoProps, mapDispatchtoProps)(burgerbuilder);
