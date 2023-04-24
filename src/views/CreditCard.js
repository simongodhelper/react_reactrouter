import Layout from "../components/Layout";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

const CreditCard = () => {
  return (
    <Layout>
      <div className="flex-grow-1">
        <div class="bg-white border login_div">
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>信用卡卡號</Form.Label>
              <span className="error">不要想不開</span>
              <div style={{ display: "flex", gap: "0.3em" }}>
                <Form.Control type="text" placeholder="" maxlength="4" />
                <Form.Control type="text" placeholder="" maxlength="4" />
                <Form.Control type="text" placeholder="" maxlength="4" />
                <Form.Control type="text" placeholder="" maxlength="4" />
              </div>
            </Form.Group>

            <Form.Group className="mb-3 d_b" controlId="formId">
              <Form.Label>請輸入末3碼</Form.Label>
              <span className="error">不要想不開</span>
              <Form.Control
                type="text"
                placeholder=""
                maxlength="3"
                style={{ width: "55px" }}
              />
            </Form.Group>

            <Form.Group className="mb-3 d_b" controlId="formBank">
              <Form.Label>收件人手機</Form.Label>
              <span className="error">千萬不要想不開</span>
              <Form.Control
                type="text"
                placeholder="請輸入收件人手機"
                maxlength="10"
              />
            </Form.Group>

            <Link to="/Finish" className="btn btn-lg btn-primary">
              <Button type="submit" style={{ fontSize: 28 }}>
                確定不後悔?
              </Button>
            </Link>
          </Form>
        </div>
      </div>
    </Layout>
  );
};

export default CreditCard;
