import { Link } from "react-router-dom";

const Header = ({
  title = "My Website",
  subtitle = "Welcome to my website",
}) => {
  return (
    <header
      className="py-5 text-white bg-dark text-center"
      style={{ position: "relative" }}
    >
      <Link to="/Login" className="login_info">
        Login
      </Link>
      <Link to="/Sign-up" className="SignUp_info">
        Sign-up
      </Link>

      <h1>{title}</h1>
      <p>{subtitle}</p>
      <Link to="/" className="btn btn-primary me-2">
        Home
      </Link>
      <Link to="/about" className="btn btn-primary">
        About
      </Link>
    </header>
  );
};

export default Header;
