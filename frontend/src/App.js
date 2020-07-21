import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import productComponent from "./components/productComponent";
import HeaderComponent from "./components/headerComponent";
import OrderComponent from "./components/orderComponent";
import OrderConfirmComponent from "./components/orderConfirmComponent";
import { StateProvider } from './store';
import FooterComponent from "./components/footerComponent";
import OrderListComponent from "./components/orderListComponent";
import { useAuth0 } from "@auth0/auth0-react";
import Loading from "./components/Loading";
import Landing from "./components/landingComponent";


const App = () => {
  const { isLoading } = useAuth0();
  const { isAuthenticated } = useAuth0();

  if (isLoading) {
    return <Loading />;
  }

  if (!isAuthenticated) {
    return (
      <div>
        <HeaderComponent />
        <Landing />
        <FooterComponent />
      </div>
    );
  }

  return (
    <Router>
      <StateProvider>
        <HeaderComponent />
        <div className="container">
          <Route path="/" exact component={productComponent} />
          <Route path="/newOrder" component={OrderComponent} />
          <Route path="/confirm" component={OrderConfirmComponent} />
          <Route path="/orders" component={OrderListComponent} />
        </div>
        <FooterComponent />
      </StateProvider>
    </Router>
  );
}
export default App;