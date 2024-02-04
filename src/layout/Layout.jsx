/* eslint-disable react/prop-types */
import { Navbar } from "./Header";
import { Footer } from "./Footer";

function Layout(props) {
  const { nav, title, setState, children } = props;
  return (
    <div className="layout">
      <div className="h1">{title}</div>

      <Navbar nav={nav} setState={setState} />
      {children}
      <Footer />
    </div>
  );
}
export default Layout;
