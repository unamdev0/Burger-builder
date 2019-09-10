import React, { Component } from "react";
import CheckoutSummary from "../../components/order/checkoutSummary";

class Checkout extends Component {
  cancel = () => {
    this.props.history.goBack();
  };

  continue = () => {
    this.props.history.replace("/chekcout/contact-data");
  };
  state = {
    ingredients: {}
  };
  componentDidMount() {
    var queryParams = this.props.location.search.split("&");
    queryParams[0] = queryParams[0].substring(1);
    var ingredients = {};
    for (let i in queryParams) {
      ingredients[
        queryParams[i].substring(0, queryParams[i].length - 2)
      ] = Number(queryParams[i].substring(queryParams[i].length - 1));
    }
    this.setState({ ingredients });
  }
  render() {
    return (
      <div>
        <CheckoutSummary
          ingredients={this.state.ingredients}
          cancel={this.cancel}
          continue={this.continue}
        />
      </div>
    );
  }
}

export default Checkout;
