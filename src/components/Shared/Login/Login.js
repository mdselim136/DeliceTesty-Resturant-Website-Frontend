import React from "react";
import { FloatingLabel, Form } from "react-bootstrap";
import GoogleImage from "../image/search.png";
import GithubImage from "../image/github.png";
import useFirebase from "../useFirebase/useFirebase";
import "./Login.css";
import { Link } from "react-router-dom";

const Login = () => {
  const { signInWithGoogle } = useFirebase();

  const googleSign = () => {
    signInWithGoogle();
  };

  return (
    <div className="login_form_upper">
      <div className="login_form_inner">
        <h1 className="littleabout_title mb-5">Sign In</h1>
        <div className="log_in_form">
          <form action="#">
            <FloatingLabel
              controlId="floatingInput"
              label="Email address"
              className="mb-3"
            >
              <Form.Control
                type="email"
                className="input_box_log"
                placeholder="enter your email"
                required
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingInput"
              label="Enter password"
              className="mb-4 mt-4"
            >
              <Form.Control
                type="password"
                placeholder="enter your password"
                required
              />
            </FloatingLabel>

            <button className="login_submit_button" type="submit">
              Log In
            </button>
          </form>
        </div>
        <div className="authprovider_sign_in">
          <p className="text-center mt-3 fw-bold">
            No Account ?{" "}
            <Link className="text-decoration-none" to="/register">
              Register Now
            </Link>
          </p>
          <p className="text-center mt-3 fw-bold">Or Sign in With</p>
          <div className="d-flex justify-content-around mt-3">
            <div className="auth_inner">
              <img
                width={50}
                src={GoogleImage}
                onClick={googleSign}
                alt="google-icon"
              />
            </div>
            <div className="auth_inner">
              <img
                width={50}
                src={GithubImage}
                onClick={googleSign}
                alt="google-icon"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
