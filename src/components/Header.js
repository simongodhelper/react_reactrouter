import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Header = ({
  title = "My Website",
  subtitle = "Welcome to my website",
}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");

  useEffect(() => {
    // 檢查使用者是否已經登入
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setIsLoggedIn(true);
      setUsername(user?.username);
    }
  }, []);

  const handleLogout = () => {
    // 設置logout狀態為false，並刪除本地存儲的使用者信息
    setIsLoggedIn(false);
    localStorage.removeItem("user");
  };

  return (
    <header
      className="py-5 text-white bg-dark text-center"
      style={{ position: "relative" }}
    >
      <div className="login_header">
        {isLoggedIn ? (
          <>
            <span>{username}，您回來了</span>
            <Link to="/" onClick={handleLogout}>
              Logout
            </Link>
          </>
        ) : (
          <>
            <span>安安請登入：</span>
            <Link to="/Login">Login</Link>
            <Link to="/Sign-up">Sign-up</Link>
          </>
        )}
      </div>

      <h1>{title}</h1>
      <p>{subtitle}</p>
      <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
        <Link to="/" className="btn btn-primary">
          ALL
        </Link>
        <Link to="/Computer" className="btn btn-primary">
          3C商品
        </Link>
        <Link to="/T1357" className="btn btn-primary">
          1357
        </Link>
      </div>
    </header>
  );
};

export default Header;
