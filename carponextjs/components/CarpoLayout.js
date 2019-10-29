import MainHeader from "./Header";
import Footer from "./Footer";

const Layout = props => (
  <div>
    <MainHeader />
    {props.children}
    <Footer />
  </div>
);
export default Layout;
