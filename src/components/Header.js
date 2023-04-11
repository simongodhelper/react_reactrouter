import { Link } from "react-router-dom";

const Header = ({
  title = "My Website",
  subtitle = "Welcome to my website",
}) => {
  return (
    <header className="py-5 text-white bg-dark text-center">
      <h1>{title}</h1>
      <p>{subtitle}</p>
      <Link to="/" className="btn btn-primary">
        Home
      </Link>
      <Link to="/about" className="btn btn-primary">
        About
      </Link>
      <Link to="/add" className="btn btn-primary">
        Add
      </Link>
    </header>
  );
};

export default Header;
