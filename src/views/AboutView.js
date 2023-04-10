// import { Link } from "react-router-dom";
import Layout from "../components/Layout";

//本頁面的title和subtitle沒有設定，所以要傳入預設，預設值在Header.js有設定
const title = undefined;
const subtitle = undefined;

const AboutView = () => {
  return (
    <Layout title={title} subtitle={subtitle}>
      <h1>About View</h1>
    </Layout>
  );
};

export default AboutView;
