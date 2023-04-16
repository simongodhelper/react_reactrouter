import { useState } from "react";
import auth from "../lib/db";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import { signInWithEmailAndPassword } from "firebase/auth";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

const Login = () => {
  const title = "登入頁";
  const subtitle = "Welcome Login";

  // const [狀態, 設定狀態的函數] = useState(狀態初始值)
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

  return (
    <Layout title={title} subtitle={subtitle}>
      <div class="bg-white border login_div">
        <Form onSubmit={formSubmitHandler}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <span className="error">安安您哪位?</span>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="signUpEmail"
              className="form-control"
              required
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3 d_b" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <span className="error">安安您哪位?</span>
            <input
              onChange={(e) => setPassword(e.target.value)}
              minLength={8}
              type="password"
              id="signUpPassword"
              className="form-control"
              required
            />
          </Form.Group>

          <div className="mb-3">
            <button className="btn btn-primary">Login</button>
          </div>
        </Form>
        <Link to="../Sign-up" className="">
          還沒入坑?
        </Link>
      </div>
    </Layout>
  );
};

export default Login;
