/* eslint-disable react/prop-types */
import { Navbar } from "./Header";
import { Footer } from "./Footer";

function Layout(props) {
  const { nav, setState, children } = props;
  return (
    <div className="layout">
      <Navbar nav={nav} setState={setState} />
      {children}
      <Footer />
    </div>
  );
}
export default Layout;
