import React, { useEffect } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Layout from "./components/Layout";
import LandingBage from "./components/pages/LandingBage";
import RegistrationForm from "./components/pages/RegistrationForm";
import ActiveUser from "./components/pages/ActiveUser";
import setAuthToken from "./components/utils/setAuthToken";
import { Provider } from "react-redux";
import store from "./store";
import {loadUser} from "./actions/auth_actions";

if (localStorage.token) {
  setAuthToken(localStorage);
}
function App() {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Layout>
        <Switch>
          <Route exact path="/" component={LandingBage} />
          <Route exact path="/signup" component={RegistrationForm} />
          <Route exact path="/auth/activate/:token" component={ActiveUser} />
        </Switch>
      </Layout>
    </Provider>
  );
}

export default App;
