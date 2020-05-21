import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  Button,
} from "reactstrap";
import envelope_regular from "../../img/envelope_regular.svg";
import lock_solid from "../../img/lock_solid.svg";
import "./style.scss";
import { SignInFirebase, SingUpFirebase } from "../../firebase/actions";
import history from "../../lib/history";
import { Link } from "react-router-dom";

function Signup(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [error, setError] = useState("");
  const changeEmail = (e) => {
    setEmail(e.target.value);
    setError("");
  };
  const changePassword = (e) => {
    setPassword(e.target.value);
    setError("");
  };
  const changePasswordConfirm = (e) => {
    setPasswordConfirm(e.target.value);
    setError("");
  };
  const { SingUpFirebase } = props;

  const Signup = () => {
    if (email !== "") {
      if (password !== "" && passwordConfirm !== "") {
        if (password === passwordConfirm && password.length >= 6) {
          SingUpFirebase(email, password);
        } else {
          setError("password");
        }
      } else {
        setError("password");
      }
    } else {
      setError("email");
    }
  };
  useEffect(() => {
    history.push("/signup");
  }, []);
  return (
    <div className="login">
      <div className="login_box_white">
        <div className="login_logo">
          <p>
            Photo<span>G</span>
          </p>
        </div>
        <div className="login_form">
          <p className="login_text">Member signup</p>
          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>
                <img src={envelope_regular} alt="email" />
              </InputGroupText>
            </InputGroupAddon>
            <Input
              invalid={error === "email" ? true : false}
              placeholder="email"
              onChange={changeEmail}
            />
          </InputGroup>
          <br />
          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>
                <img src={lock_solid} alt="password" />
              </InputGroupText>
            </InputGroupAddon>
            <Input
              type="password"
              invalid={error === "password" ? true : false}
              placeholder="password"
              onChange={changePassword}
            />
          </InputGroup>
          <br />
          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>
                <img src={lock_solid} alt="password" />
              </InputGroupText>
            </InputGroupAddon>
            <Input
              type="password"
              invalid={error === "password" ? true : false}
              placeholder="confirm password"
              onChange={changePasswordConfirm}
            />
          </InputGroup>
          <br />
          <Button color="primary" className="login_btn" onClick={Signup}>
            SIGNUP
          </Button>
          <Link to="/login">
            {" "}
            <p className="create">Already have account?</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state, ownProp) => ({});

const mapDispatchToProps = {
  SingUpFirebase,
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
