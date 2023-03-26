// -- React and related libs
import React from "react";
import { Switch, Route, Redirect } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";

// -- Redux
import { connect } from "react-redux";

// -- Custom Components
import LayoutComponent from "./components/Layout/Layout";
import ErrorPage from "./pages/error/ErrorPage";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import GreenPoint from "./pages/greenpoint/greenpoint";
import GreenPointRedemption from "./pages/greenPointRedemption/greenPointRedemption";

// -- Redux Actions
import { logoutUser } from "./actions/auth";

// -- Third Party Libs
import { ToastContainer } from "react-toastify";

// -- Services
import isAuthenticated from "./services/authService";

// -- Component Styles
import "./styles/app.scss";
import Landing from "./pages/landing/Landing";

const PrivateRoute = ({ dispatch, component, ...rest }) => {
  if (!isAuthenticated(JSON.parse(sessionStorage.getItem("authenticated")))) {
    dispatch(logoutUser());
    return (<Redirect to="/login" />)
  } else {
    return (
      <Route {...rest} render={props => (React.createElement(component, props))} />
    );
  }
};

const App = (props) => {
  return (
    <div style={{ maxWidth: '1232px', margin: 'auto' }}>
      <ToastContainer />
      <Router>
        <Switch>
          {/* <Route path="/" exact render={() => <Redirect to="/template/dashboard" />} /> */}
          <Route path="/" exact render={Landing} />
          <Route path="/template" exact render={() => <Redirect to="/template/dashboard" />} />
          <PrivateRoute path="/template" dispatch={props.dispatch} component={LayoutComponent} />
          <Route path="/login" exact component={Login} />
          <Route path="/error" exact component={ErrorPage} />
          <Route path="/register" exact component={Register} />
          <Route path="/greenpoint" component={GreenPoint} />
          <Route path="/greenpoint-info" component={GreenPointRedemption} />   
          <Route component={ErrorPage} />
          <Route path='*' exact={true} render={() => <Redirect to="/error" />} />
        </Switch>
      </Router>
    </div>
  );
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(App);
