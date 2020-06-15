import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Layout from "./components/Layout";
import LandingBage from "./components/pages/LandingBage";
import RegistrationForm from "./components/pages/RegistrationForm";
function App() {
  return (
    <Layout>
      
      <Switch>
        <Route exact path="/" component={LandingBage} />
        <Route exact path="/signup" component={RegistrationForm} />
      </Switch>
    </Layout>
  );
}

export default App;
