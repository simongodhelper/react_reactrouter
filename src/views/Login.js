import Layout from "../components/Layout";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <Layout>
      <div class="bg-white border login_div">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <span className="error">安安您哪位?</span>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3 d_b" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <span className="error">安安您哪位?</span>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <Link to="/" className="btn-primary">
            <Button variant="primary" type="submit">
              登入
            </Button>
          </Link>
        </Form>
      </div>
    </Layout>
  );
};

export default Login;
