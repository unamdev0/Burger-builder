import React, { Component } from "react";
import CheckoutSummary from "../../components/order/checkoutSummary";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import ContactData from "./ContactData/ContactData";
class Checkout extends Component {
  cancel = () => {
    this.props.history.goBack();
  };

  continue = () => {
    this.props.history.replace("/checkout/contact-data");
  };
  state = {
    ingredients: {},
    totalPrice:null,
  };
  componentWillMount() {
    // var queryParams = this.props.location.search.split("&");
    // const totalPrice = queryParams.pop().split("=")[1];
    // queryParams[0] = queryParams[0].substring(1);
    // var ingredients = {};
    // for (let i in queryParams) {
    //   ingredients[
    //     queryParams[i].substring(0, queryParams[i].length - 2)
    //   ] = Number(queryParams[i].substring(queryParams[i].length - 1));
    // }
    // this.setState({ ingredients,totalPrice });

  }
  render() {
    return (
      <div>
        <CheckoutSummary
          ingredients={this.props.ings}
          cancel={this.cancel}
          continue={this.continue}
        />
        <Route
          exact
          path={this.props.match.path + "/contact-data"}
          component={ContactData}
        />
      </div>
    );
  }
}

const mapStatetoProps = state => {
  return { ings: state.ingredients};
};


export default connect(mapStatetoProps)(Checkout);
