import React, { useState } from "react";
import PropTypes from "prop-types";
import { withRouter, Redirect, Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  Container,
  Row,
  Col,
  Button,
  FormGroup,
  FormText,
  Input,
} from "reactstrap";
import Widget from "../../components/Widget/Widget.js";
import Footer from "../../components/Footer/Footer.js";

import loginImage from "../../assets/registerImage.svg";
import { registerUser } from "../../actions/register.js";
import hasToken from "../../services/authService";
import CommonHeader from "../../components/Header.js";

const Register = (props) => {
  const [state, setState] = useState({} )

  const changeCred = (event) => {
    setState({ ...state, [event.target.name]: event.target.value })
  }

  const doRegister = (event) => {
    event.preventDefault();
    props.dispatch(registerUser({
      creds: state,
      history: props.history,
    }))
  }

  const { from } = props.location.state || { from: { pathname: '/template' } }

  if (hasToken(JSON.parse(sessionStorage.getItem('authenticated')))) {
    return (
      <Redirect to={from} />
    );
  }

  return (
    <div className="auth-page">
      <CommonHeader />
      <Container className="col-12">
        <Row className="d-flex align-items-center">
          <Col xs={12} lg={6} className="left-column">
            <Widget className="widget-auth widget-p-lg">
              <div className="d-flex align-items-center justify-content-between py-3">
                <p className="auth-header mb-0">Sign Up</p>
              </div>
              <form onSubmit={(event => doRegister(event))}>
              <FormGroup  className="my-3">
                  <div className="d-flex justify-content-between">
                    <FormText>Name</FormText>
                  </div>
                  <Input
                    id="name"
                    className="input-transparent pl-3"
                    value={state.name}
                    onChange={(event => changeCred(event))}
                    type="text"
                    required
                    name="name"
                    placeholder="Enter your name here"
                  />
                </FormGroup>
                <FormGroup  className="my-3">
                  <div className="d-flex justify-content-between">
                    <FormText>Company Name</FormText>
                  </div>
                  <Input
                    id="name"
                    className="input-transparent pl-3"
                    value={state.companyName}
                    onChange={(event => changeCred(event))}
                    type="text"
                    required
                    name="companyName"
                    placeholder="Enter your company's name here"
                  />
                </FormGroup>
                <FormGroup  className="my-3">
                  <div className="d-flex justify-content-between">
                    <FormText>Business Address</FormText>
                  </div>
                  <Input
                    id="Address"
                    className="input-transparent pl-3"
                    value={state.Address}
                    onChange={(event => changeCred(event))}
                    type="text"
                    required
                    name="Address"
                    placeholder="Enter your address here"
                  />
                </FormGroup>
                <FormGroup className="my-3">
                  <FormText>Business Email</FormText>
                  <Input
                    id="email"
                    className="input-transparent pl-3"
                    value={state.email}
                    onChange={(event) => changeCred(event)}
                    type="email"
                    required
                    name="email"
                    placeholder="Enter your email here"
                  />
                </FormGroup>
                <FormGroup  className="my-3">
                  <div className="d-flex justify-content-between">
                    <FormText>Password</FormText>
                  </div>
                  <Input
                    id="password"
                    className="input-transparent pl-3"
                    value={state.password}
                    onChange={(event => changeCred(event))}
                    type="password"
                    required
                    name="password"
                    placeholder="Place your password here"
                  />
                </FormGroup>
                <FormGroup  className="my-3">
                  <div className="d-flex justify-content-between">
                    <FormText>Confirm Password</FormText>
                  </div>
                  <Input
                    id="confirmPassword"
                    className="input-transparent pl-3"
                    value={state.confirmPassword}
                    onChange={(event => changeCred(event))}
                    type="password"
                    required
                    name="confirmPassword"
                    placeholder="Retype your password here"
                  />
                </FormGroup>
                <div className="bg-widget d-flex justify-content-center">
                  <Button className="rounded-pill my-3" type="submit" color="secondary-red">Sign Up</Button>
                </div>
              </form>
            </Widget>
          </Col>
          <Col xs={0} lg={6} className="right-column">
            <div>
              <img src={loginImage} alt="Error page" />
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  )
}

Register.propTypes = {
  dispatch: PropTypes.func.isRequired,
}

function mapStateToProps(state) {
  return {
    isFetching: state.auth.isFetching,
    isAuthenticated: state.auth.isAuthenticated,
    errorMessage: state.auth.errorMessage,
  };
}

export default withRouter(connect(mapStateToProps)(Register));
