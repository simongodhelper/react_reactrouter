import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import "bootstrap/dist/css/bootstrap.min.css";

const SignUpView = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const formSubmitHandler = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(getAuth(), email, password)
      .then((res) => {
        localStorage.setItem("user", JSON.stringify({ username: name }));
        navigate("/");
      })
      .catch((err) => {
        console.log("註冊失敗", err);
        alert("註冊失敗");
      });
  };

  return (
    <Layout title="註冊頁" subtitle="Welcome Sign-up">
      <div class="bg-white border login_div">
        <form onSubmit={formSubmitHandler}>
          <div className="mb-3">
            <label htmlFor="signUpEmail">Email:</label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="signUpEmail"
              className="form-control"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="signUpPassword">Password:</label>
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
            <label htmlFor="signUpName">Name:</label>
            <input
              onChange={(e) => setName(e.target.value)}
              type="text"
              id="signUpName"
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
