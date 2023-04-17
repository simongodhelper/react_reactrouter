import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Header = ({
  title = "My Website",
  subtitle = "Welcome to my website",
}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");

  useEffect(() => {
    // 检查用户是否已经登录
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setIsLoggedIn(true);
      setUsername(user.username);
    }
  }, []);

  return (
    <header
      className="py-5 text-white bg-dark text-center"
      style={{ position: "relative" }}
    >
      <div className="login_header">
        {isLoggedIn ? (
          <span>{username}，您回來了</span>
        ) : (
          <span>安安請登入：</span>
        )}
        <Link to="/Login" className="">
          Login
        </Link>
        <Link to="/Sign-up" className="">
          Sign-up
        </Link>
      </div>

      <h1>{title}</h1>
      <p>{subtitle}</p>
      <Link to="/" className="btn btn-primary me-2">
        ALL
      </Link>
      <Link to="/about" className="btn btn-primary">
        3C商品
      </Link>
    </header>
  );
};

export default Header;
