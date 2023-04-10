import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children, title, subtitle }) => {
  return (
    <div>
      <Header title={title} subtitle={subtitle} />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
