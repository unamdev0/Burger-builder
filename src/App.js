import React from "react";
import Layout from "./components/Layout/Layout";
import Burgerbuilder from "./containers/burgerbuilder/burgerbuilder";
import Checkout from "./containers/Checkout/checkout";
import { Route, Switch } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div>
      <Layout>
        <Switch>
          <Route path="/checkout" exact component={Checkout} />
          <Route path="/" exact component={Burgerbuilder} />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
