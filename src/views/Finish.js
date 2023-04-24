import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const FinishView = () => {
  return (
    <div
      style={{
        backgroundColor: "#000",
        color: "#fff",
        height: "100vh",
        fontSize: "6em",
        textAlign: "center",
      }}
    >
      <p>呵呵，您的信用卡資訊已經在我們手裡了!!</p>
      <Link to="/">
        <Button
          variant="primary"
          type="submit"
          className="btn btn-lg btn-primary"
        >
          回首頁
        </Button>
      </Link>
    </div>
  );
};

export default FinishView;
