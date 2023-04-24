import { useState } from "react";
import firebase from "../lib/db";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import { signInWithEmailAndPassword } from "firebase/auth";
import { ref, child, get } from "firebase/database";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

const Login = () => {
  // const [狀態, 設定狀態的函數] = useState(狀態初始值)
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const formSubmitHandler = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(firebase.auth, email, password)
      .then((res) => {
        console.log("使用者資訊：", res.user);
        const dbRef = ref(firebase.db);
        const userRef = child(dbRef, "users/" + res.user.uid);
        get(userRef)
          .then((snapshot) => {
            if (snapshot.exists()) {
              const user = snapshot.val();
              localStorage.setItem(
                "user",
                JSON.stringify({ username: user.name })
              );
              navigate("/");
            }
          })
          .catch((err) => {
            //TODO: error handling
          });
      })
      .catch((err) => {
        console.log("登入失敗", err);
        alert("登入失敗");
      });
  };

  return (
    <Layout title="登入頁" subtitle="Welcome Login">
      <div className="flex-grow-1">
        <div class="bg-white border login_div">
          <Form onSubmit={formSubmitHandler}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <span className="error">安安您哪位?</span>
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                id="signUpEmail"
                className="form-control"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
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
      </div>
    </Layout>
  );
};

export default Login;
