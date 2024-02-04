/* eslint-disable react/prop-types */
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Testride from "./Testride";
function Content(props) {
  const { state } = props;

  if (state === "Home") {
    return <Home />;
  } else if (state === "Contact") {
    return <Contact />;
  } else if (state === "About") {
    return <About />;
  } else if (state === "Testride") {
    return <Testride />;
  } else {
    return null;
  }
}

export default Content;
