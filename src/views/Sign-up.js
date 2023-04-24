import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import "bootstrap/dist/css/bootstrap.min.css";

const SignUpView = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [creditCards, setCreditCards] = useState(["", "", "", ""]); // 存儲4組信用卡卡號
  const [creditCardThree, setCreditCardThree] = useState("");
  const [phone, setPhone] = useState("");

  const formSubmitHandler = (e) => {
    e.preventDefault();
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        const uid = res.user.uid;
        const database = getDatabase();
        set(ref(database, `users/${uid}`), {
          name: name,
          email: email,
          uid: uid,
          creditCards: creditCards,
          creditCardThree: creditCardThree,
          phone: phone,
        });
        localStorage.setItem("user", JSON.stringify({ username: name }));
        navigate("/");
      })
      .catch((err) => {
        console.log("註冊失敗", err);
        alert("註冊失敗");
      });
  };
  // 處理單個信用卡卡號輸入框的 onChange 事件
  const handleCreditCardChange = (e) => {
    const newCreditCards = [...creditCards];
    const index = parseInt(e.target.id.replace("txtBox", "")) - 1; // 获取当前输入框的索引
    newCreditCards[index] = e.target.value; // 更新该输入框对应的卡号
    setCreditCards(newCreditCards);
  };

  return (
    <Layout title="註冊頁" subtitle="Welcome Sign-up">
      <div className="flex-grow-1">
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
              <label htmlFor="">CreditCard:</label>
              <div className="card_div">
                <input
                  onChange={(e) => handleCreditCardChange(e)}
                  type="password"
                  id="txtBox1"
                  className="form-control"
                  maxLength="4"
                  required
                />
                <input
                  onChange={(e) => handleCreditCardChange(e)}
                  type="password"
                  id="txtBox2"
                  className="form-control"
                  maxLength="4"
                  required
                />
                <input
                  onChange={(e) => handleCreditCardChange(e)}
                  type="password"
                  id="txtBox3"
                  className="form-control"
                  maxLength="4"
                  required
                />
                <input
                  onChange={(e) => handleCreditCardChange(e)}
                  type="password"
                  id="txtBox4"
                  className="form-control"
                  maxLength="4"
                  required
                />
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="CreditBackThree">末三碼:</label>
              <input
                onChange={(e) => setCreditCardThree(e.target.value)}
                type="text"
                id="CreditBackThree"
                className="form-control"
                maxLength="3"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="signUpPhone">手機:</label>
              <input
                onChange={(e) => setPhone(e.target.value)}
                type="text"
                id="signUpPhone"
                className="form-control"
                maxLength="10"
                required
              />
            </div>
            <div className="mb-3">
              <button className="btn btn-primary">Create Account</button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default SignUpView;
