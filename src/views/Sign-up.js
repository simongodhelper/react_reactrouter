import { useState } from "react";
import auth from "../lib/db";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { createUserWithEmailAndPassword } from "firebase/auth";
import Layout from "../components/Layout";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

const SignUpView = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const formSubmitHandler = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        navigate("/");
      })
      .catch((err) => {
        console.log("註冊失敗", err);
        alert("註冊失敗");
      });
  };

  const title = "註冊頁";
  const subtitle = "Welcome Sign-up";

  return (
    <Layout title={title} subtitle={subtitle}>
      <div class="bg-white border login_div">
        <form onSubmit={formSubmitHandler}>
          <div className="mb-3">
            <label htmlFor="signUpEmail">Email: {email}</label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="signUpEmail"
              className="form-control"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="signUpPassword">Password: {password}</label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              minLength={8}
              type="password"
              id="signUpPassword"
              className="form-control"
              required
            />
          </div>
          <div className="mb-3">
            <button className="btn btn-primary">Create Account</button>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default SignUpView;
