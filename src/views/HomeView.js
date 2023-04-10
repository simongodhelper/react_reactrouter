// import { Link } from "react-router-dom";
import Layout from "../components/Layout";

const HomeView = () => {
  //本頁面的title和subtitle專門的字串，所以不用再傳入Layout
  const title = "First page";
  const subtitle = "Product page";
  return (
    <div>
      <Layout title={title} subtitle={subtitle}>
        <h1>Home View</h1>
      </Layout>
    </div>
  );
};

export default HomeView;
