import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar, Sidebar, Footer } from "./components";
import {
  Home,
  Products,
  SingleProduct,
  Error,
  Checkout,
  Cart,
  PrivateRoute,
  About,
} from "./pages";

function App() {
  return (
    <Router>
      <Navbar />
      <Sidebar />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/about" exact>
          <About />
        </Route>
        <Route path="/cart" exact>
          <Cart />
        </Route>
        <Route path="/products" exact>
          <Products />
        </Route>
        <Route path="/products/:id" exact children={<SingleProduct />}></Route>
        <PrivateRoute path="/checkout" exact>
          <Checkout />
        </PrivateRoute>
        <Route path="*" exact>
          <Error />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
